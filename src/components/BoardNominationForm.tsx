import { useEffect, useRef } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/survey-core.min.css";
import { NOMINATE_BOARD_URL } from "../lib/api.ts";
import { createTokenGate, getTurnstileSiteKey } from "../lib/turnstile.ts";



const surveyJson = {
    pages: [
        {
            name: "Nominate a board candidate",
            elements: [
                {
                    type: "text",
                    name: "name",
                    title: "Your name",
                    isRequired: true,
                },
                {
                    type: "text",
                    name: "email",
                    title: "Your email",
                    isRequired: true,
                    inputType: "email",
                    autocomplete: "email",
                    validators: [{ type: "email" }],
                },
                {
                    type: "text",
                    name: "candidate_name",
                    title: "Candidate name",
                    isRequired: true,
                },
                {
                    type: "text",
                    name: "candidate_url",
                    title: "Candidate profile URL (LinkedIn, Wikipedia, etc.)",
                    isRequired: true,
                    inputType: "url",
                    validators: [
                        {
                            type: "regex",
                            text: "Please enter a valid URL starting with http:// or https://",
                            regex: "^https?:\\/\\/.+\\..+",
                        },
                    ],
                    placeholder: "https://www.linkedin.com/in/{profile}",
                },
                {
                    type: "comment",
                    name: "comment",
                    title: "Comments",
                    placeholder:
                        "Why would they strengthen the OSE board? Track record, experience, links",
                },
                {
                    type: "html",
                    name: "website_trap",
                    html: '<div style="position:absolute;left:-9999px;top:-9999px;height:0;overflow:hidden" aria-hidden="true"><label>Website<input type="text" name="website" tabindex="-1" autocomplete="off" id="hp-website-board"></label></div>',
                },
            ],
        },
    ],
    showTitle: false,
    completeText: "Nominate board candidate",
    // Initial completed-state HTML — shown briefly while the async submit
    // is in flight. onComplete swaps to SUCCESS_HTML or an error panel when
    // the fetch resolves so users never see a premature "Thank you!".
    completedHtml:
        "<div style='text-align:center;padding:2.5rem 1rem'><div style='font-size:2.5rem;margin-bottom:1rem;opacity:0.7'>&#9203;</div><h3 style='font-size:1.25rem;font-weight:500;margin:0;color:#3a3e43'>Submitting…</h3></div>",
};

const SUCCESS_HTML =
    "<div style='text-align:center;padding:2.5rem 1rem'><div style='font-size:3rem;margin-bottom:1rem'>&#127881;</div><h3 style='font-size:1.5rem;font-weight:600;margin:0 0 1rem;color:#3a3e43'>Thank you!</h3><p style='font-size:1.1rem;line-height:1.8;color:#3a3e43;max-width:30rem;margin:0 auto'>Thanks for helping us build a stronger board! We review every nomination and reach out to the best candidates.</p></div>";

const theme = {
    cssVariables: {
        "--sjs-primary-backcolor": "#5ba9ee",
        "--sjs-primary-backcolor-light": "rgba(91,169,238,0.1)",
        "--sjs-primary-backcolor-dark": "#005fa7",
        "--sjs-primary-forecolor": "#fff",
        "--sjs-general-backcolor": "transparent",
        "--sjs-general-backcolor-dim": "transparent",
        "--sjs-general-forecolor": "#3a3e43",
        "--sjs-general-forecolor-light": "rgba(58,62,67,0.55)",
        "--sjs-border-default": "#e0e0e0",
        "--sjs-border-light": "#e0e0e0",
        "--sjs-font-family": "inherit",
        "--sjs-corner-radius": "4px",
        "--sjs-base-unit": "8px",
        "--sjs-shadow-small": "none",
        "--sjs-shadow-inner": "none",
        "--sjs-editorpanel-backcolor": "white",
        "--sjs-editor-background": "white",
    },
    isPanelless: true,
};

export default function BoardNominationForm() {
    const formLoadedAt = useRef(Date.now() / 1000);
    const turnstileGate = useRef(createTokenGate()).current;
    const turnstileRef = useRef<HTMLDivElement>(null);

    // Stable survey model — created once, never recreated on re-render
    const intentFired = useRef(false);
    const surveyRef = useRef<Model | null>(null);
    if (!surveyRef.current) {
        const survey = new Model(surveyJson);
        survey.applyTheme(theme);

        // Fire nomination-intent on first field interaction
        survey.onValueChanged.add(() => {
            if (intentFired.current) return;
            intentFired.current = true;
            if (window.op) {
                window.op('track', 'board-nomination-intent');
            }
        });

        // We submit during onCompleting so the API result drives which
        // completedHtml renders on transition — see NominationForm.tsx for
        // the full rationale behind the `proceed` re-entry flag.
        let proceed = false;
        survey.onCompleting.add((sender, options) => {
            if (proceed) return; // re-entry from sender.doComplete() below
            options.allow = false;

            (async () => {
                // Await rather than read: with interaction-only appearance the
                // challenge often lands after the click, and reading once here
                // posted an empty token while the widget showed "Success!".
                const token = await turnstileGate.wait();
                console.log("[Turnstile] Submitting with token:", token ? token.slice(0, 20) + "..." : "(empty)");
                const hpField = document.getElementById("hp-website-board") as HTMLInputElement | null;
                const payload = {
                    ...sender.data,
                    website: hpField?.value || undefined,
                    turnstile_token: token,
                    form_loaded_at: formLoadedAt.current,
                    visitor_id: (window as any).__oseVisitorId || undefined,
                };

                const errorPanel = (msg: string) =>
                    `<div style="text-align:center;padding:2.5rem 1rem"><div style="font-size:3rem;margin-bottom:1rem">&#9888;&#65039;</div><h3 style="font-size:1.5rem;font-weight:600;margin:0 0 1rem;color:#3a3e43">${msg}</h3></div>`;

                try {
                    const response = await fetch(NOMINATE_BOARD_URL, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(payload),
                    });

                    if (!response.ok) {
                        const err = await response.json().catch(() => null);
                        const message = err?.detail || "Something went wrong. Please try again.";
                        const escaped = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
                        sender.completedHtml = errorPanel(escaped);
                    } else {
                        sender.completedHtml = SUCCESS_HTML;
                        if (window.op) {
                            const nameParts = (sender.data.name || '').trim().split(/\s+/);
                            window.op('identify', {
                                profileId: (window as any).__oseVisitorId,
                                firstName: nameParts[0] || '',
                                lastName: nameParts.slice(1).join(' ') || undefined,
                                email: sender.data.email,
                            });
                            window.op('track', 'board-nomination', {
                                candidate_url: sender.data.candidate_url,
                                has_comment: !!sender.data.comment,
                            });
                        }
                    }
                } catch {
                    sender.completedHtml = errorPanel("Network error. Please try again.");
                }

                proceed = true;
                // Defer to next tick so we're not nested inside SurveyJS's
                // own completion-attempt call stack.
                setTimeout(() => sender.doComplete(), 0);
            })();
        });

        surveyRef.current = survey;
    }

    useEffect(() => {
        const renderWidget = () => {
            if (!turnstileRef.current) {
                console.warn("[Turnstile] ref is null — cannot render widget");
                return;
            }
            if (!window.turnstile) {
                console.warn("[Turnstile] window.turnstile not available");
                return;
            }
            console.log("[Turnstile] Rendering widget...");
            const widgetId = window.turnstile.render(turnstileRef.current, {
                sitekey: getTurnstileSiteKey(),
                appearance: "interaction-only",
                callback: (token: string) => {
                    console.log("[Turnstile] Token received:", token.slice(0, 20) + "...");
                    turnstileGate.set(token);
                },
                "error-callback": (error: unknown) => {
                    console.error("[Turnstile] Error:", error);
                },
                "expired-callback": () => {
                    console.warn("[Turnstile] Token expired — resetting");
                    turnstileGate.clear();
                    if (window.turnstile) window.turnstile.reset(widgetId);
                },
            });
            console.log("[Turnstile] Widget rendered, id:", widgetId);
        };

        if (window.turnstile) {
            renderWidget();
        } else {
            console.log("[Turnstile] Waiting for script to load...");
            const interval = setInterval(() => {
                if (window.turnstile) {
                    clearInterval(interval);
                    console.log("[Turnstile] Script loaded");
                    renderWidget();
                }
            }, 200);
            const timeout = setTimeout(() => {
                clearInterval(interval);
                console.error("[Turnstile] Script failed to load after 10s");
            }, 10000);
            return () => {
                clearInterval(interval);
                clearTimeout(timeout);
            };
        }
    }, []);

    return (
        <>
            <style>{`
                .sd-input {
                    background: white !important;
                }
                .sd-comment {
                    border: 1px solid #e0e0e0 !important;
                    border-radius: 4px !important;
                }
            `}</style>
            <Survey model={surveyRef.current!} />
            <div
                ref={turnstileRef}
                style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
            />
        </>
    );
}
