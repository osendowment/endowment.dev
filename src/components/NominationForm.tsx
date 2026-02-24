import { useEffect, useRef } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/survey-core.min.css";

const TURNSTILE_SITE_KEY = "0x4AAAAAAChARxpm0A9_t-AB";
const IS_DEV = typeof window !== "undefined" && window.location.hostname === "localhost";

const surveyJson = {
    pages: [
        {
            name: "Nominate an OSS project",
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
                    name: "project_url",
                    title: "GitHub Repo URL of the project you're nominating",
                    isRequired: true,
                    validators: [
                        {
                            type: "regex",
                            text: "Please enter a valid GitHub repository URL (https://github.com/user/repo)",
                            regex: "^https?:\\/\\/github\\.com\\/[a-zA-Z0-9_.-]+\\/[a-zA-Z0-9_.-]+\\/?$",
                        },
                    ],
                    placeholder: "https://github.com/{user}/{repo}",
                },
                {
                    type: "comment",
                    name: "comment",
                    title: "Comments",
                    placeholder:
                        "Why do you think this OSS is valuable but underfunded? Please briefly explain why you're nominating this project",
                },
                {
                    type: "html",
                    name: "website_trap",
                    html: '<div style="position:absolute;left:-9999px;top:-9999px;height:0;overflow:hidden" aria-hidden="true"><label>Website<input type="text" name="website" tabindex="-1" autocomplete="off" id="hp-website"></label></div>',
                },
            ],
        },
    ],
    showTitle: false,
    completeText: "Nominate OSS project for funding",
    completedHtml:
        "<div style='text-align:center;padding:2.5rem 1rem'><div style='font-size:3rem;margin-bottom:1rem'>&#127881;</div><h3 style='font-size:1.5rem;font-weight:600;margin:0 0 1rem;color:#3a3e43'>Thank you!</h3><p style='font-size:1.1rem;line-height:1.8;color:#3a3e43;max-width:30rem;margin:0 auto'>Thanks for highlighting the most important OSS projects requiring funding! You made an impact today, and can multiply it by sharing this page with other open source folks.</p></div>",
};

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

export default function NominationForm() {
    const formLoadedAt = useRef(Date.now() / 1000);
    const turnstileTokenRef = useRef<string>("");
    const turnstileRef = useRef<HTMLDivElement>(null);

    // Stable survey model — created once, never recreated on re-render
    const surveyRef = useRef<Model | null>(null);
    if (!surveyRef.current) {
        const survey = new Model(surveyJson);
        survey.applyTheme(theme);

        survey.onComplete.add(async (sender) => {
            const token = turnstileTokenRef.current;
            console.log("[Turnstile] Submitting with token:", token ? token.slice(0, 20) + "..." : "(empty)");
            const hpField = document.getElementById("hp-website") as HTMLInputElement | null;
            const payload = {
                ...sender.data,
                website: hpField?.value || undefined,
                turnstile_token: token,
                form_loaded_at: formLoadedAt.current,
            };

            try {
                const response = await fetch(
                    "https://data.endowment.dev/api/public/nominate",
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(payload),
                    }
                );

                if (!response.ok) {
                    const err = await response.json().catch(() => null);
                    const message = err?.detail || "Something went wrong. Please try again.";
                    const escaped = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
                    sender.completedHtml = `<div style="text-align:center;padding:2.5rem 1rem"><div style="font-size:3rem;margin-bottom:1rem">&#9888;&#65039;</div><h3 style="font-size:1.5rem;font-weight:600;margin:0 0 1rem;color:#3a3e43">${escaped}</h3></div>`;
                }
            } catch {
                sender.completedHtml =
                    '<div style="text-align:center;padding:2.5rem 1rem"><div style="font-size:3rem;margin-bottom:1rem">&#9888;&#65039;</div><h3 style="font-size:1.5rem;font-weight:600;margin:0 0 1rem;color:#3a3e43">Network error. Please try again.</h3></div>';
            }
        });

        surveyRef.current = survey;
    }

    useEffect(() => {
        if (IS_DEV) {
            console.log("[Turnstile] DEV mode — bypassing");
            turnstileTokenRef.current = "dev-bypass";
            return;
        }

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
                sitekey: TURNSTILE_SITE_KEY,
                appearance: "interaction-only",
                callback: (token: string) => {
                    console.log("[Turnstile] Token received:", token.slice(0, 20) + "...");
                    turnstileTokenRef.current = token;
                },
                "error-callback": (error: unknown) => {
                    console.error("[Turnstile] Error:", error);
                },
                "expired-callback": () => {
                    console.warn("[Turnstile] Token expired — resetting");
                    turnstileTokenRef.current = "";
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
            {!IS_DEV && (
                <div
                    ref={turnstileRef}
                    style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
                />
            )}
        </>
    );
}
