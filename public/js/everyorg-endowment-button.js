!(function (e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = (n[r] = { i: r, l: !1, exports: {} });
        return (e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports);
    }
    var n = {};
    ((t.m = e),
        (t.c = n),
        (t.d = function (e, n, r) {
            t.o(e, n) ||
                Object.defineProperty(e, n, { enumerable: !0, get: r });
        }),
        (t.r = function (e) {
            ("undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 }));
        }),
        (t.t = function (e, n) {
            if ((1 & n && (e = t(e)), 8 & n)) return e;
            if (4 & n && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (
                (t.r(r),
                Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e,
                }),
                2 & n && "string" != typeof e)
            )
                for (var o in e)
                    t.d(
                        r,
                        o,
                        function (t) {
                            return e[t];
                        }.bind(null, o),
                    );
            return r;
        }),
        (t.n = function (e) {
            var n =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return (t.d(n, "a", n), n);
        }),
        (t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (t.p = "https://assets.every.org/dist/donate-button/0.4/"),
        t((t.s = "Pq/i")));
})({
    "/hs+": function (e, t, n) {
        "use strict";
        function r(e, t) {
            var n =
                ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
            if (n) return (n = n.call(e)).next.bind(n);
            if (
                Array.isArray(e) ||
                (n = (function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if (
                        "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    )
                        return o(e, t);
                })(e)) ||
                (t && e && "number" == typeof e.length)
            ) {
                n && (e = n);
                var r = 0;
                return function () {
                    return r >= e.length
                        ? { done: !0 }
                        : { done: !1, value: e[r++] };
                };
            }
            throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
        }
        function o(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function i(e) {
            var t,
                n,
                r,
                o,
                i,
                a =
                    ((n = (t = e).rules),
                    (r = t.cache),
                    (o = t.insert),
                    (i = t.prefix),
                    function e(t, a, c) {
                        return (
                            void 0 === a && (a = ""),
                            Object.keys(t)
                                .map(function (l) {
                                    var u,
                                        s = null != (u = t[l]) ? u : "";
                                    if (null === s) return "";
                                    if ("object" == typeof s) {
                                        var d = l.startsWith("@") ? l : null;
                                        return e(
                                            s,
                                            d ? a : a + l,
                                            null != d ? d : c,
                                        );
                                    }
                                    var f = l + s + a + c;
                                    if (r[f]) return r[f];
                                    var p = i + n.length.toString(36);
                                    return (
                                        o(
                                            (function (e, t) {
                                                return t
                                                    ? t + "{" + e + "}"
                                                    : e;
                                            })(
                                                (function (e, t, n) {
                                                    return (
                                                        "." +
                                                        e +
                                                        "{" +
                                                        t
                                                            .replace(
                                                                /[A-Z]|^ms/g,
                                                                "-$&",
                                                            )
                                                            .toLowerCase() +
                                                        ":" +
                                                        n +
                                                        "}"
                                                    );
                                                })(
                                                    p + a.replace(/&/g, ""),
                                                    l,
                                                    s,
                                                ),
                                                c,
                                            ),
                                        ),
                                        (r[f] = p),
                                        p
                                    );
                                })
                                .join(" ")
                        );
                    });
            return function () {
                for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                )
                    t[n] = arguments[n];
                return t
                    .map(function (e) {
                        return a(e);
                    })
                    .join(" ")
                    .trim();
            };
        }
        function a(e, t) {
            if (null == e) return {};
            var n,
                r,
                o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++)
                t.indexOf((n = i[r])) >= 0 || (o[n] = e[n]);
            return o;
        }
        function c() {
            return (
                (c = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                c.apply(this, arguments)
            );
        }
        function l(e) {
            return Object.entries(e)
                .filter(function (e) {
                    return Boolean(e[1]);
                })
                .map(function (e) {
                    return e
                        .map(function (e) {
                            return encodeURIComponent(e);
                        })
                        .join("=");
                })
                .join("&");
        }
        function u(e) {
            var t = e.fundraiserSlug,
                n = pt + e.nonprofitSlug;
            return (t && (n += "/f/" + t), n);
        }
        function s(e) {
            var t,
                n = e.methods,
                r = e.nonprofitSlug,
                o = e.noExit,
                i = e.privateNote,
                a = e.publicTestimony,
                l = e.utmSource,
                u = e.webhookToken,
                s = e.partnerMetadata,
                g = e.partnerDonationId, // OSE patch: extract partnerDonationId from input config
                d = e.designation,
                f = e.requireShareInfo,
                p = (function () {
                    var e = new URL(window.location.href),
                        t = {};
                    return (
                        Object.values(ft).forEach(function (n) {
                            var r = e.searchParams.get(n);
                            r && (t[n] = r);
                        }),
                        t
                    );
                })();
            return c(
                (((t = {})[dt.METHOD] = null == n ? void 0 : n.join(",")),
                (t[dt.NO_EXIT] = null != o ? o : 1),
                (t[dt.PRIVATE_NOTE] = i),
                (t[dt.PUBLIC_TESTIMONY] = a),
                (t[dt.PARTNER_WEBHOOK_TOKEN] = u),
                (t[dt.PARTNER_METADATA] = s),
                (t[dt.PARTNER_DONATION_ID] = g), // OSE patch: write partner_donation_id to output URL
                (t[dt.DESIGNATION] = d),
                (t[dt.REQUIRE_SHARE_INFO] = f),
                (t[ft.utm_campaign] = "donate-button"),
                (t[ft.utm_source] = null != l ? l : r),
                (t[ft.utm_medium] = Tt),
                t),
                p,
            );
        }
        function d(e) {
            if (e) {
                var t = Number.parseInt(e, 10);
                return Number.isNaN(t) ? void 0 : t;
            }
        }
        function f(e) {
            var t,
                n,
                r,
                o,
                i,
                a,
                c,
                l,
                u = new URL(e),
                s = u.pathname.split("/f/")[1],
                f = u.pathname.split("/")[1],
                p = new URLSearchParams(u.search),
                g = (function (e) {
                    if (e)
                        return e.split(",").filter(function (e) {
                            return Rt.includes(e);
                        });
                })(p.get(dt.METHOD)),
                b = (function (e) {
                    if (e)
                        return Object.values(st).find(function (t) {
                            return t.toUpperCase() === e.toUpperCase();
                        });
                })(p.get(dt.FREQUENCY)),
                m = d(p.get(dt.AMOUNT)),
                h = null != (t = p.get(dt.MONTHLY_TITLE)) ? t : void 0,
                y = (function (e) {
                    if (e)
                        return e
                            .split(",")
                            .map(Number.parseFloat)
                            .filter(Boolean)
                            .slice(0, Lt);
                })(p.get(dt.SUGGESTED_AMOUNTS)),
                v = null != (n = p.get(ft.utm_source)) ? n : void 0,
                _ =
                    null != (r = d(p.get(dt.MIN_VALUE)))
                        ? r
                        : d(p.get(Dt.MIN_AMOUNT)),
                O = null != (o = p.get(dt.DESIGNATION)) ? o : void 0,
                C = (function (e) {
                    if (e) return "true" === e;
                })(p.get(dt.REQUIRE_SHARE_INFO)),
                j =
                    null !=
                    (i =
                        null != (a = p.get(dt.THEME_COLOR))
                            ? a
                            : p.get(Dt.THEME_COLOR))
                        ? i
                        : void 0,
                w = j ? (j.startsWith("#") ? j : "#" + j) : void 0,
                N = null != (c = p.get(dt.PARTNER_WEBHOOK_TOKEN)) ? c : void 0,
                k = null != (l = p.get(dt.PARTNER_METADATA)) ? l : void 0,
                E = p.get(dt.PARTNER_DONATION_ID) || void 0; // OSE patch: read partner_donation_id from button href
            if (f)
                return Object.fromEntries(
                    Object.entries({
                        fundraiserSlug: s,
                        nonprofitSlug: f,
                        frequency: b,
                        defaultFrequency: b,
                        methods: g,
                        monthlyTitle: h,
                        addAmounts: y,
                        utmSource: v,
                        amount: m,
                        defaultDonationAmount: m,
                        minDonationAmount: _,
                        primaryColor: w,
                        designation: O,
                        requireShareInfo: C,
                        webhookToken: N,
                        partnerMetadata: k,
                        partnerDonationId: E, // OSE patch: include in parsed config object
                    }).filter(function (e) {
                        return void 0 !== e[1];
                    }),
                );
        }
        function p(e, t) {
            (rt.i.__h && rt.i.__h(et, e, Ut || t), (Ut = 0));
            var n = et.__H || (et.__H = { __: [], __h: [] });
            return (e >= n.__.length && n.__.push({ __V: Ft }), n.__[e]);
        }
        function g(e) {
            return ((Ut = 1), b(k, e));
        }
        function b(e, t, n) {
            var r = p(Je++, 2);
            if (
                ((r.t = e),
                !r.__c &&
                    ((r.__ = [
                        n ? n(t) : k(void 0, t),
                        function (e) {
                            var t = r.__N ? r.__N[0] : r.__[0],
                                n = r.t(t, e);
                            t !== n &&
                                ((r.__N = [n, r.__[1]]), r.__c.setState({}));
                        },
                    ]),
                    (r.__c = et),
                    !et.u))
            ) {
                var o = function (e, t, n) {
                    if (!r.__c.__H) return !0;
                    var o = r.__c.__H.__.filter(function (e) {
                        return e.__c;
                    });
                    if (
                        o.every(function (e) {
                            return !e.__N;
                        })
                    )
                        return !i || i.call(this, e, t, n);
                    var a = !1;
                    return (
                        o.forEach(function (e) {
                            if (e.__N) {
                                var t = e.__[0];
                                ((e.__ = e.__N),
                                    (e.__N = void 0),
                                    t !== e.__[0] && (a = !0));
                            }
                        }),
                        !(!a && r.__c.props === e) &&
                            (!i || i.call(this, e, t, n))
                    );
                };
                et.u = !0;
                var i = et.shouldComponentUpdate,
                    a = et.componentWillUpdate;
                ((et.componentWillUpdate = function (e, t, n) {
                    if (this.__e) {
                        var r = i;
                        ((i = void 0), o(e, t, n), (i = r));
                    }
                    a && a.call(this, e, t, n);
                }),
                    (et.shouldComponentUpdate = o));
            }
            return r.__N || r.__;
        }
        function m(e, t) {
            var n = p(Je++, 3);
            !rt.i.__s &&
                N(n.__H, t) &&
                ((n.__ = e), (n.i = t), et.__H.__h.push(n));
        }
        function h(e) {
            return (
                (Ut = 5),
                y(function () {
                    return { current: e };
                }, [])
            );
        }
        function y(e, t) {
            var n = p(Je++, 7);
            return N(n.__H, t)
                ? ((n.__V = e()), (n.i = t), (n.__h = e), n.__V)
                : n.__;
        }
        function v(e, t) {
            return (
                (Ut = 8),
                y(function () {
                    return e;
                }, t)
            );
        }
        function _(e) {
            var t = et.context[e.__c],
                n = p(Je++, 9);
            return (
                (n.c = e),
                t
                    ? (null == n.__ && ((n.__ = !0), t.sub(et)), t.props.value)
                    : e.__
            );
        }
        function O() {
            for (var e; (e = Bt.shift()); )
                if (e.__P && e.__H)
                    try {
                        (e.__H.__h.forEach(j),
                            e.__H.__h.forEach(w),
                            (e.__H.__h = []));
                    } catch (t) {
                        ((e.__H.__h = []), rt.i.__e(t, e.__v));
                    }
        }
        function C(e) {
            var t,
                n = function () {
                    (clearTimeout(r),
                        Qt && cancelAnimationFrame(t),
                        setTimeout(e));
                },
                r = setTimeout(n, 100);
            Qt && (t = requestAnimationFrame(n));
        }
        function j(e) {
            var t = et,
                n = e.__c;
            ("function" == typeof n && ((e.__c = void 0), n()), (et = t));
        }
        function w(e) {
            var t = et;
            ((e.__c = e.__()), (et = t));
        }
        function N(e, t) {
            return (
                !e ||
                e.length !== t.length ||
                t.some(function (t, n) {
                    return t !== e[n];
                })
            );
        }
        function k(e, t) {
            return "function" == typeof t ? t(e) : t;
        }
        function T() {
            var e,
                t =
                    null == (e = document.currentScript) ||
                    null == (e = e.getAttribute("src"))
                        ? void 0
                        : e.split("?")[1],
                n =
                    null == t
                        ? void 0
                        : t.split("&").map(function (e) {
                              var t = e.split("=");
                              return [t[0], t[1]];
                          });
            return n && Object.fromEntries(n);
        }
        function S(e, t, n, r, o, i, a) {
            try {
                var c = e[i](a),
                    l = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(l) : Promise.resolve(l).then(r, o);
        }
        function x(e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise(function (r, o) {
                    function i(e) {
                        S(c, r, o, i, a, "next", e);
                    }
                    function a(e) {
                        S(c, r, o, i, a, "throw", e);
                    }
                    var c = e.apply(t, n);
                    i(void 0);
                });
            };
        }
        function A() {
            return (Yt =
                Yt ||
                x(function* (e) {
                    var t,
                        n = yield fetch(gt + "/" + e).then(function (e) {
                            return (t =
                                t ||
                                x(function* (e) {
                                    return e.json();
                                })).apply(this, arguments);
                        });
                    return n.data.nonprofit;
                })).apply(this, arguments);
        }
        function I(e, t, n, r, o, i, a) {
            try {
                var c = e[i](a),
                    l = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(l) : Promise.resolve(l).then(r, o);
        }
        function E(e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise(function (r, o) {
                    function i(e) {
                        I(c, r, o, i, a, "next", e);
                    }
                    function a(e) {
                        I(c, r, o, i, a, "throw", e);
                    }
                    var c = e.apply(t, n);
                    i(void 0);
                });
            };
        }
        function R(e, t, n, r, o, i, a) {
            try {
                var c = e[i](a),
                    l = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(l) : Promise.resolve(l).then(r, o);
        }
        function P(e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise(function (r, o) {
                    function i(e) {
                        R(c, r, o, i, a, "next", e);
                    }
                    function a(e) {
                        R(c, r, o, i, a, "throw", e);
                    }
                    var c = e.apply(t, n);
                    i(void 0);
                });
            };
        }
        function M(e, t, n, r, o, i, a) {
            try {
                var c = e[i](a),
                    l = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(l) : Promise.resolve(l).then(r, o);
        }
        function L(e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise(function (r, o) {
                    function i(e) {
                        M(c, r, o, i, a, "next", e);
                    }
                    function a(e) {
                        M(c, r, o, i, a, "throw", e);
                    }
                    var c = e.apply(t, n);
                    i(void 0);
                });
            };
        }
        function D() {
            var e,
                t,
                n,
                r,
                o =
                    ((t = g(null)),
                    (n = t[0]),
                    (r = t[1]),
                    m(function () {
                        L(function* () {
                            try {
                                var e = yield ir(ar, { apiVersion: cr });
                                r(e);
                            } catch (e) {}
                        })();
                    }, []),
                    n),
                i = g(!1),
                a = i[0],
                c = i[1],
                l = g(!1),
                u = l[0],
                s = l[1],
                d = v(function (t) {
                    return (e =
                        e ||
                        L(function* (e) {
                            var t = Boolean(window.ApplePaySession);
                            if ((s(t), e)) {
                                var n =
                                        null == e
                                            ? void 0
                                            : e.paymentRequest({
                                                  country: "US",
                                                  currency: "usd",
                                                  total: {
                                                      label: "test",
                                                      amount: 0,
                                                  },
                                                  requestPayerName: !1,
                                                  requestPayerEmail: !1,
                                              }),
                                    r = Boolean(
                                        yield null == n
                                            ? void 0
                                            : n.canMakePayment(),
                                    );
                                c(r);
                            }
                        })).apply(this, arguments);
                }, []);
            return (
                m(
                    function () {
                        d(o);
                    },
                    [d, o],
                ),
                { googlePay: a, applePay: u }
            );
        }
        function H() {
            return (
                (H = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                H.apply(this, arguments)
            );
        }
        function U(e) {
            var t;
            return null != (t = e.metadata) && t.prefixWithThe
                ? "the " + e.name
                : e.name;
        }
        function B(e) {
            if (e.disbursementType === sn.STRIPE_CONNECT)
                return Object(rt.g)(
                    "span",
                    null,
                    "On a weekly basis, Every.org grants to ",
                    e.name,
                    ".",
                );
            if (e.disbursementType === sn.MANUAL)
                return Object(rt.g)(
                    "span",
                    null,
                    "Every.org grants directly to ",
                    e.name,
                    " on a regular basis.",
                );
            var t = e.disbursementType === sn.PAYPAL_GRANTS;
            return Object(rt.g)(
                "span",
                null,
                "We then partner with ",
                t ? "PayPal Grants" : "Network for Good",
                " to grant to ",
                e.name,
                " on a",
                " ",
                Cn ||
                    (Cn = Object(rt.g)(
                        "a",
                        {
                            className: Er,
                            href: "https://networkforgood.zendesk.com/hc/en-us/articles/115006168307-How-does-my-organization-get-paid-",
                        },
                        "monthly basis",
                    )),
                t ? " (or semiannually for balance under $100)." : ".",
            );
        }
        function F(e) {
            return e.disbursementType &&
                e.disbursementType !== sn.NFG_BATCH_FILE
                ? null
                : Object(rt.g)(
                      "p",
                      null,
                      e.name,
                      " has not added bank deposit info to Every.org yet, so we currently grant to them through Network for Good, who charges a 2.25% disbursement fee.",
                  );
        }
        function G(e, t) {
            return Object(rt.g)(
                rt.b,
                null,
                In ||
                    (In = Object(rt.g)(
                        "p",
                        null,
                        "Every.org is free for donors and nonprofits, with no platform fees - instead we ask for a completely optional tip.",
                    )),
                (function (e, t) {
                    switch (e) {
                        case It.PAYPAL:
                            return Object(rt.g)(
                                rt.b,
                                null,
                                jn ||
                                    (jn = Object(rt.g)(
                                        "p",
                                        null,
                                        "PayPal charges 1.99% + $0.49 for each transaction. There’s an additional 1.5% fee for non-US donors.",
                                    )),
                                F(t),
                            );
                        case It.CREDIT_CARD:
                        case It.PAYMENT_REQUEST:
                            return Object(rt.g)(
                                rt.b,
                                null,
                                wn ||
                                    (wn = Object(rt.g)(
                                        "p",
                                        null,
                                        "Visa and Mastercard charge 2.2% + $0.30 for each transaction. Amex charges a 3.5% flat fee. There’s an additional 1% fee for non-US cards.",
                                    )),
                                F(t),
                            );
                        case It.BANK:
                            return (
                                Nn ||
                                (Nn = Object(rt.g)(
                                    "p",
                                    null,
                                    "Every.org currently covers the small ACH fees for donations made with a bank.",
                                ))
                            );
                        case It.VENMO:
                            return Object(rt.g)(
                                rt.b,
                                null,
                                kn ||
                                    (kn = Object(rt.g)(
                                        "p",
                                        null,
                                        "Venmo charges 1.99% + $0.49 for each transaction. There’s an additional 1.5% fee for non-US donors.",
                                    )),
                                F(t),
                            );
                        case It.CRYPTO:
                            return Object(rt.g)(
                                rt.b,
                                null,
                                Tn ||
                                    (Tn = Object(rt.g)(
                                        "p",
                                        null,
                                        "Our exchanges charge a 1% flat fee to automatically liquidate cryptocurrency immediately after donation. Every.org does not charge any fees of our own. While usually not recommended, for donations worth over $100k, donors have the option to email crypto@every.org to arrange for manual exchange and potentially a lower fee. But even for large donations, we encourage you to immediately donate on the website. Donating here is the most straightforward and secure method to minimize risk of phishing or delays and loss caused by slippage.",
                                    )),
                                F(t),
                            );
                        case It.STOCKS:
                            return Object(rt.g)(
                                rt.b,
                                null,
                                Sn ||
                                    (Sn = Object(rt.g)(
                                        "p",
                                        null,
                                        "Every.org covers all brokerage fees for commonly traded stocks! For mutual funds, the First Republic brokerage fee is usually 0.1% of the principle, with a $30 minimum and $150 maximum. Some slippage may occur between when you donate and when we sell making the final amount different from what you donate.",
                                    )),
                                F(t),
                            );
                        case It.DAF:
                            return Object(rt.g)(
                                rt.b,
                                null,
                                xn ||
                                    (xn = Object(rt.g)(
                                        "p",
                                        null,
                                        "We do not charge any fees, but your DAF provider may have fees.",
                                    )),
                                F(t),
                            );
                        default:
                            return Object(rt.g)(
                                rt.b,
                                null,
                                An ||
                                    (An = Object(rt.g)(
                                        "p",
                                        null,
                                        "However, there are third-party fees.",
                                    )),
                                F(t),
                            );
                    }
                })(e, t),
            );
        }
        function X() {
            return (
                (X = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                X.apply(this, arguments)
            );
        }
        function q() {
            return (
                (q = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                q.apply(this, arguments)
            );
        }
        function W(e) {
            return !(null == e);
        }
        function z(e) {
            var t;
            return (function (e, t) {
                var n = Object.entries(t)
                    .map(function (e) {
                        var t = e[0],
                            n = e[1];
                        try {
                            return [t, n].map(encodeURIComponent).join("=");
                        } catch (e) {
                            return null;
                        }
                    })
                    .filter(W)
                    .join("&");
                return n ? [e, n].join("?") : e;
            })(
                "mailto:" + (null != (t = e.address) ? t : ""),
                q(
                    {},
                    e.subject ? { subject: e.subject } : {},
                    e.body ? { body: e.body } : {},
                ),
            );
        }
        function V() {
            return (
                (V = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                V.apply(this, arguments)
            );
        }
        function Y() {
            return (
                (Y = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                Y.apply(this, arguments)
            );
        }
        function K(e, t, n, r) {
            var o = e.c;
            if (
                (n === Bo && (n = e.constructor.RM),
                0 !== n && 1 !== n && 2 !== n && 3 !== n)
            )
                throw Error(Do);
            if (t < 1)
                ((r =
                    (3 === n && (r || !!o[0])) ||
                    (0 === t &&
                        ((1 === n && o[0] >= 5) ||
                            (2 === n &&
                                (o[0] > 5 ||
                                    (5 === o[0] && (r || o[1] !== Bo))))))),
                    (o.length = 1),
                    r ? ((e.e = e.e - t + 1), (o[0] = 1)) : (o[0] = e.e = 0));
            else if (t < o.length) {
                if (
                    ((r =
                        (1 === n && o[t] >= 5) ||
                        (2 === n &&
                            (o[t] > 5 ||
                                (5 === o[t] &&
                                    (r || o[t + 1] !== Bo || 1 & o[t - 1])))) ||
                        (3 === n && (r || !!o[0]))),
                    (o.length = t),
                    r)
                )
                    for (; ++o[--t] > 9; )
                        if (((o[t] = 0), 0 === t)) {
                            (++e.e, o.unshift(1));
                            break;
                        }
                for (t = o.length; !o[--t]; ) o.pop();
            }
            return e;
        }
        function Z(e, t, n) {
            var r = e.e,
                o = e.c.join(""),
                i = o.length;
            if (t)
                o =
                    o.charAt(0) +
                    (i > 1 ? "." + o.slice(1) : "") +
                    (r < 0 ? "e" : "e+") +
                    r;
            else if (r < 0) {
                for (; ++r; ) o = "0" + o;
                o = "0." + o;
            } else if (r > 0)
                if (++r > i) for (r -= i; r--; ) o += "0";
                else r < i && (o = o.slice(0, r) + "." + o.slice(r));
            else i > 1 && (o = o.charAt(0) + "." + o.slice(1));
            return e.s < 0 && n ? "-" + o : o;
        }
        function Q() {
            return (
                (Q = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                Q.apply(this, arguments)
            );
        }
        function $() {
            return (
                ($ = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                $.apply(this, arguments)
            );
        }
        function J(e, t) {
            for (var n in t) e[n] = t[n];
            return e;
        }
        function ee(e, t) {
            for (var n in e) if ("__source" !== n && !(n in t)) return !0;
            for (var r in t) if ("__source" !== r && e[r] !== t[r]) return !0;
            return !1;
        }
        function te(e) {
            this.props = e;
        }
        function ne(e) {
            function t(t) {
                var n = J({}, t);
                return (delete n.ref, e(n, t.ref || null));
            }
            return (
                (t.$$typeof = gi),
                (t.render = t),
                (t.prototype.isReactComponent = t.__f = !0),
                (t.displayName =
                    "ForwardRef(" + (e.displayName || e.name) + ")"),
                t
            );
        }
        function re(e, t, n) {
            return (
                e &&
                    (e.__c &&
                        e.__c.__H &&
                        (e.__c.__H.__.forEach(function (e) {
                            "function" == typeof e.__c && e.__c();
                        }),
                        (e.__c.__H = null)),
                    null != (e = J({}, e)).__c &&
                        (e.__c.__P === n && (e.__c.__P = t), (e.__c = null)),
                    (e.__k =
                        e.__k &&
                        e.__k.map(function (e) {
                            return re(e, t, n);
                        }))),
                e
            );
        }
        function oe(e, t, n) {
            return (
                e &&
                    ((e.__v = null),
                    (e.__k =
                        e.__k &&
                        e.__k.map(function (e) {
                            return oe(e, t, n);
                        })),
                    e.__c &&
                        e.__c.__P === t &&
                        (e.__e && n.insertBefore(e.__e, e.__d),
                        (e.__c.__e = !0),
                        (e.__c.__P = n))),
                e
            );
        }
        function ie() {
            ((this.__u = 0), (this.t = null), (this.__b = null));
        }
        function ae(e) {
            var t = e.__.__c;
            return t && t.__a && t.__a(e);
        }
        function ce() {
            ((this.u = null), (this.o = null));
        }
        function le() {}
        function ue() {
            return this.cancelBubble;
        }
        function se() {
            return this.defaultPrevented;
        }
        function de() {
            return (
                (de = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                de.apply(this, arguments)
            );
        }
        function fe() {
            return (
                (fe = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                fe.apply(this, arguments)
            );
        }
        function pe() {
            return (
                (pe = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                pe.apply(this, arguments)
            );
        }
        function ge(e) {
            var t = va[e];
            return "icon" in t
                ? t.icon
                : wo(t.iconCloudinaryId, { width: 24, height: 24 });
        }
        function be(e) {
            var t = ha[e];
            return t.displayName + " (" + t.abbreviation + ")";
        }
        function me(e) {
            var t = ha[e];
            return t.contractType ? "" + t.contractType : "";
        }
        function he(e, t, n) {
            return (
                new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: t,
                })
                    .format(Number.parseFloat(e.toString()))
                    .replace(/\D00(?=\D*$)/, "") +
                " " +
                (null != n && n.showCurrency ? " " + t : "")
            );
        }
        function ye() {
            return (
                (ye = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                ye.apply(this, arguments)
            );
        }
        function ve() {
            return (
                (ve = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                ve.apply(this, arguments)
            );
        }
        function _e() {
            return (
                (_e = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                _e.apply(this, arguments)
            );
        }
        function Oe() {
            return (
                (Oe = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                Oe.apply(this, arguments)
            );
        }
        function Ce() {
            return (
                (Ce = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                Ce.apply(this, arguments)
            );
        }
        function je() {
            return (
                (je = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                je.apply(this, arguments)
            );
        }
        function we() {
            return (
                (we = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                we.apply(this, arguments)
            );
        }
        function Ne() {
            return (
                (Ne = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                Ne.apply(this, arguments)
            );
        }
        function ke() {
            return (
                (ke = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                ke.apply(this, arguments)
            );
        }
        function Te() {
            return (
                (Te = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                Te.apply(this, arguments)
            );
        }
        function Se(e) {
            var t = e.paymentRequestIsApplePay,
                n = e.cryptoCurrency,
                r = "Continue with ";
            switch (e.method) {
                case It.CREDIT_CARD:
                    return r + "credit or debit";
                case It.BANK:
                    return r + "bank";
                case It.PAYPAL:
                    return r + "PayPal";
                case It.VENMO:
                    return r + "Venmo";
                case It.PAYMENT_REQUEST:
                    return r + (t ? "Apple Pay" : "Google Pay");
                case It.DAF:
                    return r + "Chariot";
                case It.CRYPTO:
                    return r + (null != n ? n : "crypto");
                case It.GIFT_CARD:
                    return "Redeem gift card";
                default:
                    return "Continue";
            }
        }
        function xe() {
            return (
                (xe = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                xe.apply(this, arguments)
            );
        }
        function Ae() {
            return (
                (Ae = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                Ae.apply(this, arguments)
            );
        }
        function Ie() {
            return (
                (Ie = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                Ie.apply(this, arguments)
            );
        }
        function Ee() {
            return (
                (Ee = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                Ee.apply(this, arguments)
            );
        }
        function Re() {
            return (
                (Re = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                Re.apply(this, arguments)
            );
        }
        function Pe() {
            return (
                (Pe = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                Pe.apply(this, arguments)
            );
        }
        function Me() {
            return (
                (Me = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                Me.apply(this, arguments)
            );
        }
        function Le() {
            return (
                (Le = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                Le.apply(this, arguments)
            );
        }
        function De() {
            return (
                (De = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                De.apply(this, arguments)
            );
        }
        function He(e, t, n) {
            return (
                (t = (function (e) {
                    var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(e, t || "default");
                            if ("object" != typeof r) return r;
                            throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                            );
                        }
                        return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : String(t);
                })(t)) in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        function Ue() {
            (pl ||
                (function () {
                    var e;
                    null ==
                        (e = document.querySelector("#every-shadow-wrapper")) ||
                        e.remove();
                    var t = document.createElement("div");
                    ((t.id = "every-shadow-wrapper"),
                        (t.style.position = "absolute"),
                        (t.style.zIndex = "2147483647"),
                        document.body.append(t),
                        (pl = t.attachShadow({ mode: "open" })));
                })(),
                ((gl = document.createElement("div")).id = "widget-container"),
                pl.append(gl));
            var e = document.createElement("style");
            ((e.id = "every-shadow-styles"), gl.append(e));
        }
        function Be(e) {
            var t = e.element,
                n = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                        t.indexOf((n = i[r])) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, os);
            if (t.parentNode) {
                var r = t.parentNode;
                Object(rt.j)(Object(rt.g)(At, n), r, t);
            }
        }
        function Fe() {
            document
                .querySelectorAll("*[href^='https://www.every.org/']")
                .forEach(function (e) {
                    var t = e.getAttribute("href");
                    if (null != t && t.includes("#/donate")) {
                        var n,
                            r = f(t);
                        if (!r) return;
                        var o =
                            null != (n = as.get(t))
                                ? n
                                : (function (e, t) {
                                      gl || Ue();
                                      var n = document.createElement("div");
                                      gl.append(n);
                                      var r = new ls(e, n);
                                      return (as.set(t, r), r);
                                  })(r, t);
                        cs || null !== e.getAttribute("data-every-style")
                            ? Be(
                                  De(
                                      {
                                          element: e,
                                          onClick: function () {
                                              o.show();
                                          },
                                      },
                                      r,
                                      { bgColor: r.primaryColor, url: t },
                                  ),
                              )
                            : e.addEventListener("click", function (e) {
                                  (e.preventDefault(), o.show());
                              });
                    }
                });
        }
        function Ge() {
            return (
                (Ge = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                Ge.apply(this, arguments)
            );
        }
        function Xe(e, t) {
            var n =
                ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
            if (n) return (n = n.call(e)).next.bind(n);
            if (
                Array.isArray(e) ||
                (n = (function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return qe(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if (
                        "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    )
                        return qe(e, t);
                })(e)) ||
                (t && e && "number" == typeof e.length)
            ) {
                n && (e = n);
                var r = 0;
                return function () {
                    return r >= e.length
                        ? { done: !0 }
                        : { done: !1, value: e[r++] };
                };
            }
            throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
        }
        function qe(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function We(e, t) {
            if (null == e) return {};
            var n,
                r,
                o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++)
                t.indexOf((n = i[r])) >= 0 || (o[n] = e[n]);
            return o;
        }
        function ze() {
            return (
                (ze = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r]);
                          }
                          return e;
                      }),
                ze.apply(this, arguments)
            );
        }
        n.r(t);
        var Ve,
            Ye,
            Ke,
            Ze,
            Qe,
            $e,
            Je,
            et,
            tt,
            nt,
            rt = n("NMMh"),
            ot = (function (e) {
                return (
                    (e.BasisGrotesque =
                        "'Basis Grotesque Pro', -apple-system, BlinkMacSystemFont,\n    'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Roboto,\n    sans-serif"),
                    e
                );
            })({}),
            it = (function () {
                var e = "every-embedded-button-",
                    t = {},
                    n = [],
                    r = function (e) {
                        n.push(e);
                    },
                    o = i({ rules: n, cache: t, insert: r, prefix: e });
                if ("undefined" != typeof document) {
                    var a = document.createElement("style");
                    a.id = "every-styles";
                    var c = document.head.appendChild(a).sheet;
                    ((r = function (e) {
                        (n.push(e),
                            null == c || c.insertRule(e, c.cssRules.length));
                    }),
                        (o = i({ rules: n, cache: t, insert: r, prefix: e })));
                }
                return o;
            })(),
            at =
                ((Ze = function (e) {
                    Ke.push(e);
                }),
                (Qe = i({
                    rules: (Ke = []),
                    cache: (Ye = {}),
                    insert: Ze,
                    prefix: (Ve = "every-embedded-"),
                })),
                "undefined" != typeof document &&
                    ((Ze = function (e) {
                        var t,
                            n = document.querySelector("#every-shadow-wrapper"),
                            o =
                                null == n || null == (t = n.shadowRoot)
                                    ? void 0
                                    : t.querySelector("#every-shadow-styles");
                        if (o) {
                            if (!o.innerHTML) {
                                o.innerHTML =
                                    "\n\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    font-family: 'Basis Grotesque Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Roboto, sans-serif;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  button {\n    color: unset;\n    background: unset;\n  }\n\n  h1, h2, h3, h4, h4, h6 {\n    font-weight: 700\n  }\n";
                                for (var i, a = r(Ke); !(i = a()).done; )
                                    o.innerHTML += i.value;
                            }
                            o.innerHTML += e;
                        }
                        Ke.push(e);
                    }),
                    (Qe = i({ rules: Ke, cache: Ye, insert: Ze, prefix: Ve }))),
                Qe),
            ct = it({
                display: "flex",
                alignItems: "center",
                width: "max-content",
                border: "none",
                outline: "none",
                fontFamily: ot.BasisGrotesque,
                fontWeight: 500,
                lineHeight: 1,
                cursor: "pointer",
                textDecoration: "none",
                backfaceVisibility: "hidden",
                transition: "background-color 0.25s",
                padding: "12px 20px",
                color: "#fff",
                backgroundColor: "#00a380",
                borderRadius: "100px",
                fontSize: "16px",
                "&:hover": { backgroundColor: "#2F806D" },
            }),
            lt = it({
                width: "16px",
                height: "16px",
                fill: "#fff",
                marginRight: "8px",
            }),
            ut = it({ transform: "translateY(0.08em)" }),
            st = (function (e) {
                return (
                    (e.Monthly = "monthly"),
                    (e.OneTime = "once"),
                    (e.Unselected = ""),
                    e
                );
            })({}),
            dt = (function (e) {
                return (
                    (e.DONATE_NONPROFIT_ID = "donateTo"),
                    (e.JOIN_DONATION_ID = "joinTo"),
                    (e.JOIN_DONATION_USER_ID = "joinUser"),
                    (e.MATCH_CAMPAIGN = "match"),
                    (e.DONATION_HEADER_TEXT = "donation_header_text"),
                    (e.REDIRECT_URL = "redirect_url"),
                    (e.FUNDRAISER_ID = "fundraiser_id"),
                    (e.MIN_VALUE = "min_value"),
                    (e.FREQUENCY_OPTIONS = "frequency_options"),
                    (e.REQUIRE_SHARE_INFO = "require_share_info"),
                    (e.METHOD = "method"),
                    (e.AMOUNT = "amount"),
                    (e.FREQUENCY = "frequency"),
                    (e.DONOR_FIRST_NAME = "first_name"),
                    (e.DONOR_LAST_NAME = "last_name"),
                    (e.DONOR_EMAIL = "email"),
                    (e.DESCRIPTION = "description"),
                    (e.MONTHLY_TITLE = "monthlyTitle"),
                    (e.PARTNER_DONATION_ID = "partner_donation_id"),
                    (e.PARTNER_WEBHOOK_TOKEN = "webhook_token"),
                    (e.PARTNER_METADATA = "partner_metadata"),
                    (e.TO_NONPROFITS = "to_nonprofits"),
                    (e.TO_NONPROFIT_WEIGHTS = "to_nonprofit_weights"),
                    (e.TO_NONPROFIT_MATCHINGS = "to_nonprofit_matchings"),
                    (e.RECURRING_MATCHES = "recurring_matches"),
                    (e.SHARE_INFO = "share_info"),
                    (e.NO_EXIT = "no_exit"),
                    (e.SUCCESS_URL = "success_url"),
                    (e.EXIT_URL = "exit_url"),
                    (e.GIFT_CARD_AMOUNT = "gift_card_amount"),
                    (e.GIFT_CARD_QUANTITY = "gift_card_quantity"),
                    (e.GIFT_CARD_NONPROFIT_ID = "gift_card_nonprofit_ID"),
                    (e.GIFT_CARD_TAG_ID = "gift_card_tag_ID"),
                    (e.THEME_COLOR = "theme_color"),
                    (e.THEME_COLOR_HIGHLIGHT = "theme_color_highlight"),
                    (e.CRYPTO_AMOUNT = "crypto_amount"),
                    (e.CRYPTO_CURRENCY = "crypto_currency"),
                    (e.STOCK_SYMBOL = "stock_symbol"),
                    (e.STOCK_AMOUNT = "stock_amount"),
                    (e.SUGGESTED_AMOUNTS = "suggestedAmounts"),
                    (e.DESIGNATION = "designation"),
                    (e.PRIVATE_NOTE = "private_note"),
                    (e.PUBLIC_TESTIMONY = "public_testimony"),
                    (e.SEARCH_META = "search_meta"),
                    (e.GIFT_CARD_CODE = "gift_card_code"),
                    e
                );
            })({}),
            ft = (function (e) {
                return (
                    (e.utm_id = "utm_id"),
                    (e.utm_source = "utm_source"),
                    (e.utm_medium = "utm_medium"),
                    (e.utm_campaign = "utm_campaign"),
                    (e.utm_term = "utm_term"),
                    (e.utm_content = "utm_content"),
                    e
                );
            })({}),
            pt = "https://www.every.org/",
            gt = "https://partners.every.org/v0.2/nonprofit",
            bt = "team@every.org",
            mt = "crypto@every.org",
            ht = "fundraiser",
            yt = pt + "terms",
            vt = pt + "support",
            _t = pt + "privacy",
            Ot = pt + "about-us",
            Ct = pt + "gift",
            jt = ["frequency", "amount"],
            wt = ["stockAmount", "stockSymbol"],
            Nt = ["cryptoAmount", "cryptoCurrency"],
            kt = ["redeemGiftCardInFlow", "giftCardCode"],
            Tt = "donate-button-0.4",
            St = "donate",
            xt = [
                "withLogo",
                "textColor",
                "bgColor",
                "borderRadius",
                "fontSize",
                "padding",
                "className",
                "onClick",
                "target",
                "url",
                "label",
            ],
            At = function (e) {
                var t,
                    n = e.withLogo,
                    r = void 0 === n || n,
                    o = e.textColor,
                    i = void 0 === o ? "#fff" : o,
                    a = e.bgColor,
                    c = void 0 === a ? "#00a380" : a,
                    d = e.borderRadius,
                    f = void 0 === d ? "100px" : d,
                    p = e.fontSize,
                    g = void 0 === p ? "16px" : p,
                    b = e.padding,
                    m = void 0 === b ? "12px 20px" : b,
                    h = e.className,
                    y = e.onClick,
                    v = e.target,
                    _ = void 0 === v ? "_blank" : v,
                    O = e.url,
                    C = e.label,
                    j = void 0 === C ? "Donate" : C,
                    w = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            o = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++)
                            t.indexOf((n = i[r])) >= 0 || (o[n] = e[n]);
                        return o;
                    })(e, xt),
                    N = O || u((t = w)) + "?" + l(s(t)) + "#/" + St;
                return Object(rt.g)(
                    "a",
                    {
                        href: N,
                        style: {
                            background: c,
                            color: i,
                            borderRadius: f,
                            fontSize: g,
                            padding: m,
                        },
                        className: [ct, h].filter(Boolean).join(" "),
                        target: _,
                        onClick: y
                            ? function (e) {
                                  (e.preventDefault(), y());
                              }
                            : void 0,
                    },
                    r &&
                        Object(rt.g)(
                            "svg",
                            {
                                className: lt,
                                style: { color: i, height: g, width: g },
                                width: "64",
                                height: "56",
                                viewBox: "0 0 64 56",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                            },
                            $e ||
                                ($e = Object(rt.g)("path", {
                                    d: "M48.3746 20.9558C48.3746 9.03877 38.4374 0 25.6754 0C11.4001 0 0 12.0685 0 27.0153C0 43.1235 12.8125 56 30.0639 56C47.3153 56 62.7508 42.3156 63.9614 24.3895H56.0924C54.6295 37.8215 43.2799 48.1226 30.0639 48.1226C17.3523 48.1226 7.91952 38.7809 7.91952 27.0153C7.91952 16.4112 15.7886 7.87737 25.6754 7.87737C33.948 7.87737 40.4551 13.5329 40.4551 20.9558C40.4551 27.1163 36.0161 32.2669 30.1143 32.2669V40.1443C40.556 40.1443 48.3746 31.4085 48.3746 20.9558Z",
                                })),
                        ),
                    Object(rt.g)("span", { className: ut }, j),
                );
            },
            It = (function (e) {
                return (
                    (e.CREDIT_CARD = "card"),
                    (e.BANK = "bank"),
                    (e.PAYPAL = "paypal"),
                    (e.VENMO = "venmo"),
                    (e.PAYMENT_REQUEST = "pay"),
                    (e.CRYPTO = "crypto"),
                    (e.STOCKS = "stocks"),
                    (e.DAF = "daf"),
                    (e.GIFT_CARD = "gift"),
                    e
                );
            })({}),
            Et = [It.VENMO, It.DAF, It.CRYPTO, It.STOCKS],
            Rt = Object.values(It),
            Pt = Rt.filter(function (e) {
                return e !== It.GIFT_CARD;
            }),
            Mt = [
                It.CREDIT_CARD,
                It.PAYPAL,
                It.GIFT_CARD,
                It.BANK,
                It.CRYPTO,
                It.DAF,
                It.VENMO,
                It.STOCKS,
                It.PAYMENT_REQUEST,
            ],
            Lt = 5,
            Dt = (function (e) {
                return (
                    (e.MIN_AMOUNT = "minAmount"),
                    (e.THEME_COLOR = "themeColor"),
                    e
                );
            })(Dt || {}),
            Ht = function () {
                var e = document.createElement("style");
                ((e.innerHTML =
                    '\n    @font-face {\n      font-family: "Basis Grotesque Pro";\n      src: local("Basis Grotesque Pro"), local("Basis Grotesque Pro"),\n        url(https://assets.every.org/every-month/BasisGrotesque-Regular-Pro.woff2) format("woff2");\n      font-weight: 400;\n      font-style: normal;\n      font-display: swap;\n    }\n    @font-face {\n      font-family: "Basis Grotesque Pro";\n      src: local("Basis Grotesque Pro"), local("Basis Grotesque Pro"),\n        url(https://assets.every.org/every-month/BasisGrotesque-Bold-Pro.woff2) format("woff2");\n      font-weight: bold;\n      font-style: normal;\n      font-display: swap;\n    }\n    @font-face {\n      font-family: "Basis Grotesque Pro";\n      src: local("Basis Grotesque Pro"), local("Basis Grotesque Pro"),\n        url(https://assets.every.org/every-month/BasisGrotesque-Medium-Pro.woff2) format("woff2");\n      font-weight: 500;\n      font-style: normal;\n      font-display: swap;\n    }\n    '),
                    document.head.append(e));
            },
            Ut = 0,
            Bt = [],
            Ft = [],
            Gt = rt.i.__b,
            Xt = rt.i.__r,
            qt = rt.i.diffed,
            Wt = rt.i.__c,
            zt = rt.i.unmount;
        ((rt.i.__b = function (e) {
            ((et = null), Gt && Gt(e));
        }),
            (rt.i.__r = function (e) {
                (Xt && Xt(e), (Je = 0));
                var t = (et = e.__c).__H;
                (t &&
                    (tt === et
                        ? ((t.__h = []),
                          (et.__h = []),
                          t.__.forEach(function (e) {
                              (e.__N && (e.__ = e.__N),
                                  (e.__V = Ft),
                                  (e.__N = e.i = void 0));
                          }))
                        : (t.__h.forEach(j),
                          t.__h.forEach(w),
                          (t.__h = []),
                          (Je = 0))),
                    (tt = et));
            }),
            (rt.i.diffed = function (e) {
                qt && qt(e);
                var t = e.__c;
                (t &&
                    t.__H &&
                    (t.__H.__h.length &&
                        ((1 !== Bt.push(t) &&
                            nt === rt.i.requestAnimationFrame) ||
                            ((nt = rt.i.requestAnimationFrame) || C)(O)),
                    t.__H.__.forEach(function (e) {
                        (e.i && (e.__H = e.i),
                            e.__V !== Ft && (e.__ = e.__V),
                            (e.i = void 0),
                            (e.__V = Ft));
                    })),
                    (tt = et = null));
            }),
            (rt.i.__c = function (e, t) {
                (t.some(function (e) {
                    try {
                        (e.__h.forEach(j),
                            (e.__h = e.__h.filter(function (e) {
                                return !e.__ || w(e);
                            })));
                    } catch (n) {
                        (t.some(function (e) {
                            e.__h && (e.__h = []);
                        }),
                            (t = []),
                            rt.i.__e(n, e.__v));
                    }
                }),
                    Wt && Wt(e, t));
            }),
            (rt.i.unmount = function (e) {
                zt && zt(e);
                var t,
                    n = e.__c;
                n &&
                    n.__H &&
                    (n.__H.__.forEach(function (e) {
                        try {
                            j(e);
                        } catch (e) {
                            t = e;
                        }
                    }),
                    (n.__H = void 0),
                    t && rt.i.__e(t, n.__v));
            }));
        var Vt,
            Yt,
            Kt,
            Zt,
            Qt = "function" == typeof requestAnimationFrame,
            $t = n("nr9d"),
            Jt = n.n($t),
            en = {
                methods: Object.values(Pt),
                show: !1,
                addAmounts: [10, 50, 100],
                defaultFrequency: st.Unselected,
                minDonationAmount: 10,
                primaryColor: "#018669",
                showGiftCardOption: !1,
                redeemGiftCardInFlow: !1,
                previewMode:
                    "1" === (null == (Vt = T()) ? void 0 : Vt.previewMode),
            },
            tn = {
                arrayMerge: function (e, t) {
                    return t;
                },
            },
            nn = Object(rt.d)({}),
            rn = function (e) {
                var t = e.children,
                    n = (function (e) {
                        var t,
                            n =
                                null == (t = e.methods)
                                    ? void 0
                                    : t.filter(function (e) {
                                          return Rt.includes(e);
                                      }),
                            r = (n && n.length > 0 ? n : Pt).concat(
                                e.showGiftCardOption ? [It.GIFT_CARD] : [],
                            );
                        return Jt.a.all([en, e, { methods: r }], tn);
                    })(e.options);
                return Object(rt.g)(nn.Provider, { value: n }, t);
            },
            on = function () {
                return _(nn);
            },
            an = Symbol("FundraiserFetchError"),
            cn = Symbol("FundraiserFetching"),
            ln = Object(rt.d)({ fundraiser: cn }),
            un = function (e) {
                var t = e.children,
                    n = on(),
                    r = n.fundraiserSlug,
                    o = n.nonprofitSlug,
                    i = g(cn),
                    a = i[0],
                    c = i[1],
                    l = v(
                        E(function* () {
                            if (r)
                                try {
                                    var e = yield (function (e, t) {
                                        return (Kt =
                                            Kt ||
                                            x(function* (e, t) {
                                                var n,
                                                    r =
                                                        gt +
                                                        "/" +
                                                        e +
                                                        "/fundraiser/" +
                                                        t,
                                                    o = yield fetch(r).then(
                                                        function (e) {
                                                            return (n =
                                                                n ||
                                                                x(
                                                                    function* (
                                                                        e,
                                                                    ) {
                                                                        return e.json();
                                                                    },
                                                                )).apply(
                                                                this,
                                                                arguments,
                                                            );
                                                        },
                                                    );
                                                return o.data.fundraiser;
                                            })).apply(this, arguments);
                                    })(o, r);
                                    c(e);
                                } catch (e) {
                                    c(an);
                                }
                            else c(void 0);
                        }),
                        [o, r],
                    );
                return (
                    m(
                        function () {
                            l();
                        },
                        [l],
                    ),
                    Object(rt.g)(ln.Provider, { value: { fundraiser: a } }, t)
                );
            },
            sn = (function (e) {
                return (
                    (e.STRIPE_CONNECT = "Stripe"),
                    (e.PAYPAL_GRANTS = "PayPal Grants"),
                    (e.NFG_BATCH_FILE = "Network for Good"),
                    (e.MANUAL = "manual"),
                    e
                );
            })({}),
            dn = Symbol("NonprofitFetchError"),
            fn = Symbol("NonprofitFetching"),
            pn = Object(rt.d)({ nonprofit: fn }),
            gn = function (e) {
                var t = e.children,
                    n = on().nonprofitSlug,
                    r = g(fn),
                    o = r[0],
                    i = r[1],
                    a = g(),
                    c = a[0],
                    l = a[1],
                    u = v(
                        P(function* () {
                            try {
                                var e,
                                    t = yield A(n);
                                i(t);
                                var r =
                                    1 ===
                                    (null ==
                                    (e =
                                        t.eligibleDonationRecipientNonprofitIds)
                                        ? void 0
                                        : e.length)
                                        ? t
                                              .eligibleDonationRecipientNonprofitIds[0]
                                        : void 0;
                                if (r)
                                    try {
                                        var o = yield A(r);
                                        l(o);
                                    } catch (e) {
                                        l(void 0);
                                    }
                            } catch (e) {
                                i(dn);
                            }
                        }),
                        [n],
                    );
                return (
                    m(
                        function () {
                            u();
                        },
                        [u],
                    ),
                    Object(rt.g)(
                        pn.Provider,
                        { value: { nonprofit: o, parentNonprofit: c } },
                        t,
                    )
                );
            },
            bn = "https://js.stripe.com/v3",
            mn = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
            hn =
                "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
            yn = null,
            vn = function (e) {
                return (
                    null !== yn ||
                        (yn = new Promise(function (t, n) {
                            if (
                                "undefined" != typeof window &&
                                "undefined" != typeof document
                            )
                                if (
                                    (window.Stripe && e && console.warn(hn),
                                    window.Stripe)
                                )
                                    t(window.Stripe);
                                else
                                    try {
                                        var r = (function () {
                                            for (
                                                var e =
                                                        document.querySelectorAll(
                                                            'script[src^="'.concat(
                                                                bn,
                                                                '"]',
                                                            ),
                                                        ),
                                                    t = 0;
                                                t < e.length;
                                                t++
                                            ) {
                                                var n = e[t];
                                                if (mn.test(n.src)) return n;
                                            }
                                            return null;
                                        })();
                                        (r && e
                                            ? console.warn(hn)
                                            : r ||
                                              (r = (function (e) {
                                                  var t =
                                                          e &&
                                                          !e.advancedFraudSignals
                                                              ? "?advancedFraudSignals=false"
                                                              : "",
                                                      n =
                                                          document.createElement(
                                                              "script",
                                                          );
                                                  n.src = ""
                                                      .concat(bn)
                                                      .concat(t);
                                                  var r =
                                                      document.head ||
                                                      document.body;
                                                  if (!r)
                                                      throw new Error(
                                                          "Expected document.body not to be null. Stripe.js requires a <body> element.",
                                                      );
                                                  return (r.appendChild(n), n);
                                              })(e)),
                                            r.addEventListener(
                                                "load",
                                                function () {
                                                    window.Stripe
                                                        ? t(window.Stripe)
                                                        : n(
                                                              new Error(
                                                                  "Stripe.js not available",
                                                              ),
                                                          );
                                                },
                                            ),
                                            r.addEventListener(
                                                "error",
                                                function () {
                                                    n(
                                                        new Error(
                                                            "Failed to load Stripe.js",
                                                        ),
                                                    );
                                                },
                                            ));
                                    } catch (e) {
                                        return void n(e);
                                    }
                            else t(null);
                        })),
                    yn
                );
            },
            _n = Promise.resolve().then(function () {
                return vn(null);
            }),
            On = !1;
        _n.catch(function (e) {
            On || console.warn(e);
        });
        var Cn,
            jn,
            wn,
            Nn,
            kn,
            Tn,
            Sn,
            xn,
            An,
            In,
            En,
            Rn,
            Pn,
            Mn,
            Ln,
            Dn,
            Hn,
            Un,
            Bn,
            Fn,
            Gn,
            Xn,
            qn,
            Wn,
            zn,
            Vn,
            Yn,
            Kn,
            Zn,
            Qn,
            $n,
            Jn,
            er,
            tr,
            nr,
            rr,
            or,
            ir = function () {
                for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                )
                    t[n] = arguments[n];
                On = !0;
                var r = Date.now();
                return _n.then(function (e) {
                    return (function (e, t, n) {
                        if (null === e) return null;
                        var r = e.apply(void 0, t);
                        return (
                            (function (e, t) {
                                e &&
                                    e._registerWrapper &&
                                    e._registerWrapper({
                                        name: "stripe-js",
                                        version: "1.54.2",
                                        startTime: t,
                                    });
                            })(r, n),
                            r
                        );
                    })(e, t, r);
                });
            },
            ar = "pk_live_a5XJAcVaIqMs8ggZMtluZs8z00r2H4kYVG",
            cr = "2022-11-15",
            lr = Object(rt.d)({}),
            ur = function (e) {
                var t,
                    n = e.children,
                    r = e.hide,
                    o = on(),
                    i = g(o.defaultFrequency),
                    a = i[0],
                    c = i[1],
                    l = g(null != (t = o.amount) ? t : o.defaultDonationAmount),
                    u = l[0],
                    s = l[1];
                m(
                    function () {
                        s(o.amount);
                    },
                    [o.amount],
                );
                var d = g(null),
                    f = d[0],
                    p = d[1],
                    b = g(o.methods[0]),
                    h = b[0],
                    y = b[1];
                m(
                    function () {
                        o.methods.includes(h) || y(o.methods[0]);
                    },
                    [o.methods, h],
                );
                var v = g(),
                    _ = v[0],
                    O = v[1],
                    C = g(),
                    j = C[0],
                    w = C[1],
                    N = g(),
                    k = N[0],
                    T = N[1],
                    S = g(),
                    x = S[0],
                    A = S[1],
                    I = D(),
                    E = g(),
                    R = E[0],
                    P = E[1],
                    M = g(),
                    L = M[0],
                    H = M[1],
                    U = g(),
                    B = U[0],
                    F = U[1],
                    G = g("apple"),
                    X = G[0],
                    q = G[1];
                return Object(rt.g)(
                    lr.Provider,
                    {
                        value: {
                            frequency: a,
                            setFrequency: c,
                            donationAmount: u,
                            setDonationAmount: s,
                            hideWidget: r,
                            submitError: f,
                            setSubmitError: p,
                            selectedPaymentMethod: h,
                            setSelectedPaymentMethod: y,
                            stockAmount: _,
                            setStockAmount: O,
                            stockSymbol: j,
                            setStockSymbol: w,
                            cryptoAmount: k,
                            setCryptoAmount: T,
                            cryptoCurrency: x,
                            setCryptoCurrency: A,
                            paymentRequestAvailable: I,
                            privateNote: R,
                            setPrivateNote: P,
                            publicTestimony: L,
                            setPublicTestimony: H,
                            giftCardCode: B,
                            setGiftCardCode: F,
                            subMethod: X,
                            setSubMethod: q,
                        },
                    },
                    n,
                );
            },
            sr = function (e) {
                var t = e.options,
                    n = e.hide,
                    r = e.children;
                return Object(rt.g)(
                    rn,
                    { options: t },
                    Object(rt.g)(
                        ur,
                        { hide: n },
                        Object(rt.g)(gn, null, Object(rt.g)(un, null, r)),
                    ),
                );
            },
            dr = (function (e) {
                return (
                    (e.PhoneOnly =
                        "@media only screen and (max-width: 37.44em)"),
                    (e.TabletUp = "@media only screen and (min-width: 37.5em)"),
                    (e.TabletLandscapeUp =
                        "@media only screen and (min-width: 56.25em)"),
                    (e.DesktopUp = "@media only screen and (min-width: 75em)"),
                    (e.BigDesktopUp =
                        "@media only screen and (min-width: 112.5em)"),
                    e
                );
            })({}),
            fr = (function (e) {
                return (
                    (e.LightGray = "#EAEDED"),
                    (e.Gray = "#f3f6f6"),
                    (e.DarkGray = "#868A8A"),
                    (e.Black = "#272727"),
                    (e.Text = "#2E3434"),
                    (e.TextGray = "#868383"),
                    (e.TextOpaque = "rgba(46, 52, 52, 0.6)"),
                    (e.Error = "#D95C35"),
                    (e.ErrorShadow = "rgba(217, 92, 53, 0.2)"),
                    (e.Transparent = "transparent"),
                    (e.White = "#fff"),
                    e
                );
            })({}),
            pr = {
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "-0.01em",
            },
            gr = { fontSize: "32px", lineHeight: "36px" },
            br = { fontSize: "24px", lineHeight: "32px" },
            mr = { fontSize: "20px", lineHeight: "24px" },
            hr = { fontSize: "16px", lineHeight: "24px" },
            yr = { fontSize: "14px", lineHeight: "20px" },
            vr = (function (e) {
                return (
                    (e.Empty = "0"),
                    (e.XXS = "4px"),
                    (e.XS = "8px"),
                    (e.S = "12px"),
                    (e.M = "16px"),
                    (e.L = "20px"),
                    (e.XL = "24px"),
                    (e.XXL = "32px"),
                    (e.Stack_XXS = "0 0 4px 0"),
                    (e.Stack_XS = "0 0 8px 0"),
                    (e.Stack_S = "0 0 12px 0"),
                    (e.Stack_M = "0 0 16px 0"),
                    (e.Stack_L = "0 0 20px 0"),
                    (e.Stack_XL = "0 0 24px 0"),
                    (e.Stack_XXL = "0 0 32px 0"),
                    (e.Inset_XXS = "4px 4px 4px 4px"),
                    (e.Inset_XS = "8px 8px 8px 8px"),
                    (e.Inset_S = "12px 12px 12px 12px"),
                    (e.Inset_M = "16px 16px 16px 16px"),
                    (e.Inset_L = "20px 20px 20px 20px"),
                    (e.Inset_XL = "24px 24px 24px 24px"),
                    (e.Inset_XXL = "32px 32px 32px 32px"),
                    (e.InsetSquish_XS = "8px 16px"),
                    (e.InsetSquish_S = "12px 24px"),
                    (e.InsetSquish_M = "16px 32px"),
                    (e.InsetSquish_L = "20px 40px"),
                    (e.InsetSquish_XL = "24px 48px"),
                    (e.Inline_XS = "0 8px 0 0"),
                    (e.Inline_S = "0 12px 0 0"),
                    (e.Inline_M = "0 16px 0 0"),
                    (e.Inline_L = "0 20px 0 0"),
                    (e.Inline_XL = "0 24px 0 0"),
                    (e.Inline_XXL = "0 24px 0 0"),
                    e
                );
            })({}),
            _r = function (e) {
                return {
                    display: "flex",
                    flexDirection: "column",
                    "> *:not(:last-child)": {
                        marginBottom: "number" == typeof e ? e + "px" : e,
                    },
                };
            },
            Or = function (e) {
                return {
                    display: "flex",
                    flexDirection: "row",
                    "> *:not(:last-child)": {
                        marginRight: "number" == typeof e ? e + "px" : e,
                    },
                };
            },
            Cr = function (e) {
                return at(_r(e));
            },
            jr = function (e) {
                return _r(e);
            },
            wr = function (e) {
                return Or(e);
            },
            Nr = at({ display: "flex", flexDirection: "column", gap: vr.M }),
            kr = {
                position: "relative",
                top: "-1px",
                transform: "rotate(180deg)",
            },
            Tr = { "> p": { marginBottom: vr.XS } },
            Sr = at(
                H({}, Tr, {
                    maxHeight: "1000px",
                    transition: "all 1s",
                    opacity: "1",
                }),
            ),
            xr = at(
                H({}, Tr, {
                    opacity: "0",
                    overflow: "hidden",
                    maxHeight: "0",
                    transition: "all 0.5s",
                }),
            ),
            Ar = function (e) {
                var t;
                return at(
                    H(
                        {},
                        yr,
                        e
                            ? (((t = {})[dr.TabletLandscapeUp] = {
                                  padding: "none",
                              }),
                              t)
                            : {},
                    ),
                );
            },
            Ir = function (e) {
                return at(
                    H(
                        {},
                        wr(vr.S),
                        yr,
                        {
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                            border: "none",
                            background: "transparent",
                            textAlign: "start",
                            padding: 0,
                            ":hover": { cursor: "pointer" },
                            "> svg": H(
                                { width: "16px", height: "16px" },
                                e ? kr : {},
                            ),
                        },
                        e
                            ? { fontWeight: 700 }
                            : { fontWeight: 500, color: fr.TextGray },
                    ),
                );
            },
            Er = at({
                color: fr.Text,
                fontWeight: 500,
                textDecoration: "none",
                ":hover": { textDecoration: "underline" },
            }),
            Rr = function (e, t, n, r) {
                var o,
                    i,
                    a = (function (e, t) {
                        var n, r, o;
                        if (null != (n = e.metadata) && n.granteeName)
                            return null == (o = e.metadata)
                                ? void 0
                                : o.granteeName;
                        var i =
                            null != (r = e.metadata) && r.prefixWithThe
                                ? "the " + e.name
                                : e.name;
                        return t
                            ? "the fund for " + i + " hosted at " + t.name
                            : i;
                    })(e, n),
                    c =
                        (r === It.DAF
                            ? "If you use a Donor Advised Fund (DAF), your receipt from Every.org will not be tax-deductible as the tax deduction was already received at the time you contributed to your DAF. For any other payment method, you will get a tax-deductible receipt emailed to you"
                            : "100% of your donation is tax-deductible to the extent allowed by US law") +
                        ". Your donation is made to Every.org, a tax-exempt US 501(c)(3) charity that\n      grants unrestricted funds to " +
                        a +
                        " on your behalf. \n      As a legal matter, Every.org must provide any donations to " +
                        a +
                        " on an\n      unrestricted basis, regardless of any designations or restrictions made by\n      you.",
                    l =
                        t &&
                        !(function (e) {
                            return e.nonprofitId === e.creatorNonprofitId;
                        })(t),
                    u = "",
                    s = e.name + " has";
                e.hasAdmin && l
                    ? (u =
                          "Please note " +
                          s +
                          " not reviewed or approved the content of this peer-to-peer fundraiser.")
                    : e.hasAdmin || l
                      ? !e.hasAdmin &&
                        l &&
                        (u =
                            "Please note " +
                            s +
                            " not provided permission for this solicitation or reviewed or approved the content of this peer-to-peer fundraiser.")
                      : (u =
                            "Please note " +
                            s +
                            " not provided permission for this solicitation.");
                var d =
                    null !=
                    (o =
                        null == (i = e.metadata)
                            ? void 0
                            : i.customTaxDeductible)
                        ? o
                        : "";
                return Object(rt.g)("span", null, c, " ", u, " ", d);
            },
            Pr = at(
                (((En = {
                    backgroundColor: "white",
                    padding: vr.XL + " " + vr.XL + " 0px",
                    borderRadius: "unset",
                    overflow: "hidden",
                })[dr.TabletLandscapeUp] = {
                    borderRadius: "16px",
                    padding: vr.M,
                }),
                En),
            ),
            Mr = function (e) {
                return e
                    .filter(function (e) {
                        return Boolean(e);
                    })
                    .join(" ");
            },
            Lr = function (e) {
                var t = e.children,
                    n = e.className;
                return Object(rt.g)("div", { className: Mr([Pr, n]) }, t);
            },
            Dr = function () {
                return _(ln).fundraiser;
            },
            Hr = function () {
                var e = Dr();
                if (e !== an && e !== cn) return e;
            },
            Ur = function () {
                return _(pn).nonprofit;
            },
            Br = function () {
                return _(pn).parentNonprofit;
            },
            Fr = function () {
                var e = Ur();
                if (e === dn || e === fn) throw new Error("Nonprofit error");
                return e;
            },
            Gr = function () {
                return _(lr);
            },
            Xr = function () {
                return (
                    Rn ||
                    (Rn = Object(rt.g)(
                        "svg",
                        {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                        },
                        Object(rt.g)("path", { d: "M6 9l6 6 6-6" }),
                    ))
                );
            },
            qr = function (e) {
                var t,
                    n = e.faqData,
                    r = g(!1),
                    o = r[0],
                    i = r[1],
                    a = on();
                return null != (t = n.hideSlugList) &&
                    t.includes(a.nonprofitSlug)
                    ? null
                    : Object(rt.g)(
                          "div",
                          { className: Ar(n.mobileOnly) },
                          Object(rt.g)(
                              "button",
                              {
                                  type: "button",
                                  className: Ir(o),
                                  onClick: function () {
                                      i(!o);
                                  },
                              },
                              Object(rt.g)("span", null, n.title),
                              Pn || (Pn = Object(rt.g)(Xr, null)),
                          ),
                          Object(rt.g)(
                              "div",
                              { className: o ? Sr : xr },
                              n.description,
                          ),
                      );
            },
            Wr = function () {
                var e,
                    t = Fr(),
                    n = Hr(),
                    r = Br(),
                    o = Gr().selectedPaymentMethod,
                    i = [
                        {
                            id: "intro",
                            title: "How does Every.org accept my donation?",
                            description: Object(rt.g)(
                                rt.b,
                                null,
                                Object(rt.g)(
                                    "p",
                                    null,
                                    "Your donation is made to Every.org, a US 501(c)(3) public charity. Every.org will immediately send you a receipt by email.",
                                    " ",
                                    B(t),
                                ),
                                Object(rt.g)(
                                    "p",
                                    null,
                                    "This process ensures your eligibility for a tax deduction, enables you to consolidate your gift records, and reduces the burden on",
                                    " ",
                                    U(t),
                                    ".",
                                ),
                            ),
                        },
                        {
                            id: "fees",
                            title: "Are there any fees?",
                            description: G(o, t),
                        },
                        {
                            id: "tax",
                            title: "Is this donation tax-deductible?",
                            description: Object(rt.g)(
                                "p",
                                null,
                                "Yes,",
                                " ",
                                Rr(t, n, r),
                            ),
                        },
                        {
                            id: "receipt",
                            title: "Will I receive a receipt for my donation?",
                            description:
                                Mn ||
                                (Mn = Object(rt.g)(
                                    rt.b,
                                    null,
                                    Object(rt.g)(
                                        "p",
                                        null,
                                        "Yes, after your donation payment is confirmed, you will immediately get a receipt emailed to you.",
                                    ),
                                    Object(rt.g)(
                                        "p",
                                        null,
                                        "Additionally, if you have an Every.org account, you can always get a single itemized receipt that shows all your donations in a given year.",
                                    ),
                                )),
                        },
                    ];
                return (
                    (null != t &&
                        null != (e = t.metadata) &&
                        e.hideFundraiseButton) ||
                        i.push({
                            id: "p2p",
                            mobileOnly: !0,
                            hideSlugList: ["irc"],
                            title: "How else can I support " + t.name + "?",
                            description: Object(rt.g)(
                                "p",
                                null,
                                "You can also rally your friends, family, and social networks to support this nonprofit by starting your own fundraiser for them.",
                                " ",
                                Object(rt.g)(
                                    "a",
                                    {
                                        className: Er,
                                        href: pt + t.primarySlug + "/" + ht,
                                    },
                                    "Start a fundraiser for ",
                                    t.name,
                                ),
                            ),
                        }),
                    Object(rt.g)(
                        Lr,
                        null,
                        Object(rt.g)(
                            "div",
                            { className: Nr },
                            i.map(function (e) {
                                return Object(rt.g)(qr, {
                                    key: e.id,
                                    faqData: e,
                                });
                            }),
                        ),
                    )
                );
            },
            zr = at(
                X(
                    {
                        padding: vr.XL + " " + vr.XL + " 0px",
                        backgroundColor: "unset",
                        display: "flex",
                        flexDirection: "column",
                    },
                    yr,
                    (((Ln = { color: fr.TextGray })[dr.TabletLandscapeUp] = {
                        padding: "0px " + vr.L,
                    }),
                    (Ln["> p"] = { margin: 0 }),
                    (Ln["> p:not(:last-child)"] = { marginBottom: vr.XS }),
                    Ln),
                ),
            ),
            Vr = at({
                color: fr.TextGray,
                fontWeight: 500,
                textDecoration: "none",
                ":hover": { textDecoration: "underline" },
            }),
            Yr = at({ color: fr.Black }),
            Kr = ["children"],
            Zr = z({ address: "support@every.org" }),
            Qr = function (e) {
                var t = e.children,
                    n = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            o = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++)
                            t.indexOf((n = i[r])) >= 0 || (o[n] = e[n]);
                        return o;
                    })(e, Kr);
                return Object(rt.g)("a", V({ className: Vr }, n), t);
            },
            $r = function () {
                var e = Fr(),
                    t = Hr(),
                    n = Br();
                return Object(rt.g)(
                    Lr,
                    { className: zr },
                    // OSE patch: add bank transfer CTA to widget footer (not in upstream widget)
                    Dn ||
                        (Dn = Object(rt.g)(
                            "p",
                            { className: Yr },
                            Object(rt.g)(
                                "strong",
                                null,
                                "Prefer to donate by international bank transfer?",
                            ),
                            " ",
                            Object(rt.g)(
                                "a",
                                {
                                    href: "mailto:donations@endowment.dev?subject=International%20Bank%20Wire&body=Hello!%20I%20would%20like%20to%20donate%20to%20the%20Open%20Source%20Endowment%20via%20international%20bank%20wire.%20Could%20you%20please%20share%20the%20bank%20details%3F",
                                },
                                "Email us",
                            ),
                            " for bank details.",
                        )),
                    Object(rt.g)(
                        "p",
                        null,
                        Rr(e, t, n),
                        " ",
                        Hn ||
                            (Hn = Object(rt.g)(Qr, { href: yt }, "See Terms")),
                    ),
                    Un ||
                        (Un = Object(rt.g)(
                            "p",
                            null,
                            "Need help? See FAQs or contact us at our",
                            " ",
                            Object(rt.g)(Qr, { href: vt }, "Help Center"),
                            ".",
                        )),
                    Bn ||
                        (Bn = Object(rt.g)(
                            "p",
                            null,
                            "Have ideas for how we can build a better donation experience?",
                            " ",
                            Object(rt.g)(Qr, { href: Zr }, "Send us feedback"),
                            ".",
                        )),
                    Fn ||
                        (Fn = Object(rt.g)(
                            "p",
                            null,
                            "We respect your privacy. To learn more, check out our",
                            " ",
                            Object(rt.g)(Qr, { href: _t }, "Privacy Policy"),
                            ".",
                        )),
                );
            },
            Jr = function (e) {
                return at({
                    color: e,
                    fontWeight: 500,
                    textDecoration: "none",
                    ":hover": { textDecoration: "underline" },
                });
            },
            eo = at(
                (((Gn = { display: "none" })[dr.TabletLandscapeUp] = {
                    display: "block",
                }),
                Gn),
            ),
            to = function () {
                var e,
                    t = on(),
                    n = t.primaryColor,
                    r = t.nonprofitSlug;
                if (null != (e = Fr().metadata) && e.hideFundraiseButton)
                    return null;
                var o = pt + r + "/" + ht;
                return Object(rt.g)(
                    Lr,
                    { className: eo },
                    Object(rt.g)(
                        "p",
                        null,
                        Object(rt.g)(
                            "a",
                            { className: Jr(n), href: o },
                            "Start a fundraiser",
                        ),
                        " ",
                        "to rally your friends and family",
                    ),
                );
            },
            no = at(
                (((qn = {
                    display: "grid",
                    gridGap: 0,
                    gridTemplateColumns: "1fr",
                    gridTemplateAreas:
                        '"header"\n    "promoBanners"\n    "nonprofitInfo"\n    "paymentProcess"\n    "fundraiserLink"\n    "faq"\n    "footer"',
                })[dr.TabletLandscapeUp] = {
                    gridColumnGap: vr.XL,
                    gridTemplateColumns: "1fr 2fr",
                    gridTemplateRows: "auto auto auto auto auto 1fr",
                    gridTemplateAreas:
                        '"header header"\n    "promoBanners promoBanners"\n    "nonprofitInfo paymentProcess"\n    "fundraiserLink paymentProcess"\n    "faq paymentProcess"\n    "faq footer"',
                    "& > div:not(:last-child):not(:empty)": {
                        marginBottom: vr.XL,
                    },
                }),
                (qn["& > #every-header"] =
                    (((Xn = { gridArea: "header", display: "block" })[
                        dr.TabletLandscapeUp
                    ] = { display: "none" }),
                    Xn)),
                (qn["& > #every-promoBanners"] = { gridArea: "promoBanners" }),
                (qn["& > #every-nonprofitInfo"] = {
                    gridArea: "nonprofitInfo",
                }),
                (qn["& > #every-paymentProcess"] = {
                    gridArea: "paymentProcess",
                }),
                (qn["& > #every-faq"] = { gridArea: "faq" }),
                (qn["& > #every-fundraiserLink"] = {
                    gridArea: "fundraiserLink",
                }),
                (qn["& > #every-footer"] = { gridArea: "footer" }),
                qn),
            ),
            ro = function (e) {
                var t = e.children;
                return Object(rt.g)("div", { className: no }, t);
            },
            oo = at({
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
                border: "none",
                backgroundColor: "transparent",
                fontFamily: ot.BasisGrotesque,
            }),
            io = at(
                (((Wn = { display: "block" })[dr.TabletLandscapeUp] = {
                    display: "none",
                }),
                Wn),
            ),
            ao = at(
                (((zn = {
                    position: "absolute",
                    right: vr.XL,
                    top: vr.XL,
                    padding: vr.XXS,
                    background: "white",
                    borderRadius: "8px",
                    display: "none",
                })[dr.TabletLandscapeUp] = { display: "block" }),
                zn),
            ),
            co = function () {
                var e = on().primaryColor;
                return Object(rt.g)(
                    "svg",
                    {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                    },
                    Object(rt.g)("path", {
                        d: "M18 6L6 18",
                        stroke: e,
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                    }),
                    Object(rt.g)("path", {
                        d: "M6 6L18 18",
                        stroke: e,
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                    }),
                );
            },
            lo = function (e) {
                var t = e.className,
                    n = Gr().hideWidget;
                return Object(rt.g)(
                    "button",
                    { type: "button", className: Mr([oo, t]), onClick: n },
                    Vn || (Vn = Object(rt.g)(co, null)),
                );
            },
            uo = at(
                (((Yn = {
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    padding: vr.M + " " + vr.L,
                })[dr.TabletLandscapeUp] = { padding: 0 }),
                Yn),
            ),
            so = function () {
                return (
                    Kn ||
                    (Kn = Object(rt.g)(
                        "div",
                        { className: uo },
                        Object(rt.g)(lo, { className: io }),
                    ))
                );
            },
            fo = (function (e) {
                return (
                    (e.Small = "4px"),
                    (e.Default = "8px"),
                    (e.Medium = "24px"),
                    (e.Big = "100px"),
                    (e.Circle = "100%"),
                    e
                );
            })({}),
            po = at({
                lineHeight: "20px",
                fontWeight: "unset",
                "> span": { fontWeight: 700 },
            }),
            go =
                (at({
                    lineHeight: "20px",
                    fontWeight: "unset",
                    "> span": { fontWeight: 700 },
                }),
                function (e) {
                    var t;
                    return at(
                        (((t = {
                            borderRadius: fo.Circle,
                            overflow: "hidden",
                            display: "block",
                            backgroundImage: "url(" + e + ")",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            width: "40px",
                            height: "40px",
                            flexShrink: 0,
                        })[dr.TabletLandscapeUp] = {
                            width: "64px",
                            height: "64px",
                        }),
                        t),
                    );
                }),
            bo = function (e) {
                var t;
                return Mr([
                    go(e),
                    at(
                        ((t = { width: "32px", height: "32px", flexShrink: 0 }),
                        (t[dr.TabletLandscapeUp] = {
                            width: "40px",
                            height: "40px",
                        }),
                        t),
                    ),
                ]);
            },
            mo = at(
                (((Zn = { padding: "0 " + vr.L + " " + vr.L })[
                    dr.TabletLandscapeUp
                ] = Y({}, jr(vr.S), { padding: "" + vr.L })),
                Zn),
            ),
            ho = at(
                (((Qn = { display: "none", overflow: "hidden" })[
                    dr.TabletLandscapeUp
                ] = {
                    display: "flex",
                    gap: "" + vr.S,
                    flexDirection: "column",
                    padding: "" + vr.L,
                }),
                Qn),
            ),
            yo = at(
                ((($n = {
                    display: "flex",
                    gap: "" + vr.S,
                    padding: "" + vr.XL,
                    overflow: "hidden",
                })[dr.TabletLandscapeUp] = {
                    display: "none",
                    flexDirection: "column",
                    padding: "" + vr.L,
                }),
                $n),
            ),
            vo = at(Y({}, wr(vr.S), { alignItems: "center" })),
            _o = at({
                display: "flex",
                gap: "" + vr.S,
                alignItems: "center",
                "& > .every-embedded-fundraiser-card__nonprofit-name":
                    ((Jn = { display: "none" }),
                    (Jn[dr.TabletLandscapeUp] = { display: "block" }),
                    Jn),
            }),
            Oo = at(
                Y(
                    {},
                    yr,
                    (((er = { color: "rgba(0, 0, 0, 0.7)", display: "none" })[
                        dr.TabletLandscapeUp
                    ] = { display: "block" }),
                    er),
                ),
            ),
            Co = function (e) {
                return at({
                    overflow: "hidden",
                    overflowWrap: "anywhere",
                    wordBreak: "break-word",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    "-webkit-box-orient": "vertical",
                    "-webkit-line-clamp": e,
                    alignItems: "start",
                });
            },
            jo = "NonprofitAvatarPlaceholder",
            wo = function (e, t) {
                return (
                    "https://res.cloudinary.com/everydotorg/image/upload/f_auto,q_auto" +
                    (t
                        ? "," +
                          (function (e) {
                              var t;
                              if (0 === e.width || 0 === e.height)
                                  throw new Error("dimensions cannot be 0");
                              return [
                                  "c_" +
                                      (null != (t = e.fillMode) ? t : "lfill"),
                                  e.width ? "w_" + Math.floor(e.width) : void 0,
                                  e.height
                                      ? "h_" + Math.floor(e.height)
                                      : void 0,
                              ]
                                  .filter(function (e) {
                                      return void 0 !== e;
                                  })
                                  .join(",");
                          })(t)
                        : "") +
                    "/" +
                    e
                );
            },
            No = function (e) {
                var t = e.fundraiser;
                return Object(rt.g)(
                    rt.b,
                    null,
                    Object(rt.g)(ko, { fundraiser: t }),
                    Object(rt.g)(To, { fundraiser: t }),
                );
            },
            ko = function (e) {
                var t,
                    n = e.fundraiser,
                    r = Fr(),
                    o = r.name,
                    i = r.logoCloudinaryId,
                    a = r.coverImageCloudinaryId,
                    c = wo(null != i ? i : jo),
                    l = a && wo(a, { width: 320 });
                return Object(rt.g)(
                    Lr,
                    { className: ho },
                    Object(rt.g)(
                        "div",
                        { className: _o },
                        Object(rt.g)("div", {
                            alt: "nonprofit logo",
                            className: bo(c),
                        }),
                        Object(rt.g)(
                            "div",
                            {
                                className:
                                    "every-embedded-fundraiser-card__nonprofit-name",
                            },
                            Object(rt.g)("h2", { className: Co(1) }, o),
                            n.creatorNonprofitId === n.nonprofitId &&
                                (tr ||
                                    (tr = Object(rt.g)(
                                        "p",
                                        { className: Oo },
                                        "Official fundraiser",
                                    ))),
                        ),
                    ),
                    l &&
                        Object(rt.g)("div", {
                            className:
                                ((t = l),
                                at({
                                    backgroundImage: "url(" + t + ")",
                                    backgroundSize: "cover",
                                    width: "calc(100% + 25px + 25px)",
                                    height: "160px",
                                    position: "relative",
                                    left: "-25px",
                                })),
                        }),
                    Object(rt.g)(
                        "h1",
                        { className: po },
                        Object(rt.g)("span", null, n.title),
                    ),
                    n.description &&
                        Object(rt.g)(
                            "p",
                            { className: Mr([Oo, Co(3)]) },
                            n.description,
                        ),
                );
            },
            To = function (e) {
                var t = e.fundraiser,
                    n = Fr(),
                    r = n.logoCloudinaryId,
                    o = n.coverImageCloudinaryId,
                    i = wo(null != r ? r : jo);
                o && wo(o);
                return Object(rt.g)(
                    Lr,
                    { className: yo },
                    Object(rt.g)(
                        "div",
                        { className: _o },
                        Object(rt.g)("div", {
                            alt: "nonprofit logo",
                            className: bo(i),
                        }),
                        Object(rt.g)(
                            "h1",
                            { className: po },
                            Object(rt.g)("span", null, t.title),
                        ),
                    ),
                );
            },
            So = function () {
                var e = Fr(),
                    t = e.name,
                    n = e.logoCloudinaryId,
                    r = e.hasAdmin,
                    o = wo(null != n ? n : jo);
                return Object(rt.g)(
                    Lr,
                    { className: mo },
                    Object(rt.g)(
                        "div",
                        { className: vo },
                        Object(rt.g)("div", {
                            alt: "nonprofit logo",
                            className: go(o),
                        }),
                        Object(rt.g)(
                            "h1",
                            { className: po },
                            r
                                ? Object(rt.g)(
                                      rt.b,
                                      null,
                                      Object(rt.g)("span", null, t),
                                      " is using Every.org to accept this donation",
                                  )
                                : Object(rt.g)(
                                      rt.b,
                                      null,
                                      "Every.org created this page for ",
                                      Object(rt.g)("span", null, t),
                                  ),
                        ),
                    ),
                    nr ||
                        (nr = Object(rt.g)(
                            "p",
                            { className: Oo },
                            "Every.org is a 501(c)(3) nonprofit inspiring generosity and philanthropy for everyone.",
                        )),
                );
            },
            xo = function () {
                var e = Hr();
                return e
                    ? Object(rt.g)(No, { fundraiser: e })
                    : rr || (rr = Object(rt.g)(So, null));
            },
            Ao = at({
                display: "flex",
                alignItems: "center",
                gap: vr.XXS,
                color: "rgba(196, 83, 48, 1)",
                "& > svg > path": { stroke: "rgba(196, 83, 48, 1)" },
            }),
            Io = function (e) {
                var t = e.message;
                return t
                    ? Object(rt.g)(
                          "div",
                          { className: Ao },
                          or || (or = Object(rt.g)(co, null)),
                          Object(rt.g)("span", null, t),
                      )
                    : null;
            },
            Eo = 1e6,
            Ro = 1e6,
            Po = "[big.js] ",
            Mo = Po + "Invalid ",
            Lo = Mo + "decimal places",
            Do = Mo + "rounding mode",
            Ho = Po + "Division by zero",
            Uo = {},
            Bo = void 0,
            Fo = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
        ((Uo.abs = function () {
            var e = new this.constructor(this);
            return ((e.s = 1), e);
        }),
            (Uo.cmp = function (e) {
                var t,
                    n = this,
                    r = n.c,
                    o = (e = new n.constructor(e)).c,
                    i = n.s,
                    a = e.s,
                    c = n.e,
                    l = e.e;
                if (!r[0] || !o[0]) return r[0] ? i : o[0] ? -a : 0;
                if (i != a) return i;
                if (((t = i < 0), c != l)) return (c > l) ^ t ? 1 : -1;
                for (
                    a = (c = r.length) < (l = o.length) ? c : l, i = -1;
                    ++i < a;
                )
                    if (r[i] != o[i]) return (r[i] > o[i]) ^ t ? 1 : -1;
                return c == l ? 0 : (c > l) ^ t ? 1 : -1;
            }),
            (Uo.div = function (e) {
                var t = this,
                    n = t.constructor,
                    r = t.c,
                    o = (e = new n(e)).c,
                    i = t.s == e.s ? 1 : -1,
                    a = n.DP;
                if (a !== ~~a || a < 0 || a > Eo) throw Error(Lo);
                if (!o[0]) throw Error(Ho);
                if (!r[0]) return ((e.s = i), (e.c = [(e.e = 0)]), e);
                var c,
                    l,
                    u,
                    s,
                    d,
                    f = o.slice(),
                    p = (c = o.length),
                    g = r.length,
                    b = r.slice(0, c),
                    m = b.length,
                    h = e,
                    y = (h.c = []),
                    v = 0,
                    _ = a + (h.e = t.e - e.e) + 1;
                for (h.s = i, i = _ < 0 ? 0 : _, f.unshift(0); m++ < c; )
                    b.push(0);
                do {
                    for (u = 0; u < 10; u++) {
                        if (c != (m = b.length)) s = c > m ? 1 : -1;
                        else
                            for (d = -1, s = 0; ++d < c; )
                                if (o[d] != b[d]) {
                                    s = o[d] > b[d] ? 1 : -1;
                                    break;
                                }
                        if (!(s < 0)) break;
                        for (l = m == c ? o : f; m; ) {
                            if (b[--m] < l[m]) {
                                for (d = m; d && !b[--d]; ) b[d] = 9;
                                (--b[d], (b[m] += 10));
                            }
                            b[m] -= l[m];
                        }
                        for (; !b[0]; ) b.shift();
                    }
                    ((y[v++] = s ? u : ++u),
                        b[0] && s ? (b[m] = r[p] || 0) : (b = [r[p]]));
                } while ((p++ < g || b[0] !== Bo) && i--);
                return (
                    y[0] || 1 == v || (y.shift(), h.e--, _--),
                    v > _ && K(h, _, n.RM, b[0] !== Bo),
                    h
                );
            }),
            (Uo.eq = function (e) {
                return 0 === this.cmp(e);
            }),
            (Uo.gt = function (e) {
                return this.cmp(e) > 0;
            }),
            (Uo.gte = function (e) {
                return this.cmp(e) > -1;
            }),
            (Uo.lt = function (e) {
                return this.cmp(e) < 0;
            }),
            (Uo.lte = function (e) {
                return this.cmp(e) < 1;
            }),
            (Uo.minus = Uo.sub =
                function (e) {
                    var t,
                        n,
                        r,
                        o,
                        i = this,
                        a = i.constructor,
                        c = i.s,
                        l = (e = new a(e)).s;
                    if (c != l) return ((e.s = -l), i.plus(e));
                    var u = i.c.slice(),
                        s = i.e,
                        d = e.c,
                        f = e.e;
                    if (!u[0] || !d[0])
                        return (
                            d[0]
                                ? (e.s = -l)
                                : u[0]
                                  ? (e = new a(i))
                                  : (e.s = 1),
                            e
                        );
                    if ((c = s - f)) {
                        for (
                            (o = c < 0)
                                ? ((c = -c), (r = u))
                                : ((f = s), (r = d)),
                                r.reverse(),
                                l = c;
                            l--;
                        )
                            r.push(0);
                        r.reverse();
                    } else
                        for (
                            n = ((o = u.length < d.length) ? u : d).length,
                                c = l = 0;
                            l < n;
                            l++
                        )
                            if (u[l] != d[l]) {
                                o = u[l] < d[l];
                                break;
                            }
                    if (
                        (o && ((r = u), (u = d), (d = r), (e.s = -e.s)),
                        (l = (n = d.length) - (t = u.length)) > 0)
                    )
                        for (; l--; ) u[t++] = 0;
                    for (l = t; n > c; ) {
                        if (u[--n] < d[n]) {
                            for (t = n; t && !u[--t]; ) u[t] = 9;
                            (--u[t], (u[n] += 10));
                        }
                        u[n] -= d[n];
                    }
                    for (; 0 === u[--l]; ) u.pop();
                    for (; 0 === u[0]; ) (u.shift(), --f);
                    return (
                        u[0] || ((e.s = 1), (u = [(f = 0)])),
                        (e.c = u),
                        (e.e = f),
                        e
                    );
                }),
            (Uo.mod = function (e) {
                var t,
                    n = this,
                    r = n.constructor,
                    o = n.s,
                    i = (e = new r(e)).s;
                if (!e.c[0]) throw Error(Ho);
                return (
                    (n.s = e.s = 1),
                    (t = 1 == e.cmp(n)),
                    (n.s = o),
                    (e.s = i),
                    t
                        ? new r(n)
                        : ((o = r.DP),
                          (i = r.RM),
                          (r.DP = r.RM = 0),
                          (n = n.div(e)),
                          (r.DP = o),
                          (r.RM = i),
                          this.minus(n.times(e)))
                );
            }),
            (Uo.neg = function () {
                var e = new this.constructor(this);
                return ((e.s = -e.s), e);
            }),
            (Uo.plus = Uo.add =
                function (e) {
                    var t,
                        n,
                        r,
                        o = this,
                        i = o.constructor;
                    if (((e = new i(e)), o.s != e.s))
                        return ((e.s = -e.s), o.minus(e));
                    var a = o.e,
                        c = o.c,
                        l = e.e,
                        u = e.c;
                    if (!c[0] || !u[0])
                        return (
                            u[0] || (c[0] ? (e = new i(o)) : (e.s = o.s)),
                            e
                        );
                    if (((c = c.slice()), (t = a - l))) {
                        for (
                            t > 0 ? ((l = a), (r = u)) : ((t = -t), (r = c)),
                                r.reverse();
                            t--;
                        )
                            r.push(0);
                        r.reverse();
                    }
                    for (
                        c.length - u.length < 0 && ((r = u), (u = c), (c = r)),
                            t = u.length,
                            n = 0;
                        t;
                        c[t] %= 10
                    )
                        n = ((c[--t] = c[t] + u[t] + n) / 10) | 0;
                    for (n && (c.unshift(n), ++l), t = c.length; 0 === c[--t]; )
                        c.pop();
                    return ((e.c = c), (e.e = l), e);
                }),
            (Uo.pow = function (e) {
                var t = this,
                    n = new t.constructor("1"),
                    r = n,
                    o = e < 0;
                if (e !== ~~e || e < -1e6 || e > Ro)
                    throw Error(Mo + "exponent");
                for (o && (e = -e); 1 & e && (r = r.times(t)), (e >>= 1); )
                    t = t.times(t);
                return o ? n.div(r) : r;
            }),
            (Uo.prec = function (e, t) {
                if (e !== ~~e || e < 1 || e > Eo) throw Error(Mo + "precision");
                return K(new this.constructor(this), e, t);
            }),
            (Uo.round = function (e, t) {
                if (e === Bo) e = 0;
                else if (e !== ~~e || e < -Eo || e > Eo) throw Error(Lo);
                return K(new this.constructor(this), e + this.e + 1, t);
            }),
            (Uo.sqrt = function () {
                var e,
                    t,
                    n,
                    r = this,
                    o = r.constructor,
                    i = r.s,
                    a = r.e,
                    c = new o("0.5");
                if (!r.c[0]) return new o(r);
                if (i < 0) throw Error(Po + "No square root");
                (0 === (i = Math.sqrt(r + "")) || i === 1 / 0
                    ? (((t = r.c.join("")).length + a) & 1 || (t += "0"),
                      (a = (((a + 1) / 2) | 0) - (a < 0 || 1 & a)),
                      (e = new o(
                          ((i = Math.sqrt(t)) == 1 / 0
                              ? "5e"
                              : (i = i.toExponential()).slice(
                                    0,
                                    i.indexOf("e") + 1,
                                )) + a,
                      )))
                    : (e = new o(i + "")),
                    (a = e.e + (o.DP += 4)));
                do {
                    e = c.times((n = e).plus(r.div(n)));
                } while (n.c.slice(0, a).join("") !== e.c.slice(0, a).join(""));
                return K(e, (o.DP -= 4) + e.e + 1, o.RM);
            }),
            (Uo.times = Uo.mul =
                function (e) {
                    var t,
                        n = this,
                        r = n.c,
                        o = (e = new (0, n.constructor)(e)).c,
                        i = r.length,
                        a = o.length,
                        c = n.e,
                        l = e.e;
                    if (((e.s = n.s == e.s ? 1 : -1), !r[0] || !o[0]))
                        return ((e.c = [(e.e = 0)]), e);
                    for (
                        e.e = c + l,
                            i < a &&
                                ((t = r),
                                (r = o),
                                (o = t),
                                (l = i),
                                (i = a),
                                (a = l)),
                            t = new Array((l = i + a));
                        l--;
                    )
                        t[l] = 0;
                    for (c = a; c--; ) {
                        for (a = 0, l = i + c; l > c; )
                            ((a = t[l] + o[c] * r[l - c - 1] + a),
                                (t[l--] = a % 10),
                                (a = (a / 10) | 0));
                        t[l] = a;
                    }
                    for (a ? ++e.e : t.shift(), c = t.length; !t[--c]; )
                        t.pop();
                    return ((e.c = t), e);
                }),
            (Uo.toExponential = function (e, t) {
                var n = this,
                    r = n.c[0];
                if (e !== Bo) {
                    if (e !== ~~e || e < 0 || e > Eo) throw Error(Lo);
                    for (n = K(new n.constructor(n), ++e, t); n.c.length < e; )
                        n.c.push(0);
                }
                return Z(n, !0, !!r);
            }),
            (Uo.toFixed = function (e, t) {
                var n = this,
                    r = n.c[0];
                if (e !== Bo) {
                    if (e !== ~~e || e < 0 || e > Eo) throw Error(Lo);
                    for (
                        e =
                            e +
                            (n = K(new n.constructor(n), e + n.e + 1, t)).e +
                            1;
                        n.c.length < e;
                    )
                        n.c.push(0);
                }
                return Z(n, !1, !!r);
            }),
            (Uo[Symbol.for("nodejs.util.inspect.custom")] =
                Uo.toJSON =
                Uo.toString =
                    function () {
                        var e = this,
                            t = e.constructor;
                        return Z(e, e.e <= t.NE || e.e >= t.PE, !!e.c[0]);
                    }),
            (Uo.toNumber = function () {
                var e = Number(Z(this, !0, !0));
                if (!0 === this.constructor.strict && !this.eq(e.toString()))
                    throw Error(Po + "Imprecise conversion");
                return e;
            }),
            (Uo.toPrecision = function (e, t) {
                var n = this,
                    r = n.constructor,
                    o = n.c[0];
                if (e !== Bo) {
                    if (e !== ~~e || e < 1 || e > Eo)
                        throw Error(Mo + "precision");
                    for (n = K(new r(n), e, t); n.c.length < e; ) n.c.push(0);
                }
                return Z(n, e <= n.e || n.e <= r.NE || n.e >= r.PE, !!o);
            }),
            (Uo.valueOf = function () {
                var e = this,
                    t = e.constructor;
                if (!0 === t.strict) throw Error(Po + "valueOf disallowed");
                return Z(e, e.e <= t.NE || e.e >= t.PE, !0);
            }));
        var Go = (function e() {
                function t(n) {
                    var r = this;
                    if (!(r instanceof t)) return n === Bo ? e() : new t(n);
                    if (n instanceof t)
                        ((r.s = n.s), (r.e = n.e), (r.c = n.c.slice()));
                    else {
                        if ("string" != typeof n) {
                            if (!0 === t.strict && "bigint" != typeof n)
                                throw TypeError(Mo + "value");
                            n = 0 === n && 1 / n < 0 ? "-0" : String(n);
                        }
                        !(function (e, t) {
                            var n, r, o;
                            if (!Fo.test(t)) throw Error(Mo + "number");
                            ((e.s =
                                "-" == t.charAt(0)
                                    ? ((t = t.slice(1)), -1)
                                    : 1),
                                (n = t.indexOf(".")) > -1 &&
                                    (t = t.replace(".", "")));
                            (r = t.search(/e/i)) > 0
                                ? (n < 0 && (n = r),
                                  (n += +t.slice(r + 1)),
                                  (t = t.substring(0, r)))
                                : n < 0 && (n = t.length);
                            for (
                                o = t.length, r = 0;
                                r < o && "0" == t.charAt(r);
                            )
                                ++r;
                            if (r == o) e.c = [(e.e = 0)];
                            else {
                                for (; o > 0 && "0" == t.charAt(--o); );
                                for (e.e = n - r - 1, e.c = [], n = 0; r <= o; )
                                    e.c[n++] = +t.charAt(r++);
                            }
                        })(r, n);
                    }
                    r.constructor = t;
                }
                return (
                    (t.prototype = Uo),
                    (t.DP = 20),
                    (t.RM = 1),
                    (t.NE = -7),
                    (t.PE = 21),
                    (t.strict = false),
                    (t.roundDown = 0),
                    (t.roundHalfUp = 1),
                    (t.roundHalfEven = 2),
                    (t.roundUp = 3),
                    t
                );
            })(),
            Xo = n("kPAj"),
            qo = (function (e) {
                return ((e.Normal = "1px solid"), (e.Big = "4px solid"), e);
            })({}),
            Wo = function (e, t) {
                return e + " " + t;
            },
            zo =
                (at({ border: Wo(qo.Normal, fr.Error) }),
                function (e, t) {
                    return at({
                        position: "relative",
                        padding: vr.M,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        borderRadius: fo.Default,
                        color: fr.Text,
                        backgroundColor: fr.Gray,
                        border: Wo(qo.Normal, t ? fr.Error : fr.LightGray),
                        cursor: "text",
                        ":focus-within": {
                            backgroundColor: "white",
                            borderColor: t ? fr.Error : e,
                        },
                    });
                }),
            Vo = at({
                fontSize: hr.fontSize,
                lineHeight: hr.fontSize,
                fontFamily: "inherit",
                flex: 1,
                border: "none",
                outline: "none",
                background: "transparent",
                width: "100%",
                minWidth: "unset",
                padding: 0,
                margin: 0,
                color: fr.Text,
                "::placeholder": { fontWeight: 400 },
                "::-webkit-outer-spin-button": {
                    "-webkit-appearance": "none",
                    margin: 0,
                },
                "::-webkit-inner-spin-button": {
                    "-webkit-appearance": "none",
                    margin: 0,
                },
                "-moz-appearance": "textfield",
            }),
            Yo = at({
                maxHeight: "250px",
                "& input": {
                    fontSize: hr.fontSize,
                    lineHeight: hr.fontSize,
                    fontWeight: 400,
                },
            }),
            Ko = at({
                background: fr.White,
                borderRadius: "0 0 " + fo.Default + " " + fo.Default,
                border: Wo(qo.Normal, fr.LightGray),
                borderTop: "none",
            }),
            Zo = at({ display: "flex", alignItems: "center", gap: vr.XXS }),
            Qo = at({
                overflowY: "scroll",
                height: "100%",
                maxHeight: "200px",
            }),
            $o = at({ borderBottom: Wo(qo.Normal, fr.LightGray) }),
            Jo = at(
                Q(
                    {
                        border: "none",
                        background: "none",
                        padding: vr.S + " " + vr.M,
                    },
                    hr,
                    {
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: vr.XS,
                        ":hover": { cursor: "pointer" },
                        "> span:last-of-type": Q({ marginLeft: "auto" }, yr, {
                            color: fr.TextGray,
                        }),
                    },
                ),
            ),
            ei = function (e, t) {
                return at(
                    Q({ marginLeft: "auto" }, yr, {
                        color: fr.TextGray,
                        display: "flex",
                        gap: vr.XS,
                        alignItems: "center",
                        "> svg": Q({ color: e }, t ? kr : {}),
                    }),
                );
            },
            ti = at({ borderRadius: fo.Default + " " + fo.Default + " 0 0 " }),
            ni = function (e) {
                return Mr([zo(e)]);
            },
            ri = at({
                display: "flex",
                width: "100%",
                gap: vr.S,
                alignItems: "flex-end",
                fontWeight: 500,
            }),
            oi = at({
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: vr.XXS,
                "> input": Q(
                    { width: "100%", textAlign: "right", fontWeight: 700 },
                    br,
                ),
                textAlign: "right",
            }),
            ii = at({ gap: vr.XXS, display: "flex", flexDirection: "column" }),
            ai = at(
                Q({}, pr, {
                    outline: "none",
                    border: "none",
                    fontFamily: "inherit",
                    cursor: "pointer",
                    padding: vr.XXS,
                    transform: "rotate(90deg)",
                    color: fr.TextGray,
                    "> svg": { strokeWidth: "2px" },
                }),
            ),
            ci = at({ border: Wo(qo.Normal, fr.Error) }),
            li = at({
                fontSize: br.fontSize,
                lineHeight: br.fontSize,
                fontWeight: 700,
            }),
            ui = at(
                $({}, br, {
                    fontWeight: 700,
                    display: "inline-flex",
                    marginRight: vr.XXS,
                }),
            ),
            si = function (e) {
                return at(
                    $({}, mr, {
                        fontWeight: 700,
                        color: e,
                        display: "inline-flex",
                        marginLeft: vr.XXS,
                    }),
                );
            },
            di = at($({}, wr(vr.M), { justifyContent: "center" })),
            fi = function (e) {
                var t;
                return at(
                    $(
                        {},
                        hr,
                        (((t = {
                            color: e,
                            borderRadius: fo.Big,
                            fontWeight: 500,
                            border: "none",
                            padding: 0,
                            fontFamily: "inherit",
                            cursor: "pointer",
                            background: "unset",
                        })[dr.TabletLandscapeUp] = {
                            border: "1px solid " + fr.DarkGray,
                            padding: vr.XS + " " + vr.L,
                        }),
                        t),
                    ),
                );
            };
        (((te.prototype = new rt.a()).isPureReactComponent = !0),
            (te.prototype.shouldComponentUpdate = function (e, t) {
                return ee(this.props, e) || ee(this.state, t);
            }));
        var pi = rt.i.__b;
        rt.i.__b = function (e) {
            (e.type &&
                e.type.__f &&
                e.ref &&
                ((e.props.ref = e.ref), (e.ref = null)),
                pi && pi(e));
        };
        var gi =
                ("undefined" != typeof Symbol &&
                    Symbol.for &&
                    Symbol.for("react.forward_ref")) ||
                3911,
            bi = rt.i.__e;
        rt.i.__e = function (e, t, n, r) {
            if (e.then)
                for (var o, i = t; (i = i.__); )
                    if ((o = i.__c) && o.__c)
                        return (
                            null == t.__e && ((t.__e = n.__e), (t.__k = n.__k)),
                            o.__c(e, t)
                        );
            bi(e, t, n, r);
        };
        var mi = rt.i.unmount;
        ((rt.i.unmount = function (e) {
            var t = e.__c;
            (t && t.__R && t.__R(),
                t && !0 === e.__h && (e.type = null),
                mi && mi(e));
        }),
            ((ie.prototype = new rt.a()).__c = function (e, t) {
                var n = t.__c,
                    r = this;
                (null == r.t && (r.t = []), r.t.push(n));
                var o = ae(r.__v),
                    i = !1,
                    a = function () {
                        i || ((i = !0), (n.__R = null), o ? o(c) : c());
                    };
                n.__R = a;
                var c = function () {
                        if (!--r.__u) {
                            if (r.state.__a) {
                                var e = r.state.__a;
                                r.__v.__k[0] = oe(e, e.__c.__P, e.__c.__O);
                            }
                            var t;
                            for (
                                r.setState({ __a: (r.__b = null) });
                                (t = r.t.pop());
                            )
                                t.forceUpdate();
                        }
                    },
                    l = !0 === t.__h;
                (r.__u++ || l || r.setState({ __a: (r.__b = r.__v.__k[0]) }),
                    e.then(a, a));
            }),
            (ie.prototype.componentWillUnmount = function () {
                this.t = [];
            }),
            (ie.prototype.render = function (e, t) {
                if (this.__b) {
                    if (this.__v.__k) {
                        var n = document.createElement("div"),
                            r = this.__v.__k[0].__c;
                        this.__v.__k[0] = re(this.__b, n, (r.__O = r.__P));
                    }
                    this.__b = null;
                }
                var o = t.__a && Object(rt.e)(rt.b, null, e.fallback);
                return (
                    o && (o.__h = null),
                    [Object(rt.e)(rt.b, null, t.__a ? null : e.children), o]
                );
            }));
        var hi = function (e, t, n) {
            if (
                (++n[1] === n[0] && e.o.delete(t),
                e.props.revealOrder &&
                    ("t" !== e.props.revealOrder[0] || !e.o.size))
            )
                for (n = e.u; n; ) {
                    for (; n.length > 3; ) n.pop()();
                    if (n[1] < n[0]) break;
                    e.u = n = n[2];
                }
        };
        (((ce.prototype = new rt.a()).__a = function (e) {
            var t = this,
                n = ae(t.__v),
                r = t.o.get(e);
            return (
                r[0]++,
                function (o) {
                    var i = function () {
                        t.props.revealOrder ? (r.push(o), hi(t, e, r)) : o();
                    };
                    n ? n(i) : i();
                }
            );
        }),
            (ce.prototype.render = function (e) {
                ((this.u = null), (this.o = new Map()));
                var t = Object(rt.k)(e.children);
                e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
                for (var n = t.length; n--; )
                    this.o.set(t[n], (this.u = [1, 0, this.u]));
                return e.children;
            }),
            (ce.prototype.componentDidUpdate = ce.prototype.componentDidMount =
                function () {
                    var e = this;
                    this.o.forEach(function (t, n) {
                        hi(e, n, t);
                    });
                }));
        var yi =
                ("undefined" != typeof Symbol &&
                    Symbol.for &&
                    Symbol.for("react.element")) ||
                60103,
            vi =
                /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
            _i = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
            Oi = /[A-Z0-9]/g,
            Ci = "undefined" != typeof document,
            ji = function (e) {
                return (
                    "undefined" != typeof Symbol && "symbol" == typeof Symbol()
                        ? /fil|che|rad/
                        : /fil|che|ra/
                ).test(e);
            };
        ((rt.a.prototype.isReactComponent = {}),
            [
                "componentWillMount",
                "componentWillReceiveProps",
                "componentWillUpdate",
            ].forEach(function (e) {
                Object.defineProperty(rt.a.prototype, e, {
                    configurable: !0,
                    get: function () {
                        return this["UNSAFE_" + e];
                    },
                    set: function (t) {
                        Object.defineProperty(this, e, {
                            configurable: !0,
                            writable: !0,
                            value: t,
                        });
                    },
                });
            }));
        var wi = rt.i.event;
        rt.i.event = function (e) {
            return (
                wi && (e = wi(e)),
                (e.persist = le),
                (e.isPropagationStopped = ue),
                (e.isDefaultPrevented = se),
                (e.nativeEvent = e)
            );
        };
        var Ni = {
                enumerable: !1,
                configurable: !0,
                get: function () {
                    return this.class;
                },
            },
            ki = rt.i.vnode;
        rt.i.vnode = function (e) {
            ("string" == typeof e.type &&
                (function (e) {
                    var t = e.props,
                        n = e.type,
                        r = {};
                    for (var o in t) {
                        var i = t[o];
                        if (
                            !(
                                ("value" === o &&
                                    "defaultValue" in t &&
                                    null == i) ||
                                (Ci && "children" === o && "noscript" === n) ||
                                "class" === o ||
                                "className" === o
                            )
                        ) {
                            var a = o.toLowerCase();
                            ("defaultValue" === o &&
                            "value" in t &&
                            null == t.value
                                ? (o = "value")
                                : "download" === o && !0 === i
                                  ? (i = "")
                                  : "ondoubleclick" === a
                                    ? (o = "ondblclick")
                                    : "onchange" !== a ||
                                        ("input" !== n && "textarea" !== n) ||
                                        ji(t.type)
                                      ? "onfocus" === a
                                          ? (o = "onfocusin")
                                          : "onblur" === a
                                            ? (o = "onfocusout")
                                            : _i.test(o)
                                              ? (o = a)
                                              : -1 === n.indexOf("-") &&
                                                  vi.test(o)
                                                ? (o = o
                                                      .replace(Oi, "-$&")
                                                      .toLowerCase())
                                                : null === i && (i = void 0)
                                      : (a = o = "oninput"),
                                "oninput" === a &&
                                    r[(o = a)] &&
                                    (o = "oninputCapture"),
                                (r[o] = i));
                        }
                    }
                    ("select" == n &&
                        r.multiple &&
                        Array.isArray(r.value) &&
                        (r.value = Object(rt.k)(t.children).forEach(
                            function (e) {
                                e.props.selected =
                                    -1 != r.value.indexOf(e.props.value);
                            },
                        )),
                        "select" == n &&
                            null != r.defaultValue &&
                            (r.value = Object(rt.k)(t.children).forEach(
                                function (e) {
                                    e.props.selected = r.multiple
                                        ? -1 !=
                                          r.defaultValue.indexOf(e.props.value)
                                        : r.defaultValue == e.props.value;
                                },
                            )),
                        t.class && !t.className
                            ? ((r.class = t.class),
                              Object.defineProperty(r, "className", Ni))
                            : ((t.className && !t.class) ||
                                  (t.class && t.className)) &&
                              (r.class = r.className = t.className),
                        (e.props = r));
                })(e),
                (e.$$typeof = yi),
                ki && ki(e));
        };
        var Ti = rt.i.__r;
        rt.i.__r = function (e) {
            (Ti && Ti(e), e.__c);
        };
        var Si = rt.i.diffed;
        rt.i.diffed = function (e) {
            Si && Si(e);
            var t = e.props,
                n = e.__e;
            (null != n &&
                "textarea" === e.type &&
                "value" in t &&
                t.value !== n.value &&
                (n.value = null == t.value ? "" : t.value),
                null);
        };
        var xi,
            Ai,
            Ii,
            Ei,
            Ri,
            Pi,
            Mi = ["containerClassName", "inputClassName", "containerOnClick"],
            Li = ne(function (e, t) {
                var n = h(),
                    r = on().primaryColor,
                    o = e.containerClassName,
                    i = e.inputClassName,
                    a = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            o = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++)
                            t.indexOf((n = i[r])) >= 0 || (o[n] = e[n]);
                        return o;
                    })(e, Mi);
                return Object(rt.g)(
                    "div",
                    {
                        className: Mr([zo(r), o]),
                        onClick: function () {
                            var e;
                            null == (e = n.current) || e.focus();
                        },
                    },
                    Object(rt.g)(
                        "textarea",
                        de(
                            {
                                ref: function (e) {
                                    e &&
                                        ((n.current = e), t && (t.current = e));
                                },
                                className: Mr([Vo, i]),
                            },
                            a,
                        ),
                    ),
                );
            }),
            Di = [
                "sufix",
                "sufixClassName",
                "prefix",
                "prefixClassName",
                "containerClassName",
                "inputClassName",
                "containerOnClick",
                "error",
            ],
            Hi = ne(function (e, t) {
                var n = e.sufix,
                    r = e.sufixClassName,
                    o = e.prefix,
                    i = e.prefixClassName,
                    a = e.containerClassName,
                    c = e.inputClassName,
                    l = e.containerOnClick,
                    u = e.error,
                    s = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            o = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++)
                            t.indexOf((n = i[r])) >= 0 || (o[n] = e[n]);
                        return o;
                    })(e, Di),
                    d = h(),
                    f = on().primaryColor;
                return Object(rt.g)(
                    "div",
                    {
                        className: Mr([zo(f, Boolean(u)), a]),
                        onClick: function () {
                            var e;
                            l ? l() : null == (e = d.current) || e.focus();
                        },
                    },
                    o && Object(rt.g)("div", { className: i }, o),
                    Object(rt.g)(
                        "input",
                        fe(
                            {
                                ref: function (e) {
                                    e &&
                                        ((d.current = e), t && (t.current = e));
                                },
                                className: Mr([Vo, c]),
                            },
                            s,
                        ),
                    ),
                    n && Object(rt.g)("div", { className: r }, n),
                );
            }),
            Ui = Hi,
            Bi = n.p + "58f20393bf2b41f944c6229c2af785b9.svg",
            Fi = n.p + "5982461fe2304c26f3a3cf4c50806dad.svg",
            Gi = n.p + "b31a89ce5555412a0c8a4c6463286584.svg",
            Xi = n.p + "26c9b1d3d7943e6e67cf13e039ba5ac8.svg",
            qi = n.p + "ddb1f3b63e33585263e5905706d6ff6d.svg",
            Wi = n.p + "ad80427b5a2980f1d19884ede42b29de.svg",
            zi = n.p + "9052c75387065f76bb3436b7e4ce12cd.svg",
            Vi = n.p + "3a5177b76709819ba4663556e60222f8.svg",
            Yi = n.p + "f8f4253f02d1fbc4bf04d0959a6e614c.svg",
            Ki = n.p + "4d81ee51fa2520df58ae092aeb3d0bd4.svg",
            Zi = n.p + "8098252f28e93069c75d6010d3ac6bc1.svg",
            Qi = n.p + "03c114f6e014588a4bde815d9bc85821.svg",
            $i = n.p + "5450d3cada4fd0370ab8d885765f5cc3.svg",
            Ji = n.p + "cc9ce389e9a4e0f518e3caeb7b60912d.svg",
            ea = n.p + "8f22b294629293d29895fddef0a8baea.svg",
            ta = n.p + "f588feb3cbbcc0fb259a3630ec7e34ba.svg",
            na = n.p + "badb98080214485db486794fb59a95cc.svg",
            ra = n.p + "b0bcdec7071a3aca3aadfd64205956d8.svg",
            oa = n.p + "fc9295a4651c56d5b4e8c3aa13a93208.svg",
            ia = n.p + "e4bfa8eb04696d4fd5ea04ca4c35469b.svg",
            aa = n.p + "743324f8e09d34a894c21e91c396f289.svg",
            ca = n.p + "b9021bb757262a32de6d8931015051d9.svg",
            la = n.p + "7ab9396038b4befda4354b2a476d9064.svg",
            ua = n.p + "bc2c9e9d67b73656a6da5dd177aa10a2.svg",
            sa = n.p + "6214ae0b42d798a0c9a51503a27a66bf.svg",
            da = n.p + "45bcde5a98dbbdf2a4e0769eca2154f1.svg",
            fa = n.p + "8798fcc6fd2d5d3aeccea6ee3fcfec89.svg",
            pa = n.p + "88611c6e2f9450f29ece8d2b36641670.svg",
            ga = (function (e) {
                return (
                    (e.AAVE = "AAVE"),
                    (e.ALCX = "ALCX"),
                    (e.ALGO = "ALGO"),
                    (e.AMP = "AMP"),
                    (e.ANKR = "ANKR"),
                    (e.APE = "APE"),
                    (e.API3 = "API3"),
                    (e.AUDIO = "AUDIO"),
                    (e.AVAX = "AVAX"),
                    (e.AXS = "AXS"),
                    (e.BAT = "BAT"),
                    (e.BCH = "BCH"),
                    (e.BNB = "BNB"),
                    (e.BNT = "BNT"),
                    (e.BOME = "BOME"),
                    (e.BOND = "BOND"),
                    (e.BONK = "BONK"),
                    (e.BTC = "BTC"),
                    (e.CHILLGUY = "CHILLGUY"),
                    (e.CHZ = "CHZ"),
                    (e.COMP = "COMP"),
                    (e.CRV = "CRV"),
                    (e.CTX = "CTX"),
                    (e.CUBE = "CUBE"),
                    (e.CVC = "CVC"),
                    (e.DAI = "DAI"),
                    (e.DOGE = "DOGE"),
                    (e.DOT = "DOT"),
                    (e.ELON = "ELON"),
                    (e.ENS = "ENS"),
                    (e.ETH = "ETH"),
                    (e.FARTCOIN = "FARTCOIN"),
                    (e.FET = "FET"),
                    (e.FIL = "FIL"),
                    (e.FLOKI = "FLOKI"),
                    (e.FTM = "FTM"),
                    (e.GAL = "GAL"),
                    (e.GALA = "GALA"),
                    (e.GMT = "GMT"),
                    (e.GOAT = "GOAT"),
                    (e.GRT = "GRT"),
                    (e.GUSD = "GUSD"),
                    (e.HNT = "HNT"),
                    (e.IMX = "IMX"),
                    (e.INJ = "INJ"),
                    (e.IOTX = "IOTX"),
                    (e.JAM = "JAM"),
                    (e.KNC = "KNC"),
                    (e.KP3R = "KP3R"),
                    (e.LDO = "LDO"),
                    (e.LINK = "LINK"),
                    (e.LPT = "LPT"),
                    (e.LRC = "LRC"),
                    (e.LTC = "LTC"),
                    (e.MANA = "MANA"),
                    (e.MASK = "MASK"),
                    (e.MCO2 = "MCO2"),
                    (e.MEW = "MEW"),
                    (e.MKR = "MKR"),
                    (e.MNT = "MNT"),
                    (e.MOB = "MOB"),
                    (e.MOODENG = "MOODENG"),
                    (e.NMR = "NMR"),
                    (e.OP = "OP"),
                    (e.OXT = "OXT"),
                    (e.PAXG = "PAXG"),
                    (e.PEPE = "PEPE"),
                    (e.PNUT = "PNUT"),
                    (e.POL = "POL"),
                    (e.POPCAT = "POPCAT"),
                    (e.PYTH = "PYTH"),
                    (e.QNT = "QNT"),
                    (e.QRDO = "QRDO"),
                    (e.RARE = "RARE"),
                    (e.RAY = "RAY"),
                    (e.REN = "REN"),
                    (e.RLUSD = "RLUSD"),
                    (e.RNDR = "RNDR"),
                    (e.SAMO = "SAMO"),
                    (e.SAND = "SAND"),
                    (e.SBR = "SBR"),
                    (e.SHIB = "SHIB"),
                    (e.SKL = "SKL"),
                    (e.SLP = "SLP"),
                    (e.SNX = "SNX"),
                    (e.SOL = "SOL"),
                    (e.STORJ = "STORJ"),
                    (e.SUSHI = "SUSHI"),
                    (e.UMA = "UMA"),
                    (e.UNI = "UNI"),
                    (e.USDC = "USDC"),
                    (e.USDT = "USDT"),
                    (e.WIF = "WIF"),
                    (e.XLM = "XLM"),
                    (e.XRP = "XRP"),
                    (e.XTZ = "XTZ"),
                    (e.YFI = "YFI"),
                    (e.ZBC = "ZBC"),
                    (e.ZEC = "ZEC"),
                    (e.ZRX = "ZRX"),
                    e
                );
            })({}),
            ba = (function (e) {
                return ((e.ERC20 = "ERC-20"), (e.SPL = "SPL"), e);
            })({}),
            ma = [ga.ALGO, ga.MOB, ga.XLM, ga.BNB],
            ha =
                (((xi = {})[ga.AAVE] = {
                    displayName: "Aave",
                    abbreviation: "AAVE",
                    decimalOffset: 18,
                    contractType: ba.ERC20,
                    coingeckoId: "aave",
                }),
                (xi[ga.ALCX] = {
                    displayName: "Alchemix",
                    abbreviation: "ALCX",
                    decimalOffset: 18,
                    contractType: ba.ERC20,
                    coingeckoId: "alchemix",
                }),
                (xi[ga.ALGO] = {
                    displayName: "Algorand",
                    abbreviation: "ALGO",
                    decimalOffset: 6,
                    coingeckoId: "algorand",
                }),
                (xi[ga.AMP] = {
                    displayName: "Amp",
                    abbreviation: "AMP",
                    decimalOffset: 18,
                    contractType: ba.ERC20,
                    coingeckoId: "amp-token",
                }),
                (xi[ga.ANKR] = {
                    displayName: "Ankr",
                    abbreviation: "ANKR",
                    decimalOffset: 18,
                    contractType: ba.ERC20,
                    coingeckoId: "ankr",
                }),
                (xi[ga.APE] = {
                    displayName: "Apecoin",
                    abbreviation: "APE",
                    decimalOffset: 18,
                    contractType: ba.ERC20,
                    coingeckoId: "apecoin",
                }),
                (xi[ga.API3] = {
                    displayName: "API3",
                    abbreviation: "API3",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "api3",
                }),
                (xi[ga.AUDIO] = {
                    displayName: "Audius",
                    abbreviation: "AUDIO",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "audius",
                }),
                (xi[ga.AVAX] = {
                    displayName: "Avalanche",
                    abbreviation: "AVAX",
                    decimalOffset: 9,
                    coingeckoId: "avalanche-2",
                }),
                (xi[ga.AXS] = {
                    displayName: "Axie Infinity",
                    abbreviation: "AXS",
                    decimalOffset: 18,
                    contractType: ba.ERC20,
                    coingeckoId: "axs",
                }),
                (xi[ga.BAT] = {
                    displayName: "Basic Attention Token",
                    abbreviation: "BAT",
                    decimalOffset: 18,
                    contractType: ba.ERC20,
                    coingeckoId: "basic-attention-token",
                }),
                (xi[ga.BCH] = {
                    displayName: "Bitcoin Cash",
                    abbreviation: "BCH",
                    decimalOffset: 8,
                    coingeckoId: "bitcoin-cash",
                }),
                (xi[ga.BNB] = {
                    displayName: "Binance Coin",
                    abbreviation: "BNB",
                    decimalOffset: 8,
                    coingeckoId: "binancecoin",
                }),
                (xi[ga.BNT] = {
                    displayName: "Bancor",
                    abbreviation: "BNT",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "bancor",
                }),
                (xi[ga.BOME] = {
                    displayName: "BOME",
                    abbreviation: "BOME",
                    contractType: ba.SPL,
                    decimalOffset: 9,
                    coingeckoId: "book-of-meme",
                }),
                (xi[ga.BOND] = {
                    displayName: "BarnBridge",
                    abbreviation: "BOND",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "barnbridge",
                }),
                (xi[ga.BONK] = {
                    displayName: "Bonk",
                    abbreviation: "BONK",
                    contractType: ba.SPL,
                    decimalOffset: 9,
                    coingeckoId: "bonk",
                }),
                (xi[ga.BTC] = {
                    displayName: "Bitcoin",
                    abbreviation: "BTC",
                    decimalOffset: 8,
                    coingeckoId: "bitcoin",
                }),
                (xi[ga.CHILLGUY] = {
                    displayName: "Just a chill guy",
                    abbreviation: "CHILLGUY",
                    contractType: ba.SPL,
                    decimalOffset: 9,
                    coingeckoId: "chill-guy",
                }),
                (xi[ga.CHZ] = {
                    displayName: "Chiliz",
                    abbreviation: "CHZ",
                    decimalOffset: 18,
                    contractType: ba.ERC20,
                    coingeckoId: "chiliz",
                }),
                (xi[ga.COMP] = {
                    displayName: "Compound",
                    abbreviation: "COMP",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "compound-governance-token",
                }),
                (xi[ga.CRV] = {
                    displayName: "Curve DAO Token",
                    abbreviation: "CRV",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "curve-dao-token",
                }),
                (xi[ga.CTX] = {
                    displayName: "Cryptex Finance",
                    abbreviation: "CTX",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "cryptex-finance",
                }),
                (xi[ga.CUBE] = {
                    displayName: "Cube",
                    abbreviation: "CUBE",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "somnium-space-cubes",
                }),
                (xi[ga.CVC] = {
                    displayName: "Civic",
                    abbreviation: "CVC",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "civic",
                }),
                (xi[ga.DAI] = {
                    displayName: "Dai",
                    abbreviation: "DAI",
                    decimalOffset: 18,
                    contractType: ba.ERC20,
                    coingeckoId: "dai",
                }),
                (xi[ga.DOGE] = {
                    displayName: "DogeCoin",
                    abbreviation: "DOGE",
                    decimalOffset: 8,
                    coingeckoId: "dogecoin",
                }),
                (xi[ga.DOT] = {
                    displayName: "Polkadot",
                    abbreviation: "DOT",
                    decimalOffset: 10,
                    coingeckoId: "polkadot",
                }),
                (xi[ga.ELON] = {
                    displayName: "Dogelon Mars",
                    abbreviation: "ELON",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "dogelon-mars",
                }),
                (xi[ga.ENS] = {
                    displayName: "Ethereum Name Service",
                    abbreviation: "ENS",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "ethereum-name-service",
                }),
                (xi[ga.ETH] = {
                    displayName: "Ethereum",
                    abbreviation: "ETH",
                    decimalOffset: 18,
                    coingeckoId: "ethereum",
                }),
                (xi[ga.FARTCOIN] = {
                    displayName: "Fartcoin",
                    abbreviation: "FARTCOIN",
                    contractType: ba.SPL,
                    decimalOffset: 9,
                    coingeckoId: "fartcoin",
                }),
                (xi[ga.FET] = {
                    displayName: "Fetch.ai",
                    abbreviation: "FET",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "fetch-ai",
                }),
                (xi[ga.FIL] = {
                    displayName: "Filecoin",
                    abbreviation: "FIL",
                    decimalOffset: 18,
                    coingeckoId: "filecoin",
                }),
                (xi[ga.FLOKI] = {
                    displayName: "FLOKI",
                    abbreviation: "FLOKI",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "floki",
                }),
                (xi[ga.FTM] = {
                    displayName: "Fantom",
                    abbreviation: "FTM",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "fantom",
                }),
                (xi[ga.GAL] = {
                    displayName: "Galaxe",
                    abbreviation: "GAL",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "project-galaxy",
                }),
                (xi[ga.GALA] = {
                    displayName: "Gala",
                    abbreviation: "GALA",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "gala",
                }),
                (xi[ga.GMT] = {
                    displayName: "STEPN",
                    abbreviation: "GMT",
                    contractType: ba.SPL,
                    decimalOffset: 9,
                    coingeckoId: "stepn",
                }),
                (xi[ga.GOAT] = {
                    displayName: "Goatcoin",
                    abbreviation: "GOAT",
                    contractType: ba.SPL,
                    decimalOffset: 9,
                    coingeckoId: "goatseus-maximus",
                }),
                (xi[ga.GRT] = {
                    displayName: "The Graph",
                    abbreviation: "GRT",
                    decimalOffset: 18,
                    contractType: ba.ERC20,
                    coingeckoId: "the-graph",
                }),
                (xi[ga.GUSD] = {
                    displayName: "Gemini Dollar",
                    abbreviation: "GUSD",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "gemini-dollar",
                }),
                (xi[ga.HNT] = {
                    displayName: "Helium",
                    abbreviation: "HNT",
                    contractType: ba.SPL,
                    decimalOffset: 9,
                    coingeckoId: "helium",
                }),
                (xi[ga.IMX] = {
                    displayName: "Immutable X",
                    abbreviation: "IMX",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "immutable-x",
                }),
                (xi[ga.INJ] = {
                    displayName: "Injective Protocol",
                    abbreviation: "INJ",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "injective-protocol",
                }),
                (xi[ga.IOTX] = {
                    displayName: "IoTeX",
                    abbreviation: "IOTX",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "iotex",
                }),
                (xi[ga.JAM] = {
                    displayName: "Geojam",
                    abbreviation: "JAM",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "geojam",
                }),
                (xi[ga.KNC] = {
                    displayName: "Kyber types.Network",
                    abbreviation: "KNC",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "kyber-network-crystal",
                }),
                (xi[ga.KP3R] = {
                    displayName: "Keep3rV1",
                    abbreviation: "KP3R",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "keep3rv1",
                }),
                (xi[ga.LDO] = {
                    displayName: "Lido DAO",
                    abbreviation: "LDO",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "lido-dao",
                }),
                (xi[ga.LINK] = {
                    displayName: "Chainlink",
                    abbreviation: "LINK",
                    decimalOffset: 18,
                    contractType: ba.ERC20,
                    coingeckoId: "chainlink",
                }),
                (xi[ga.LPT] = {
                    displayName: "Livepeer",
                    abbreviation: "LPT",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "livepeer",
                }),
                (xi[ga.LRC] = {
                    displayName: "Loopring",
                    abbreviation: "LRC",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "loopring",
                }),
                (xi[ga.LTC] = {
                    displayName: "Litecoin",
                    abbreviation: "LTC",
                    decimalOffset: 8,
                    coingeckoId: "litecoin",
                }),
                (xi[ga.MANA] = {
                    displayName: "Mana",
                    abbreviation: "MANA",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "decentraland",
                }),
                (xi[ga.MASK] = {
                    displayName: "Mask Network",
                    abbreviation: "MASK",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "mask-network",
                }),
                (xi[ga.MCO2] = {
                    displayName: "Moss Carbon Credit",
                    abbreviation: "MCO2",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "moss-carbon-credit",
                }),
                (xi[ga.MEW] = {
                    displayName: "MEW",
                    abbreviation: "MEW",
                    contractType: ba.SPL,
                    decimalOffset: 9,
                    coingeckoId: "cat-in-a-dogs-world",
                }),
                (xi[ga.MKR] = {
                    displayName: "Maker",
                    abbreviation: "MKR",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "maker",
                }),
                (xi[ga.MNT] = {
                    displayName: "Mantle",
                    abbreviation: "MNT",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "mantle",
                }),
                (xi[ga.MOB] = {
                    displayName: "MobileCoin",
                    abbreviation: "MOB",
                    decimalOffset: 12,
                    coingeckoId: "mobilecoin",
                }),
                (xi[ga.MOODENG] = {
                    displayName: "MOODENG",
                    abbreviation: "MOODENG",
                    contractType: ba.SPL,
                    decimalOffset: 9,
                    coingeckoId: "moo-deng",
                }),
                (xi[ga.NMR] = {
                    displayName: "Numeraire",
                    abbreviation: "NMR",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "numeraire",
                }),
                (xi[ga.OP] = {
                    displayName: "Optimism",
                    abbreviation: "OP",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "optimism",
                }),
                (xi[ga.OXT] = {
                    displayName: "Orchid",
                    abbreviation: "OXT",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "orchid-protocol",
                }),
                (xi[ga.PAXG] = {
                    displayName: "PAX Gold",
                    abbreviation: "PAXG",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "pax-gold",
                }),
                (xi[ga.PEPE] = {
                    displayName: "PEPE",
                    abbreviation: "PEPE",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "pepe",
                }),
                (xi[ga.PNUT] = {
                    displayName: "Peanut",
                    abbreviation: "PNUT",
                    contractType: ba.SPL,
                    decimalOffset: 9,
                    coingeckoId: "peanut-the-squirrel",
                }),
                (xi[ga.POL] = {
                    displayName: "Polygon",
                    abbreviation: "POL",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "polygon-ecosystem-token",
                }),
                (xi[ga.POPCAT] = {
                    displayName: "Popcat",
                    abbreviation: "POPCAT",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "popcat",
                }),
                (xi[ga.PYTH] = {
                    displayName: "Pyth Network",
                    abbreviation: "PYTH",
                    contractType: ba.SPL,
                    decimalOffset: 9,
                    coingeckoId: "pyth-network",
                }),
                (xi[ga.QNT] = {
                    displayName: "Quant",
                    abbreviation: "QNT",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "quant-network",
                }),
                (xi[ga.QRDO] = {
                    displayName: "Qredo",
                    abbreviation: "QRDO",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "qredo",
                }),
                (xi[ga.RARE] = {
                    displayName: "SuperRare",
                    abbreviation: "RARE",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "superrare",
                }),
                (xi[ga.RAY] = {
                    displayName: "Raydium",
                    abbreviation: "RAY",
                    decimalOffset: 6,
                    contractType: ba.SPL,
                    coingeckoId: "raydium",
                }),
                (xi[ga.REN] = {
                    displayName: "Ren",
                    abbreviation: "REN",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "republic-protocol",
                }),
                (xi[ga.RLUSD] = {
                    displayName: "Ripple USD",
                    abbreviation: "RLUSD",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "ripple-usd",
                }),
                (xi[ga.RNDR] = {
                    displayName: "Render Token",
                    abbreviation: "RNDR",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "render-token",
                }),
                (xi[ga.SAMO] = {
                    displayName: "Samoyed",
                    abbreviation: "SAMO",
                    decimalOffset: 9,
                    contractType: ba.SPL,
                    coingeckoId: "samoyedcoin",
                }),
                (xi[ga.SAND] = {
                    displayName: "Sandbox",
                    abbreviation: "SAND",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "the-sandbox",
                }),
                (xi[ga.SBR] = {
                    displayName: "Saber",
                    abbreviation: "SBR",
                    decimalOffset: 6,
                    contractType: ba.SPL,
                    coingeckoId: "saber",
                }),
                (xi[ga.SHIB] = {
                    displayName: "Shiba Inu",
                    abbreviation: "SHIB",
                    decimalOffset: 18,
                    contractType: ba.ERC20,
                    coingeckoId: "shiba-inu",
                }),
                (xi[ga.SKL] = {
                    displayName: "Skale",
                    abbreviation: "SKL",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "skale",
                }),
                (xi[ga.SLP] = {
                    displayName: "Smooth Love Potion",
                    abbreviation: "SLP",
                    decimalOffset: 18,
                    contractType: ba.ERC20,
                    coingeckoId: "smooth-love-potion",
                }),
                (xi[ga.SNX] = {
                    displayName: "Synthetix",
                    abbreviation: "SNX",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "havven",
                }),
                (xi[ga.SOL] = {
                    displayName: "Solana",
                    abbreviation: "SOL",
                    decimalOffset: 9,
                    coingeckoId: "solana",
                }),
                (xi[ga.STORJ] = {
                    displayName: "Storj",
                    abbreviation: "STORJ",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "storj",
                }),
                (xi[ga.SUSHI] = {
                    displayName: "SushiSwap",
                    abbreviation: "SUSHI",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "sushi",
                }),
                (xi[ga.UMA] = {
                    displayName: "UMA",
                    abbreviation: "UMA",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "uma",
                }),
                (xi[ga.UNI] = {
                    displayName: "Uniswap",
                    abbreviation: "UNI",
                    decimalOffset: 18,
                    contractType: ba.ERC20,
                    coingeckoId: "uniswap",
                }),
                (xi[ga.USDC] = {
                    displayName: "USD Coin",
                    abbreviation: "USDC",
                    decimalOffset: 6,
                    contractType: ba.ERC20,
                    coingeckoId: "usd-coin",
                }),
                (xi[ga.USDT] = {
                    displayName: "Tether",
                    abbreviation: "USDT",
                    decimalOffset: 6,
                    contractType: ba.ERC20,
                    coingeckoId: "tether",
                }),
                (xi[ga.WIF] = {
                    displayName: "dogwifhat",
                    abbreviation: "WIF",
                    contractType: ba.SPL,
                    decimalOffset: 9,
                    coingeckoId: "dogwifcoin",
                }),
                (xi[ga.XLM] = {
                    displayName: "Stellar",
                    abbreviation: "XLM",
                    decimalOffset: 7,
                    coingeckoId: "stellar",
                }),
                (xi[ga.XRP] = {
                    displayName: "XRP",
                    abbreviation: "XRP",
                    decimalOffset: 6,
                    coingeckoId: "ripple",
                }),
                (xi[ga.XTZ] = {
                    displayName: "Tezos",
                    abbreviation: "XTZ",
                    decimalOffset: 6,
                    coingeckoId: "tezos",
                }),
                (xi[ga.YFI] = {
                    displayName: "Yearn Finance",
                    abbreviation: "YFI",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "yearn-finance",
                }),
                (xi[ga.ZBC] = {
                    displayName: "Zebec Protocol",
                    abbreviation: "ZBC",
                    contractType: ba.SPL,
                    decimalOffset: 9,
                    coingeckoId: "zebec-protocol",
                }),
                (xi[ga.ZEC] = {
                    displayName: "ZCash",
                    abbreviation: "ZEC",
                    decimalOffset: 8,
                    coingeckoId: "zcash",
                }),
                (xi[ga.ZRX] = {
                    displayName: "0x",
                    abbreviation: "ZRX",
                    contractType: ba.ERC20,
                    decimalOffset: 18,
                    coingeckoId: "0x",
                }),
                xi),
            ya =
                (((Ai = {})[ga.AAVE] = {
                    iconCloudinaryId: "crypto/aave_oszkzj",
                }),
                (Ai[ga.ALCX] = { iconCloudinaryId: "crypto/alcx_agfvh3" }),
                (Ai[ga.AMP] = { iconCloudinaryId: "crypto/amp_zrgutx" }),
                (Ai[ga.ANKR] = { iconCloudinaryId: "crypto/ankr_vipelu" }),
                (Ai[ga.ALGO] = { icon: Bi }),
                (Ai[ga.APE] = { icon: Fi }),
                (Ai[ga.AVAX] = { icon: Gi }),
                (Ai[ga.AXS] = { iconCloudinaryId: "crypto/axs_vdwbc0" }),
                (Ai[ga.BAT] = { icon: Xi }),
                (Ai[ga.BCH] = { icon: Wi }),
                (Ai[ga.BNB] = { icon: qi }),
                (Ai[ga.BTC] = { icon: zi }),
                (Ai[ga.CHZ] = { iconCloudinaryId: "crypto/chiliz_j11blm" }),
                (Ai[ga.DAI] = { icon: Yi }),
                (Ai[ga.DOGE] = { icon: Ki }),
                (Ai[ga.DOT] = { icon: ta }),
                (Ai[ga.ETH] = { icon: Zi }),
                (Ai[ga.FARTCOIN] = {
                    iconCloudinaryId: "crypto/fartcoin_lc4soe",
                }),
                (Ai[ga.FIL] = { icon: Qi }),
                (Ai[ga.GRT] = { icon: $i }),
                (Ai[ga.LINK] = { icon: Vi }),
                (Ai[ga.LTC] = { icon: Ji }),
                (Ai[ga.MNT] = { iconCloudinaryId: "Mantle-Logo-mark_yfifiz" }),
                (Ai[ga.MOB] = { icon: ea }),
                (Ai[ga.RAY] = { icon: na }),
                (Ai[ga.SAMO] = { icon: ia }),
                (Ai[ga.SBR] = { icon: oa }),
                (Ai[ga.SHIB] = { icon: aa }),
                (Ai[ga.SLP] = { iconCloudinaryId: "crypto/slp_clp71c" }),
                (Ai[ga.SOL] = { icon: ca }),
                (Ai[ga.UNI] = { icon: da }),
                (Ai[ga.USDC] = { icon: fa }),
                (Ai[ga.USDT] = { icon: ua }),
                (Ai[ga.XLM] = { icon: la }),
                (Ai[ga.XRP] = { iconCloudinaryId: "crypto/xrp_uwcehg" }),
                (Ai[ga.XTZ] = { icon: sa }),
                (Ai[ga.ZEC] = { icon: pa }),
                (Ai[ga.API3] = {
                    iconCloudinaryId: "crypto/xb8xoz6kxev0uytaejlo",
                }),
                (Ai[ga.AUDIO] = {
                    iconCloudinaryId: "crypto/ucctvvgwedku9hexplp7",
                }),
                (Ai[ga.BNT] = {
                    iconCloudinaryId: "crypto/jgb6ub5gckohghdrt1ig",
                }),
                (Ai[ga.BOME] = {
                    iconCloudinaryId: "crypto/bqqz7kifthzfat7jyjqs",
                }),
                (Ai[ga.BOND] = {
                    iconCloudinaryId: "crypto/cidlkxmdqdoi2ezygfjj",
                }),
                (Ai[ga.BONK] = {
                    iconCloudinaryId: "crypto/tu3cprnhlpkew6ijzmyn",
                }),
                (Ai[ga.COMP] = {
                    iconCloudinaryId: "crypto/ayjushqknohuz9x3hcx5",
                }),
                (Ai[ga.CRV] = {
                    iconCloudinaryId: "crypto/txyb4aa9a0skuhoyjcti",
                }),
                (Ai[ga.CTX] = {
                    iconCloudinaryId: "crypto/mpno6vbbahgx8lgxmb4a",
                }),
                (Ai[ga.CUBE] = {
                    iconCloudinaryId: "crypto/n8su92fe1atqx79hrhqf",
                }),
                (Ai[ga.CVC] = {
                    iconCloudinaryId: "crypto/cw8ahifxtnfw8pbgh5o9",
                }),
                (Ai[ga.ELON] = {
                    iconCloudinaryId: "crypto/fvsarijyyz1v9j5w1sh2",
                }),
                (Ai[ga.ENS] = {
                    iconCloudinaryId: "crypto/naiw9tgamtvxcxctwxog",
                }),
                (Ai[ga.FET] = {
                    iconCloudinaryId: "crypto/mwfznnuw28qqeia4uwov",
                }),
                (Ai[ga.FTM] = {
                    iconCloudinaryId: "crypto/laq3m7el5wdfmlhwwtk0",
                }),
                (Ai[ga.GAL] = {
                    iconCloudinaryId: "crypto/a5km5rat7dpiz6ckkvfi",
                }),
                (Ai[ga.GALA] = {
                    iconCloudinaryId: "crypto/rifljrw1ry9wu1i7mxji",
                }),
                (Ai[ga.GMT] = {
                    iconCloudinaryId: "crypto/uyyddnskoabbpei7olin",
                }),
                (Ai[ga.GOAT] = {
                    iconCloudinaryId: "crypto/eur83ufigc8id1ouov6k",
                }),
                (Ai[ga.GUSD] = {
                    iconCloudinaryId: "crypto/w8zltgl5ngsz1lqch17g",
                }),
                (Ai[ga.IMX] = {
                    iconCloudinaryId: "crypto/dzbiyoog90osmjwx1col",
                }),
                (Ai[ga.INJ] = {
                    iconCloudinaryId: "crypto/gi0voz42gn33azwaa11a",
                }),
                (Ai[ga.IOTX] = {
                    iconCloudinaryId: "crypto/pkc4lx0unriaayfdx8us",
                }),
                (Ai[ga.JAM] = {
                    iconCloudinaryId: "crypto/xmn1xxzccz84xiej1esw",
                }),
                (Ai[ga.KNC] = {
                    iconCloudinaryId: "crypto/mqdyhpc07mle6dkfomye",
                }),
                (Ai[ga.KP3R] = {
                    iconCloudinaryId: "crypto/eoabgtxyhpqqfhv1bxud",
                }),
                (Ai[ga.LDO] = {
                    iconCloudinaryId: "crypto/thmvnuxks9z3gthhypwb",
                }),
                (Ai[ga.LPT] = {
                    iconCloudinaryId: "crypto/setl154mkwd9kpfly7om",
                }),
                (Ai[ga.LRC] = {
                    iconCloudinaryId: "crypto/sazpx9zyfsgbmprmfag9",
                }),
                (Ai[ga.MANA] = {
                    iconCloudinaryId: "crypto/ekefdi1p3jgoeb08oszc",
                }),
                (Ai[ga.MASK] = {
                    iconCloudinaryId: "crypto/ykwym7djaofb2q6lcn5n",
                }),
                (Ai[ga.MCO2] = {
                    iconCloudinaryId: "crypto/ysuyysfrukryu1jw2wrh",
                }),
                (Ai[ga.MEW] = {
                    iconCloudinaryId: "crypto/u5yaemgk4ajviyqriav6",
                }),
                (Ai[ga.MKR] = {
                    iconCloudinaryId: "crypto/tpdipvaap6m150j2hdec",
                }),
                (Ai[ga.MOODENG] = {
                    iconCloudinaryId: "crypto/csrl7ferznsrkjcwg5lq",
                }),
                (Ai[ga.NMR] = {
                    iconCloudinaryId: "crypto/bqecgq3rawel0k99tohj",
                }),
                (Ai[ga.OP] = {
                    iconCloudinaryId: "crypto/mg3ut47msiik6ote2vvy",
                }),
                (Ai[ga.OXT] = {
                    iconCloudinaryId: "crypto/ietkmjcp0yj71vlg0zjy",
                }),
                (Ai[ga.PAXG] = {
                    iconCloudinaryId: "crypto/yb5x1aizhhdn8mprrn2m",
                }),
                (Ai[ga.PEPE] = {
                    iconCloudinaryId: "crypto/li6d622yragqd5qktcel",
                }),
                (Ai[ga.PNUT] = {
                    iconCloudinaryId: "crypto/blutzmogx9bihtkcgvlh",
                }),
                (Ai[ga.POPCAT] = {
                    iconCloudinaryId: "crypto/kcu6of08mi1dpxk5dadu",
                }),
                (Ai[ga.QNT] = {
                    iconCloudinaryId: "crypto/dwdx02ifn9fsvbw1pgfz",
                }),
                (Ai[ga.QRDO] = {
                    iconCloudinaryId: "crypto/jzbmlpvwoogroaaazkxz",
                }),
                (Ai[ga.RARE] = {
                    iconCloudinaryId: "crypto/dau8mznijmzzcd6jdc6s",
                }),
                (Ai[ga.REN] = {
                    iconCloudinaryId: "crypto/ili8nkjwnifmbfra20ly",
                }),
                (Ai[ga.RNDR] = {
                    iconCloudinaryId: "crypto/tm0klwno0hqjbcxsuvrp",
                }),
                (Ai[ga.RLUSD] = { icon: ra }),
                (Ai[ga.SAND] = {
                    iconCloudinaryId: "crypto/w6g6ep4ghqpsz54vqzmy",
                }),
                (Ai[ga.SKL] = {
                    iconCloudinaryId: "crypto/zccvwa5yin8r32s4sfqy",
                }),
                (Ai[ga.SNX] = {
                    iconCloudinaryId: "crypto/sxvudvsjujuhdupwssvz",
                }),
                (Ai[ga.STORJ] = {
                    iconCloudinaryId: "crypto/le1ikh3apsrxyttjxg64",
                }),
                (Ai[ga.SUSHI] = {
                    iconCloudinaryId: "crypto/iivxx5mfdz1bckmhom1f",
                }),
                (Ai[ga.UMA] = {
                    iconCloudinaryId: "crypto/imxydvsf4mydmyjukbel",
                }),
                (Ai[ga.YFI] = {
                    iconCloudinaryId: "crypto/mal5muwn4fcsbuuyhohz",
                }),
                (Ai[ga.ZBC] = {
                    iconCloudinaryId: "crypto/hhiopvuac8qbpcnupgle",
                }),
                (Ai[ga.ZRX] = {
                    iconCloudinaryId: "crypto/ge5jqonw89ffg200z0in",
                }),
                (Ai[ga.CHILLGUY] = {
                    iconCloudinaryId: "crypto/j75hb0lxbsbapieemaye",
                }),
                (Ai[ga.FLOKI] = {
                    iconCloudinaryId: "crypto/rlxx86vydn8ccfxtm4vp",
                }),
                (Ai[ga.HNT] = {
                    iconCloudinaryId: "crypto/pet5gmpzfy2x2mhun0hn",
                }),
                (Ai[ga.POL] = {
                    iconCloudinaryId: "crypto/i1m8h4uzfijyjcfeeydg",
                }),
                (Ai[ga.PYTH] = {
                    iconCloudinaryId: "crypto/wyrrhmpb286mabrfuvm1",
                }),
                (Ai[ga.WIF] = {
                    iconCloudinaryId: "crypto/kbpw2ho4rnvleavinyxj",
                }),
                Ai),
            va = Object.fromEntries(
                Object.values(ga).map(function (e) {
                    return [e, pe({}, ha[e], ya[e])];
                }),
            ),
            _a = function (e) {
                var t = e.currency;
                return Object(rt.g)("img", {
                    src: ge(t),
                    alt: t + "_icon",
                    width: 24,
                    height: 24,
                });
            },
            Oa = function () {
                return (
                    Ii ||
                    (Ii = Object(rt.g)(
                        "svg",
                        {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className: "feather feather-search",
                        },
                        Object(rt.g)("circle", { cx: "11", cy: "11", r: "8" }),
                        Object(rt.g)("path", { d: "M21 21l-4.35-4.35" }),
                    ))
                );
            },
            Ca = new Set([ga.BTC, ga.ETH, ga.USDC]),
            ja = [],
            wa = [],
            Na = [];
        Object.values(ga).forEach(function (e) {
            var t,
                n = { value: (t = e), label: be(t), contractType: me(t) };
            ma.includes(e) || (ja.push(n), Ca.has(e) ? wa.push(n) : Na.push(n));
        });
        var ka,
            Ta,
            Sa,
            xa,
            Aa,
            Ia,
            Ea,
            Ra,
            Pa,
            Ma,
            La,
            Da,
            Ha,
            Ua,
            Ba,
            Fa,
            Ga,
            Xa,
            qa,
            Wa,
            za,
            Va,
            Ya,
            Ka,
            Za,
            Qa,
            $a,
            Ja,
            ec,
            tc,
            nc,
            rc,
            oc,
            ic,
            ac,
            cc,
            lc,
            uc,
            sc,
            dc,
            fc,
            pc,
            gc,
            bc,
            mc,
            hc,
            yc,
            vc,
            _c,
            Oc,
            Cc,
            jc,
            wc,
            Nc,
            kc,
            Tc,
            Sc,
            xc,
            Ac,
            Ic,
            Ec,
            Rc,
            Pc,
            Mc,
            Lc,
            Dc,
            Hc,
            Uc,
            Bc,
            Fc,
            Gc,
            Xc,
            qc,
            Wc,
            zc,
            Vc,
            Yc,
            Kc,
            Zc,
            Qc,
            $c,
            Jc,
            el,
            tl,
            nl,
            rl,
            ol,
            il,
            al,
            cl,
            ll,
            ul,
            sl,
            dl,
            fl,
            pl,
            gl,
            bl,
            ml,
            hl,
            yl,
            vl,
            _l = function (e) {
                var t = e.onClick,
                    n = e.option;
                return Object(rt.g)(
                    "li",
                    { key: n.value, role: "option" },
                    Object(rt.g)(
                        "button",
                        {
                            type: "button",
                            className: Jo,
                            onClick: function () {
                                t(n);
                            },
                        },
                        Object(rt.g)(_a, { currency: n.value }),
                        Object(rt.g)("span", null, n.label),
                        Object(rt.g)("span", null, n.contractType),
                    ),
                );
            },
            Ol = function () {
                var e = Fr(),
                    t = on().primaryColor,
                    n =
                        "Contents: I would like to make a crypto donation to support https://www.every.org/" +
                        e.primarySlug +
                        ".\n\nMy name:\nToken name:\nToken symbol:\nToken quantity:\n\nPlease reply back with an address where I can donate, as this is worth over $100,000 USD.";
                return Object(rt.g)(
                    "a",
                    {
                        className: Jr(t),
                        href: z({
                            address: mt,
                            subject: "Crypto donation for " + e.name,
                            body: n,
                        }),
                    },
                    mt,
                );
            },
            Cl = function () {
                var e = Gr(),
                    t = e.submitError,
                    n = e.cryptoCurrency,
                    r = e.setCryptoCurrency,
                    o = on().primaryColor,
                    i = h(null),
                    a = g(
                        ja.find(function (e) {
                            return e.value === n;
                        }),
                    ),
                    c = a[0],
                    l = a[1],
                    u = g(null == c ? void 0 : c.label),
                    s = u[0],
                    d = u[1],
                    f = g(!c),
                    p = f[0],
                    b = f[1],
                    m = function (e) {
                        (l(e), r(e.value), d(e.label), b(!1));
                    },
                    y = function () {
                        (l(void 0), r(void 0), b(!0), d(""));
                    },
                    v = Mr([Zo].concat(t ? [ci] : [], p ? [ti] : [])),
                    _ = function (e) {
                        return Object(rt.g)(_l, { option: e, onClick: m });
                    },
                    O = s
                        ? Object(Xo.filter)(s, ja, {
                              extract: function (e) {
                                  var t = ha[e.value];
                                  return [t.displayName, t.abbreviation].join(
                                      " ",
                                  );
                              },
                          }).map(function (e) {
                              return e.original;
                          })
                        : void 0;
                return Object(rt.g)(
                    "div",
                    { className: Yo },
                    Object(rt.g)(Ui, {
                        ref: i,
                        inputClassName: li,
                        containerOnClick: function () {
                            var e;
                            (null == (e = i.current) || e.focus(), y());
                        },
                        value: s,
                        prefix: c
                            ? Object(rt.g)(_a, { currency: c.value })
                            : Ei || (Ei = Object(rt.g)(Oa, null)),
                        prefixClassName: at({ display: "inline-flex" }),
                        sufixClassName: ei(o, p),
                        containerClassName: v,
                        sufix: Object(rt.g)(
                            rt.b,
                            null,
                            Object(rt.g)(
                                "span",
                                null,
                                null == c ? void 0 : c.contractType,
                            ),
                            " ",
                            Ri || (Ri = Object(rt.g)(Xr, null)),
                        ),
                        onInput: function (e) {
                            (d(e.currentTarget.value),
                                l(void 0),
                                r(void 0),
                                b(!0));
                        },
                        onFocus: y,
                    }),
                    p &&
                        Object(rt.g)(
                            "div",
                            { className: Ko },
                            Object(rt.g)(
                                "div",
                                { className: Qo },
                                O
                                    ? 0 === O.length
                                        ? Object(rt.g)(
                                              "div",
                                              {
                                                  className: at({
                                                      padding: "20px",
                                                  }),
                                              },
                                              "We don't currently support this coin on our site, but for donations worth over $100,000 USD we can do it manually. Please email ",
                                              Pi ||
                                                  (Pi = Object(rt.g)(Ol, null)),
                                              " to arrange.",
                                          )
                                        : Object(rt.g)(
                                              "ul",
                                              null,
                                              O.map(function (e) {
                                                  return _(e);
                                              }),
                                          )
                                    : Object(rt.g)(
                                          rt.b,
                                          null,
                                          Object(rt.g)(
                                              "ul",
                                              { className: $o },
                                              wa.map(function (e) {
                                                  return _(e);
                                              }),
                                          ),
                                          Object(rt.g)(
                                              "ul",
                                              null,
                                              Na.map(function (e) {
                                                  return _(e);
                                              }),
                                          ),
                                      ),
                            ),
                        ),
                );
            },
            jl =
                "data:image/svg+xml,%3Csvg width='72' height='72' viewBox='0 0 72 72' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath class='logoMask' stroke-dasharray='170px' d='M32.547 43C39.081 43 48 38.895 48 29.5C48 20.104 38.132 12.5 29.5 12.5C20.868 12.5 9 19.506 9 36C9 52.495 23.805 59.345 32.547 59.345C41.288 59.345 62.5 54.104 62.5 29.5' stroke='white' stroke-width='10'/%3E%3Canimate attributeType='XML' attributeName='stroke-dashoffset' from='170px' to='-170px' dur='1.25s' repeatCount='indefinite'/%3E%3C/svg%3E%0A",
            wl = at({
                display: "inline-block",
                verticalAlign: "middle",
                maskImage: 'url("' + jl + '")',
                "-webkit-mask-image": 'url("' + jl + '")',
                "-webkit-mask-size": "cover",
                maskSize: "cover",
            }),
            Nl = function (e) {
                var t;
                return at(
                    (((t = { fill: e })[dr.TabletLandscapeUp] = {
                        fill: fr.Gray,
                    }),
                    t),
                );
            },
            kl = function (e) {
                var t = e.size,
                    n = void 0 === t ? 72 : t,
                    r = on().primaryColor;
                return Object(rt.g)(
                    "svg",
                    {
                        width: n,
                        height: n,
                        viewBox: "0 0 72 72",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: wl,
                    },
                    Object(rt.g)("path", {
                        className: Nl(r),
                        d: "M51.147 28.97C51.147 17.614 41.667 9 29.493 9C15.875 9 5 20.5 5 34.744C5 50.094 17.223 62.365 33.68 62.365C50.137 62.365 64.862 49.325 66.017 32.242H58.51C57.114 45.042 46.287 54.859 33.68 54.859C21.553 54.859 12.555 45.956 12.555 34.744C12.555 24.639 20.062 16.507 29.493 16.507C37.385 16.507 43.593 21.897 43.593 28.97C43.593 34.84 39.358 39.749 33.728 39.749V47.256C43.688 47.256 51.148 38.931 51.148 28.97",
                    }),
                );
            },
            Tl = function () {
                return (
                    ka ||
                    (ka = Object(rt.g)(
                        "svg",
                        {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className: "feather feather-repeat",
                        },
                        Object(rt.g)("path", { d: "M17 1l4 4-4 4" }),
                        Object(rt.g)("path", {
                            d: "M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4",
                        }),
                        Object(rt.g)("path", { d: "M21 13v2a4 4 0 01-4 4H3" }),
                    ))
                );
            },
            Sl = function (e) {
                var t = e.cryptoTokenLoading,
                    n = e.cryptoTokenRate,
                    r = g(""),
                    o = r[0],
                    i = r[1],
                    a = Gr(),
                    c = a.cryptoAmount,
                    l = a.setCryptoAmount,
                    u = a.cryptoCurrency,
                    s = a.submitError,
                    d = on(),
                    f = Mr([ni(d.primaryColor)].concat(s ? [ci] : [])),
                    p = g(void 0),
                    b = p[0],
                    y = p[1],
                    _ = g(!0),
                    O = _[0],
                    C = _[1],
                    j = h(null);
                m(
                    function () {
                        u && j && j.current && j.current.focus();
                    },
                    [u],
                );
                var w = v(
                        function (e) {
                            var t = e && "" !== e ? new Go(e) : void 0;
                            if (O) {
                                var r, o;
                                (i(
                                    null !=
                                        (r = null == t ? void 0 : t.toString())
                                        ? r
                                        : "",
                                ),
                                    l(
                                        null !=
                                            (o =
                                                null == t
                                                    ? void 0
                                                    : t.toNumber())
                                            ? o
                                            : 0,
                                    ));
                            } else {
                                var a = t && n ? t.div(n).round(7) : new Go(0);
                                (i(a.toString()), l(a.toNumber()));
                            }
                        },
                        [l, O, n],
                    ),
                    N = n && c && new Go(c).times(n).round(2).toString();
                m(
                    function () {
                        if (b) {
                            var e = setTimeout(function () {
                                y(void 0);
                            }, 1e3);
                            return function () {
                                clearTimeout(e);
                            };
                        }
                    },
                    [b],
                );
                var k = v(
                        function (e) {
                            if ((y(void 0), "" === e)) return (w(""), !1);
                            y(void 0);
                            try {
                                var t = new Go(e);
                                if (t.lt(0)) return !1;
                                if (t.gt(Number.MAX_SAFE_INTEGER))
                                    return (y("Amount is too large"), !1);
                            } catch (e) {
                                return !1;
                            }
                            return (w(e), !0);
                        },
                        [w],
                    ),
                    T = 0 === n;
                return Object(rt.g)(
                    "div",
                    { className: f },
                    Object(rt.g)(
                        "div",
                        { className: ri },
                        Object(rt.g)(
                            "div",
                            { className: oi },
                            Object(rt.g)("input", {
                                ref: j,
                                className: Vo,
                                value: O ? o : null != N ? N : "",
                                type: "text",
                                pattern: "[+-]?(\\d*\\.)?\\d+",
                                name: "donateAmountInput",
                                id: "donateAmountInput",
                                inputMode: "decimal",
                                onChange: function (e) {
                                    return k(e.currentTarget.value);
                                },
                            }),
                            !T &&
                                Object(rt.g)(
                                    "div",
                                    { className: at({ color: fr.TextGray }) },
                                    null === n && t
                                        ? Ta ||
                                              (Ta = Object(rt.g)(kl, {
                                                  size: 16,
                                              }))
                                        : O
                                          ? he(null != N ? N : 0, "USD", {
                                                showCurrency: !1,
                                            })
                                          : null != c
                                            ? c
                                            : 0,
                                ),
                        ),
                        Object(rt.g)(
                            "div",
                            { className: ii },
                            Object(rt.g)("div", null, O ? u : "USD"),
                            !T &&
                                Object(rt.g)(
                                    "div",
                                    { className: at({ color: fr.TextGray }) },
                                    O ? "USD" : u,
                                    "*",
                                ),
                        ),
                    ),
                    !T &&
                        Object(rt.g)(
                            "button",
                            {
                                className: ai,
                                type: "button",
                                disabled: void 0 === n,
                                onClick: function () {
                                    C(!O);
                                },
                            },
                            Sa || (Sa = Object(rt.g)(Tl, null)),
                        ),
                );
            },
            xl = function () {
                return (
                    xa ||
                    (xa = Object(rt.g)(
                        "svg",
                        {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                        },
                        Object(rt.g)("path", {
                            d: "M14.9384 5.2052C15.6282 4.34238 16.0964 3.18386 15.9729 2C14.9631 2.05021 13.7308 2.6662 13.0174 3.5297C12.3768 4.26915 11.8098 5.47617 11.9576 6.61041C13.0912 6.70874 14.2237 6.04381 14.9384 5.2052Z",
                            fill: "#2E3434",
                        }),
                        Object(rt.g)("path", {
                            d: "M15.9595 6.83176C14.3133 6.73371 12.9136 7.76606 12.1275 7.76606C11.3409 7.76606 10.1371 6.88118 8.83501 6.90503C7.14031 6.92992 5.56781 7.88812 4.70782 9.41211C2.93897 12.4608 4.24102 16.9832 5.96114 19.4662C6.79647 20.6946 7.80318 22.0472 9.12968 21.9986C10.383 21.9494 10.8743 21.1871 12.3977 21.1871C13.9201 21.1871 14.3626 21.9986 15.6893 21.974C17.0651 21.9494 17.9253 20.745 18.7606 19.5154C19.7189 18.115 20.1111 16.7629 20.1358 16.6887C20.1111 16.6641 17.4828 15.6558 17.4584 12.6324C17.4336 10.1009 19.522 8.89672 19.6203 8.82205C18.441 7.07785 16.5983 6.88118 15.9595 6.83176Z",
                            fill: "#2E3434",
                        }),
                    ))
                );
            },
            Al = function (e) {
                var t = e.className,
                    n = on().primaryColor;
                return Object(rt.g)(
                    "svg",
                    {
                        className: t,
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                    },
                    Object(rt.g)("path", {
                        d: "M20 12v10H4V12M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 110-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z",
                        stroke: n,
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                    }),
                );
            },
            Il = function () {
                return (
                    Ia ||
                    (Ia = Object(rt.g)(
                        "svg",
                        {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                        },
                        Object(rt.g)("path", {
                            d: "M22 12.2296C22 11.5499 21.9438 10.8665 21.8238 10.1978H12.2013V14.0483H17.7117C17.483 15.2902 16.7483 16.3887 15.6725 17.0868V19.5853H18.9599C20.8904 17.8437 22 15.2718 22 12.2296Z",
                            fill: "#4285F4",
                        }),
                        Object(rt.g)("path", {
                            d: "M12.2013 21.9998C14.9528 21.9998 17.2731 21.1143 18.9637 19.5859L15.6762 17.0874C14.7616 17.6974 13.5808 18.0427 12.2051 18.0427C9.5436 18.0427 7.28697 16.2828 6.47728 13.9166H3.08484V16.4922C4.81667 19.8688 8.34406 21.9998 12.2013 21.9998Z",
                            fill: "#34A853",
                        }),
                        Object(rt.g)("path", {
                            d: "M6.4739 13.9165C6.04657 12.6747 6.04657 11.3299 6.4739 10.088V7.51245H3.08521C1.63826 10.3379 1.63826 13.6667 3.08521 16.4921L6.4739 13.9165Z",
                            fill: "#FBBC04",
                        }),
                        Object(rt.g)("path", {
                            d: "M12.2013 5.95801C13.6558 5.93596 15.0615 6.47239 16.1148 7.45707L19.0274 4.60224C17.1832 2.90477 14.7353 1.97152 12.2013 2.00092C8.34406 2.00092 4.81667 4.13194 3.08484 7.51218L6.47353 10.0878C7.27947 7.71794 9.53985 5.95801 12.2013 5.95801Z",
                            fill: "#EA4335",
                        }),
                    ))
                );
            },
            El =
                (((Pa = {})[It.CREDIT_CARD] = Object(rt.g)(function () {
                    var e = on().primaryColor;
                    return Object(rt.g)(
                        "svg",
                        {
                            width: "24",
                            height: "25",
                            viewBox: "0 0 24 25",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                        },
                        Object(rt.g)("path", {
                            d: "M21 4.74316H3C1.89543 4.74316 1 5.63859 1 6.74316V18.7432C1 19.8477 1.89543 20.7432 3 20.7432H21C22.1046 20.7432 23 19.8477 23 18.7432V6.74316C23 5.63859 22.1046 4.74316 21 4.74316Z",
                            stroke: e,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                        }),
                        Object(rt.g)("path", {
                            d: "M1 10.7432H23",
                            stroke: e,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                        }),
                    );
                }, null)),
                (Pa[It.BANK] = Object(rt.g)(function () {
                    var e = on().primaryColor;
                    return Object(rt.g)(
                        "svg",
                        {
                            width: "24",
                            height: "25",
                            viewBox: "0 0 24 25",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                        },
                        Object(rt.g)("path", {
                            d: "M4 8.74348V19.2435M7 19.2435V8.74348M16 8.74348V19.2435M19 19.2435V8.74348M3.5 22.7435H19.5C20.33 22.7435 21 22.7435 21 21.2435C21 19.7435 20.33 19.7435 19.5 19.7435H3.5C2.67 19.7435 2 19.7435 2 21.2435C2 22.7435 2.67 22.7435 3.5 22.7435ZM10.57 2.23348L2.67 6.39348C2.26 6.60348 2 7.03348 2 7.49348C2 8.18348 2.56 8.74348 3.25 8.74348H19.76C20.44 8.74348 21 8.18348 21 7.49348C21 7.03348 20.74 6.60348 20.33 6.39348L12.43 2.23348C11.85 1.92348 11.15 1.92348 10.57 2.23348Z",
                            stroke: e,
                            strokeWidth: "2",
                        }),
                    );
                }, null)),
                (Pa[It.PAYPAL] = Object(rt.g)(function () {
                    return (
                        Ea ||
                        (Ea = Object(rt.g)(
                            "svg",
                            {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                            },
                            Object(rt.g)("path", {
                                d: "M8.78495 22.0251L9.12912 19.7433L8.36247 19.7248H4.70166L7.24574 2.88757C7.25331 2.83613 7.27835 2.78924 7.31628 2.75545C7.3542 2.72166 7.4025 2.70322 7.45237 2.70349H13.625C15.6742 2.70349 17.0884 3.14858 17.8268 4.02709C18.1729 4.43921 18.3934 4.86988 18.5 5.34382C18.6118 5.84111 18.6138 6.43525 18.5046 7.1599L18.4967 7.21278V7.67711L18.8428 7.88179C19.1071 8.02153 19.3446 8.21056 19.5436 8.43953C19.8398 8.79189 20.0313 9.23973 20.1122 9.77068C20.1958 10.3167 20.1682 10.9665 20.0313 11.7022C19.8733 12.5484 19.618 13.2854 19.2732 13.8885C18.9689 14.4287 18.5599 14.8966 18.0722 15.2622C17.6142 15.6015 17.07 15.8591 16.4547 16.0239C15.8585 16.186 15.1787 16.2678 14.4331 16.2678H13.9527C13.6092 16.2678 13.2756 16.3969 13.0137 16.6284C12.7521 16.8623 12.5786 17.1856 12.5241 17.5405L12.4879 17.7459L11.8798 21.7675L11.8522 21.9152C11.845 21.9619 11.8324 21.9853 11.814 22.0011C11.7962 22.0163 11.7739 22.0248 11.7508 22.0251H8.78495Z",
                                fill: "#253B80",
                            }),
                            Object(rt.g)("path", {
                                d: "M19.1713 7.26611C19.1528 7.38906 19.1318 7.51476 19.1081 7.64389C18.2941 12.0062 15.5091 13.5132 11.9523 13.5132H10.1413C9.70633 13.5132 9.33979 13.8429 9.27201 14.2907L8.3448 20.4286L8.08223 22.1684C8.07177 22.2374 8.07576 22.308 8.09393 22.3752C8.1121 22.4425 8.14402 22.5048 8.18749 22.558C8.23096 22.6111 8.28494 22.6538 8.34572 22.683C8.4065 22.7123 8.47264 22.7275 8.53958 22.7275H11.7516C12.132 22.7275 12.4551 22.439 12.515 22.0475L12.5465 21.8772L13.1513 17.8714L13.1901 17.6516C13.2494 17.2587 13.5731 16.9702 13.9535 16.9702H14.4339C17.5459 16.9702 19.982 15.6514 20.694 11.8352C20.9915 10.2409 20.8375 8.90979 20.0504 7.97359C19.801 7.68398 19.5031 7.44424 19.1713 7.26611Z",
                                fill: "#179BD7",
                            }),
                            Object(rt.g)("path", {
                                d: "M18.3102 6.91227C18.0503 6.83379 17.7858 6.77254 17.5185 6.72888C16.9903 6.64415 16.4565 6.60349 15.9221 6.6073H11.084C10.8998 6.60715 10.7218 6.67576 10.5819 6.80073C10.442 6.9257 10.3496 7.09877 10.3213 7.28867L9.29206 14.0928L9.26245 14.2913C9.29451 14.0747 9.39979 13.8772 9.55924 13.7346C9.71869 13.592 9.92177 13.5136 10.1318 13.5138H11.9427C15.4996 13.5138 18.2845 12.0061 19.0985 7.64447C19.1229 7.51534 19.1433 7.38964 19.1617 7.26669C18.9469 7.14912 18.723 7.05055 18.4925 6.97203C18.432 6.95109 18.3712 6.93117 18.3102 6.91227Z",
                                fill: "#222D65",
                            }),
                            Object(rt.g)("path", {
                                d: "M10.3267 7.2882C10.3547 7.09825 10.4471 6.92509 10.5871 6.80018C10.727 6.67528 10.9053 6.60692 11.0894 6.60752H15.9275C16.5007 6.60752 17.0357 6.64667 17.5239 6.72909C17.8544 6.78329 18.1802 6.86436 18.4985 6.97156C18.7387 7.05467 18.9618 7.15289 19.1678 7.26622C19.41 5.65414 19.1658 4.55653 18.3307 3.56263C17.4101 2.46844 15.7485 2 13.6223 2H7.44964C7.01531 2 6.64482 2.3297 6.5777 2.77822L4.00664 19.7885C3.99467 19.8675 3.99922 19.9482 4.02 20.0252C4.04077 20.1022 4.07727 20.1735 4.12699 20.2344C4.1767 20.2952 4.23845 20.3441 4.30799 20.3776C4.37753 20.4112 4.4532 20.4286 4.5298 20.4287H8.34066L9.29748 14.0923L10.3267 7.2882Z",
                                fill: "#253B80",
                            }),
                        ))
                    );
                }, null)),
                (Pa[It.VENMO] = Object(rt.g)(function () {
                    return (
                        Ra ||
                        (Ra = Object(rt.g)(
                            "svg",
                            {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                            },
                            Object(rt.g)("path", {
                                d: "M20.0439 2.17969C20.7029 3.32032 21 4.49518 21 5.97926C21 10.7127 17.1441 16.8618 14.0147 21.1797H6.86672L4 3.21606L10.2588 2.59335L11.7745 15.3756C13.1907 12.9578 14.9383 9.15825 14.9383 6.56776C14.9383 5.14981 14.7065 4.184 14.3443 3.38876L20.0439 2.17969Z",
                                fill: "#3D95CE",
                            }),
                        ))
                    );
                }, null)),
                (Pa[It.CRYPTO] = Object(rt.g)(function () {
                    var e = on().primaryColor;
                    return Object(rt.g)(
                        "svg",
                        {
                            width: "24",
                            height: "25",
                            viewBox: "0 0 24 25",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                        },
                        Object(rt.g)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 7.74316C4.23858 7.74316 2 9.98174 2 12.7432C2 15.5046 4.23858 17.7432 7 17.7432C9.76142 17.7432 12 15.5046 12 12.7432C12 9.98174 9.76142 7.74316 7 7.74316ZM0 12.7432C0 8.87717 3.13401 5.74316 7 5.74316C10.866 5.74316 14 8.87717 14 12.7432C14 16.6092 10.866 19.7432 7 19.7432C3.13401 19.7432 0 16.6092 0 12.7432Z",
                            fill: e,
                        }),
                        Object(rt.g)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.1577 9.96518C11.5898 10.6788 11.9998 11.762 11.9998 12.7432C11.9998 13.7243 11.5898 14.8076 11.1577 15.5212C11.6896 14.7266 11.9998 13.7711 11.9998 12.7432C11.9998 11.7152 11.6896 10.7597 11.1577 9.96518ZM11.9999 7.84425C12.4759 8.32999 12.8816 8.88479 13.2007 9.49223C14.1189 8.42024 15.4804 7.74316 16.9998 7.74316C19.7613 7.74316 21.9998 9.98174 21.9998 12.7432C21.9998 15.5046 19.7613 17.7432 16.9998 17.7432C15.4804 17.7432 14.1189 17.0661 13.2007 15.9941C12.8816 16.6015 12.4759 17.1563 11.9999 17.6421C13.2696 18.9376 15.0405 19.7432 16.9998 19.7432C20.8658 19.7432 23.9998 16.6092 23.9998 12.7432C23.9998 8.87717 20.8658 5.74316 16.9998 5.74316C15.0405 5.74316 13.2696 6.5487 11.9999 7.84425Z",
                            fill: e,
                        }),
                    );
                }, null)),
                (Pa[It.STOCKS] = Object(rt.g)(function () {
                    var e = on().primaryColor;
                    return Object(rt.g)(
                        "svg",
                        {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            display: "ACCENT",
                        },
                        Object(rt.g)("path", {
                            d: "M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z",
                            stroke: e,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                        }),
                        Object(rt.g)("path", {
                            d: "M4.5 16.5L6 14l5 1 2.5-2h3l3-5.5",
                            stroke: e,
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                        }),
                    );
                }, null)),
                (Pa[It.DAF] = Object(rt.g)(function () {
                    return (
                        Aa ||
                        (Aa = Object(rt.g)(
                            "svg",
                            {
                                width: "27",
                                height: "23",
                                viewBox: "0 0 37 33",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                            },
                            Object(rt.g)("path", {
                                d: "M7.056 31.772V24.45C7.056 23.554 7.028 22.784 7 22.154H8.848L8.946 23.106H8.974C9.478 22.378 10.262 22 11.256 22C12.754 22 14.098 23.302 14.098 25.486C14.098 27.978 12.516 29.154 10.99 29.154C10.164 29.154 9.52 28.818 9.212 28.37H9.184V31.772H7.056ZM9.184 25.122V26.06C9.184 26.228 9.198 26.382 9.226 26.508C9.366 27.082 9.856 27.516 10.472 27.516C11.396 27.516 11.942 26.746 11.942 25.584C11.942 24.492 11.452 23.666 10.5 23.666C9.898 23.666 9.366 24.114 9.226 24.744C9.198 24.856 9.184 24.996 9.184 25.122ZM21.0932 29H19.1752L19.0492 28.314H19.0072C18.5592 28.86 17.8592 29.154 17.0472 29.154C15.6612 29.154 14.8352 28.146 14.8352 27.054C14.8352 25.276 16.4312 24.422 18.8532 24.436V24.338C18.8532 23.974 18.6572 23.456 17.6072 23.456C16.9072 23.456 16.1652 23.694 15.7172 23.974L15.3252 22.602C15.8012 22.336 16.7392 22 17.9852 22C20.2672 22 20.9952 23.344 20.9952 24.954V27.334C20.9952 27.992 21.0232 28.622 21.0932 29ZM18.9232 26.508V25.766C17.8032 25.752 16.9352 26.018 16.9352 26.844C16.9352 27.39 17.2992 27.656 17.7752 27.656C18.3072 27.656 18.7412 27.306 18.8812 26.872C18.9092 26.76 18.9232 26.634 18.9232 26.508ZM21.6056 22.154H23.9716L24.9936 25.514C25.1056 25.92 25.2456 26.424 25.3296 26.788H25.3716C25.4696 26.424 25.5816 25.906 25.6796 25.514L26.5196 22.154H28.8016L27.2056 26.662C26.2256 29.378 25.5676 30.47 24.7976 31.156C24.0556 31.8 23.2716 32.024 22.7396 32.094L22.2916 30.288C22.5576 30.246 22.8936 30.12 23.2156 29.924C23.5376 29.756 23.8876 29.42 24.0976 29.07C24.1676 28.972 24.2096 28.86 24.2096 28.762C24.2096 28.692 24.1956 28.58 24.1116 28.412L21.6056 22.154Z",
                                fill: "#35BBF4",
                            }),
                            Object(rt.g)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M4 0C1.79086 0 0 1.79086 0 4V15C0 17.2091 1.79086 19 4 19H32.4127C34.6218 19 36.4127 17.2091 36.4127 15V4C36.4127 1.79086 34.6218 0 32.4127 0H4ZM4.50829 4.36V14.952C5.11629 15.032 6.01229 15.112 7.27629 15.112C9.38829 15.112 11.1163 14.664 12.2523 13.72C13.2923 12.84 14.0443 11.416 14.0443 9.352C14.0443 7.448 13.3403 6.12 12.2203 5.288C11.1803 4.504 9.85229 4.136 7.80429 4.136C6.57229 4.136 5.40429 4.216 4.50829 4.36ZM6.95629 13.16V6.104C7.16429 6.056 7.51629 6.008 8.06029 6.008C10.1563 6.008 11.4683 7.192 11.4523 9.432C11.4523 12.008 10.0123 13.224 7.80429 13.208C7.50029 13.208 7.16429 13.208 6.95629 13.16ZM17.7509 12.232H20.8389L21.6709 15H24.2949L20.9509 4.216H17.7509L14.4549 15H16.9829L17.7509 12.232ZM20.4869 10.408H18.1029L18.7429 8.12C18.8484 7.74614 18.9481 7.30336 19.0455 6.8708C19.1106 6.58139 19.1748 6.29655 19.2389 6.04H19.2709C19.2969 6.14386 19.3237 6.25193 19.3512 6.36285C19.4932 6.93544 19.6541 7.58386 19.8149 8.12L20.4869 10.408ZM25.5789 4.216V15H28.0269V10.664H31.8989V8.68H28.0269V6.216H32.1709V4.216H25.5789Z",
                                fill: "#35BBF4",
                            }),
                        ))
                    );
                }, null)),
                (Pa[It.GIFT_CARD] = Object(rt.g)(Al, null)),
                Pa),
            Rl = function (e) {
                return (function (e, t) {
                    return e === It.PAYMENT_REQUEST
                        ? t.applePay
                            ? Ma || (Ma = Object(rt.g)(xl, null))
                            : La || (La = Object(rt.g)(Il, null))
                        : El[e];
                })(e.method, Gr().paymentRequestAvailable);
            },
            Pl =
                (((Da = {})[It.CREDIT_CARD] = "Card"),
                (Da[It.BANK] = "Bank"),
                (Da[It.PAYPAL] = "PayPal"),
                (Da[It.VENMO] = "Venmo"),
                (Da[It.GIFT_CARD] = "Gift card"),
                (Da[It.CRYPTO] = "Crypto"),
                (Da[It.STOCKS] = "Stocks"),
                (Da[It.DAF] = "DAF"),
                Da),
            Ml = function (e) {
                var t = (function (e, t) {
                    return e === It.PAYMENT_REQUEST
                        ? t.applePay
                            ? "Apple Pay"
                            : "Google Pay"
                        : Pl[e];
                })(e.method, Gr().paymentRequestAvailable);
                return Object(rt.g)("span", { className: at(ye({}, hr)) }, t);
            },
            Ll = at(
                (((Ha = { padding: vr.XL + " " + vr.XL + " 0px" })[
                    dr.TabletLandscapeUp
                ] = { padding: "0px" }),
                Ha),
            ),
            Dl = at({
                border: "none",
                padding: 0,
                margin: 0,
                fontSize: "100%",
                font: "inherit",
                verticalAlign: "baseline",
            }),
            Hl = at(ve({ fontWeight: 700 }, hr, { marginBottom: vr.S })),
            Ul = at(ve({ fontWeight: 700 }, br)),
            Bl = at(ve({ fontWeight: 700 }, gr)),
            Fl = at(
                ve(
                    {},
                    jr(vr.XL),
                    (((Ua = { padding: "0px" })[dr.TabletLandscapeUp] = {
                        gridColumn: "2/3",
                        padding: vr.XXL,
                    }),
                    Ua),
                ),
            ),
            Gl = function (e) {
                var t = e.fixedAmount;
                return at(
                    e.horizontal
                        ? {
                              display: "grid",
                              gridTemplateColumns: "1fr 1fr",
                              gridColumnGap: vr.L,
                          }
                        : ve(
                              {},
                              jr(vr.XL),
                              t
                                  ? {
                                        "> fieldset:last-child": {
                                            alignSelf: "center",
                                        },
                                    }
                                  : {},
                          ),
                );
            },
            Xl = at(
                (((Ba = { display: "grid", gridTemplateColumns: "1fr" })[
                    dr.TabletLandscapeUp
                ] = {
                    gridAutoFlow: "column",
                    gridTemplateColumns: "auto 1fr",
                }),
                Ba),
            ),
            ql = at(
                (((Fa = {
                    height: "100%",
                    width: "100%",
                    minWidth: "170px",
                    flexGrow: 1,
                    backgroundColor: fr.LightGray,
                    display: "none",
                })[dr.TabletLandscapeUp] = _e({}, jr(0))),
                Fa),
            ),
            Wl = Mr([
                Dl,
                at(
                    ((Ga = { marginBottom: vr.S, display: "block" }),
                    (Ga[dr.TabletLandscapeUp] = { display: "none" }),
                    Ga),
                ),
            ]),
            zl = at({
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridGap: vr.S,
            }),
            Vl = _e({}, wr(vr.XS), {
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
                background: "transparent",
            }),
            Yl = function (e) {
                return at(
                    _e(
                        {},
                        Vl,
                        {
                            border: "none",
                            padding: vr.M,
                            ":hover": {
                                cursor: "pointer",
                                background: fr.Gray,
                            },
                        },
                        e
                            ? {
                                  background: "white",
                                  fontWeight: 700,
                                  ":hover": { background: "white" },
                              }
                            : {},
                    ),
                );
            },
            Kl = function (e, t) {
                return at(
                    _e(
                        {},
                        Vl,
                        {
                            border: "1px solid " + fr.DarkGray,
                            background: "transparent",
                            textAlign: "start",
                            padding: vr.XXS + " " + vr.S,
                            borderRadius: fo.Default,
                            ":hover": {
                                cursor: "pointer",
                                background: fr.Gray,
                            },
                            "& > svg": { width: "20px", height: "20px" },
                        },
                        e
                            ? {
                                  background: t,
                                  border: "1px solid " + t,
                                  fontWeight: 700,
                                  color: "white",
                                  "& > svg": {
                                      filter: "brightness(0) invert(1)",
                                      width: "20px",
                                      height: "20px",
                                  },
                                  ":hover": { background: t },
                              }
                            : {},
                    ),
                );
            },
            Zl = function (e) {
                return at({
                    background: "transparent",
                    border: "none",
                    color: e,
                    cursor: "pointer",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: yr.fontSize,
                    lineHeight: yr.lineHeight,
                    padding: 0,
                    textAlign: "center",
                    margin: vr.S + " auto 0",
                    width: "100%",
                });
            },
            Ql = function () {
                var e = on(),
                    t = e.methods,
                    n = e.frequency,
                    r = e.previewMode,
                    o = Gr().paymentRequestAvailable,
                    i = Fr();
                return y(
                    function () {
                        return t
                            .filter(function (e) {
                                var t;
                                return (
                                    (null == i ||
                                        null == (t = i.metadata) ||
                                        null ==
                                            (t =
                                                t.disabledPaymentFlowOptions) ||
                                        !t.includes(e)) &&
                                    (n !== st.Monthly || !Et.includes(e)) &&
                                    (e !== It.PAYMENT_REQUEST ||
                                        !!r ||
                                        o.applePay ||
                                        o.googlePay)
                                );
                            })
                            .sort(function (e, t) {
                                return Mt.indexOf(e) - Mt.indexOf(t);
                            });
                    },
                    [t, n, o, r],
                );
            },
            $l = function (e) {
                var t = on().primaryColor,
                    n = e.small ? Kl : Yl;
                return Object(rt.g)(
                    "button",
                    {
                        type: "button",
                        className: n(e.selected, t),
                        onClick: e.onClick,
                    },
                    e.icon,
                    "string" == typeof e.label
                        ? Object(rt.g)(
                              "span",
                              { className: at(Oe({}, hr)) },
                              e.label,
                          )
                        : e.label,
                );
            },
            Jl = function () {
                var e = Gr(),
                    t = e.selectedPaymentMethod,
                    n = e.setSelectedPaymentMethod,
                    r = e.subMethod,
                    o = e.setSubMethod;
                return Object(rt.g)(
                    rt.b,
                    null,
                    Object(rt.g)(
                        "li",
                        null,
                        Object(rt.g)($l, {
                            selected: t === It.PAYMENT_REQUEST && "apple" === r,
                            icon: Xa || (Xa = Object(rt.g)(xl, null)),
                            label: "Apple Pay",
                            onClick: function () {
                                (n(It.PAYMENT_REQUEST), o("apple"));
                            },
                        }),
                    ),
                    Object(rt.g)(
                        "li",
                        null,
                        Object(rt.g)($l, {
                            selected:
                                t === It.PAYMENT_REQUEST && "google" === r,
                            icon: qa || (qa = Object(rt.g)(Il, null)),
                            label: "Google Pay",
                            onClick: function () {
                                (n(It.PAYMENT_REQUEST), o("google"));
                            },
                        }),
                    ),
                );
            },
            eu = function (e) {
                var t = Gr(),
                    n = t.selectedPaymentMethod,
                    r = t.setSelectedPaymentMethod;
                return on().previewMode && e.method === It.PAYMENT_REQUEST
                    ? Wa || (Wa = Object(rt.g)(Jl, null))
                    : Object(rt.g)(
                          "li",
                          null,
                          Object(rt.g)($l, {
                              small: e.small,
                              selected: e.method === n,
                              icon: Object(rt.g)(Rl, { method: e.method }),
                              label: Object(rt.g)(Ml, { method: e.method }),
                              onClick: function () {
                                  r(e.method);
                              },
                          }),
                      );
            },
            tu = function () {
                var e = Ql();
                return 1 === e.length
                    ? null
                    : Object(rt.g)(
                          "ul",
                          { className: ql },
                          e.map(function (e) {
                              return Object(rt.g)(eu, { key: e, method: e });
                          }),
                      );
            },
            nu = function () {
                var e = Ql(),
                    t = on().primaryColor,
                    n = g(!1),
                    r = n[0],
                    o = n[1];
                return 1 === e.length
                    ? null
                    : Object(rt.g)(
                          "fieldset",
                          { className: Wl },
                          za ||
                              (za = Object(rt.g)(
                                  "legend",
                                  { className: Hl },
                                  "Payment method",
                              )),
                          Object(rt.g)(
                              "ul",
                              { className: zl },
                              e.slice(0, 4).map(function (e) {
                                  return Object(rt.g)(eu, {
                                      key: e,
                                      small: !0,
                                      method: e,
                                  });
                              }),
                              r &&
                                  e.slice(4).map(function (e) {
                                      return Object(rt.g)(eu, {
                                          key: e,
                                          small: !0,
                                          method: e,
                                      });
                                  }),
                          ),
                          !r &&
                              Object(rt.g)(
                                  "button",
                                  {
                                      type: "button",
                                      className: Zl(t),
                                      onClick: function () {
                                          o(!0);
                                      },
                                  },
                                  "More options",
                              ),
                      );
            },
            ru = at({
                border: 0,
                clip: "rect(0 0 0 0)",
                clipPath: "inset(50%)",
                height: "1px",
                margin: "-1px",
                overflow: "hidden",
                padding: "0",
                position: "absolute",
                whiteSpace: "nowrap",
                width: "1px",
            }),
            ou = function (e) {
                var t = e.checked,
                    n = e.primaryColor;
                return at(
                    Ce(
                        {
                            cursor: "pointer",
                            width: "24px",
                            minWidth: "24px",
                            height: "24px",
                            display: "flex",
                            borderRadius: "4px",
                            justifyContent: "center",
                            alignItems: "center",
                            border: "1.5px solid " + (t ? n : fr.DarkGray),
                        },
                        t ? { background: n } : {},
                    ),
                );
            },
            iu = at({
                width: "16px",
                height: "16px",
                "& > path": { stroke: "white", strokeWidth: "2px" },
            }),
            au = at({ cursor: "pointer" }),
            cu = at({ display: "flex", alignItems: "center", gap: vr.XS }),
            lu = function (e) {
                var t = e.className;
                return Object(rt.g)(
                    "svg",
                    {
                        fill: "none",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: t,
                    },
                    Va ||
                        (Va = Object(rt.g)("path", {
                            d: "M20 6L9 17l-5-5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                        })),
                );
            },
            uu = ["children", "checked", "className"],
            su = function (e) {
                var t = e.children,
                    n = e.checked,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            o = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++)
                            t.indexOf((n = i[r])) >= 0 || (o[n] = e[n]);
                        return o;
                    })(e, uu),
                    o = on().primaryColor;
                return Object(rt.g)(
                    "label",
                    { className: cu },
                    Object(rt.g)(
                        "div",
                        null,
                        Object(rt.g)(
                            "input",
                            je(
                                {
                                    className: ru,
                                    type: "checkbox",
                                    defaultChecked: n,
                                    role: "checkbox",
                                },
                                r,
                            ),
                        ),
                        Object(rt.g)(
                            "div",
                            {
                                className: ou({
                                    checked: Boolean(n),
                                    primaryColor: o,
                                }),
                            },
                            n &&
                                (Ya ||
                                    (Ya = Object(rt.g)(lu, { className: iu }))),
                        ),
                    ),
                    Object(rt.g)("span", { className: au }, t),
                );
            },
            du = function () {
                var e,
                    t = Fr(),
                    n =
                        t.hasAdmin &&
                        !(null != (e = t.metadata) && e.disablePrivateNotes),
                    r = Gr(),
                    o = r.privateNote,
                    i = r.setPrivateNote,
                    a = g(Boolean(o)),
                    c = a[0],
                    l = a[1];
                return n
                    ? Object(rt.g)(
                          "div",
                          { className: Cr(vr.L) },
                          Object(rt.g)(
                              su,
                              {
                                  checked: c,
                                  onChange: function () {
                                      l(function (e) {
                                          return !e;
                                      });
                                  },
                              },
                              "Add note for ",
                              t.name,
                          ),
                          c &&
                              Object(rt.g)(
                                  "fieldset",
                                  {
                                      className: at(
                                          we({ fieldSetCss: Dl }, jr(vr.XS)),
                                      ),
                                  },
                                  Ka ||
                                      (Ka = Object(rt.g)(
                                          "legend",
                                          { className: Hl },
                                          "Private note",
                                      )),
                                  Object(rt.g)(Li, {
                                      rows: 3,
                                      label: "Note",
                                      id: "privateNote",
                                      value: o,
                                      inputClassName: at({ resize: "none" }),
                                      onChange: function (e) {
                                          i(e.currentTarget.value);
                                      },
                                  }),
                              ),
                      )
                    : null;
            },
            fu = function () {
                var e = Fr(),
                    t = Gr(),
                    n = t.publicTestimony,
                    r = t.setPublicTestimony,
                    o = g(Boolean(n)),
                    i = o[0],
                    a = o[1];
                return Object(rt.g)(
                    "div",
                    { className: Cr(vr.L) },
                    Object(rt.g)(
                        su,
                        {
                            checked: i,
                            onChange: function () {
                                a(function (e) {
                                    return !e;
                                });
                            },
                        },
                        "Add public testimony",
                    ),
                    i &&
                        Object(rt.g)(
                            "fieldset",
                            {
                                className: at(
                                    Ne({ fieldSetCss: Dl }, jr(vr.XS)),
                                ),
                            },
                            Object(rt.g)(
                                "legend",
                                { className: Hl },
                                "Help ",
                                e.name,
                                " by sharing why you support them with the world",
                            ),
                            Object(rt.g)(Li, {
                                rows: 3,
                                label: "Note",
                                id: "publicTestimony",
                                value: n,
                                inputClassName: at({ resize: "none" }),
                                onChange: function (e) {
                                    r(e.currentTarget.value);
                                },
                            }),
                        ),
                );
            },
            pu = at({ width: "100%", textAlign: "center" }),
            gu = at(
                ke(
                    {},
                    {
                        fontSize: "12px",
                        lineHeight: "16px",
                        letterSpacing: "0.01em",
                    },
                    { color: fr.TextOpaque },
                ),
            ),
            bu = function () {
                var e,
                    t = on().primaryColor;
                return Object(rt.g)(
                    "div",
                    { className: pu },
                    Object(rt.g)(
                        "span",
                        { className: gu },
                        "Every.org will accept your donation.",
                        " ",
                        Object(rt.g)(
                            "a",
                            {
                                href: Ot,
                                target: "_blank",
                                rel: "noreferrer",
                                className:
                                    ((e = t),
                                    at({
                                        color: e,
                                        textDecoration: "none",
                                        cursor: "pointer",
                                    })),
                            },
                            "Learn More",
                        ),
                    ),
                );
            },
            mu = at(
                Te({}, pr, {
                    outline: "none",
                    width: "100%",
                    border: "none",
                    fontFamily: "inherit",
                    cursor: "pointer",
                    borderRadius: fo.Big,
                    height: "52px",
                    fontWeight: 700,
                    padding: vr.XXS,
                    transition: "opacity .3s",
                }),
            ),
            hu = function (e) {
                return at({
                    color: fr.White,
                    backgroundColor: e,
                    ":hover": { opacity: 0.9 },
                });
            },
            yu = at({
                color: fr.White,
                backgroundColor: fr.DarkGray,
                cursor: "default",
                "& > span": { opacity: "0.6" },
            }),
            vu = at({ cursor: "not-allowed" }),
            _u = function (e) {
                var t = e.handleClick,
                    n = e.disabled,
                    r = e.children,
                    o = on(),
                    i = o.primaryColor;
                return o.previewMode
                    ? Object(rt.g)(Ou, { disabled: n })
                    : Object(rt.g)(
                          "button",
                          {
                              type: "submit",
                              className: Mr([mu, n ? yu : hu(i)]),
                              disabled: n,
                              onClick: t,
                          },
                          Object(rt.g)("span", null, r),
                      );
            },
            Ou = function (e) {
                var t = e.disabled,
                    n = on().primaryColor,
                    r = Gr(),
                    o = r.selectedPaymentMethod,
                    i = r.subMethod;
                return Object(rt.g)(
                    "button",
                    {
                        type: "button",
                        className: Mr([mu, vu, t ? yu : hu(n)]),
                        disabled: t,
                    },
                    Object(rt.g)(
                        "span",
                        null,
                        Se({
                            method: o,
                            paymentRequestIsApplePay: "apple" === i,
                        }),
                    ),
                );
            },
            Cu = function (e) {
                var t = g(null),
                    n = t[0],
                    r = t[1],
                    o = g(null),
                    i = o[0],
                    a = o[1],
                    c = g(!1),
                    l = c[0],
                    u = c[1];
                return (
                    m(
                        function () {
                            if (!e) return (r(null), a(null), void u(!1));
                            (u(!0),
                                (function (e) {
                                    return (Zt =
                                        Zt ||
                                        x(function* (e) {
                                            var t,
                                                n =
                                                    "https://api.coingecko.com/api/v3/coins/" +
                                                    e,
                                                r = yield fetch(n).then(
                                                    function (e) {
                                                        return (t =
                                                            t ||
                                                            x(function* (e) {
                                                                return e.json();
                                                            })).apply(
                                                            this,
                                                            arguments,
                                                        );
                                                    },
                                                );
                                            return r.market_data.current_price
                                                .usd;
                                        })).apply(this, arguments);
                                })(e)
                                    .then(function (e) {
                                        (r(e), a(null));
                                    })
                                    .catch(function (e) {
                                        (r(null), a(e.message));
                                    })
                                    .finally(function () {
                                        u(!1);
                                    }));
                        },
                        [e],
                    ),
                    [n, l, i]
                );
            },
            ju = "USD",
            wu = "$",
            Nu = function () {
                var e = on(),
                    t = Gr(),
                    n = t.frequency,
                    r = t.donationAmount,
                    o = t.setSubmitError,
                    i = t.selectedPaymentMethod,
                    d = t.stockAmount,
                    f = t.stockSymbol,
                    p = t.cryptoAmount,
                    g = t.cryptoCurrency,
                    b = t.privateNote,
                    m = t.publicTestimony,
                    h = t.giftCardCode,
                    y = on(),
                    _ = y.minDonationAmount,
                    O = y.webhookToken,
                    C = y.redeemGiftCardInFlow,
                    j = y.designation,
                    w = y.requireShareInfo,
                    N = v(
                        function (t) {
                            t.preventDefault();
                            var y = e.completeDonationInNewTab
                                    ? "_blank"
                                    : "_self",
                                v = {
                                    methods: [i],
                                    nonprofitSlug: e.nonprofitSlug,
                                    fundraiserSlug: e.fundraiserSlug,
                                    utmSource: e.utmSource,
                                    privateNote: b,
                                    publicTestimony: m,
                                    webhookToken: O,
                                    partnerMetadata: e.partnerMetadata,
                                    partnerDonationId: e.partnerDonationId, // OSE patch: forward to donation URL
                                    designation: j,
                                    requireShareInfo: w,
                                };
                            switch (i) {
                                case It.CRYPTO:
                                    if (!p || !g) {
                                        o("Please enter currency and amount");
                                        break;
                                    }
                                    window.open(
                                        (function (e) {
                                            var t,
                                                n = e.cryptoAmount,
                                                r = e.cryptoCurrency,
                                                o = a(e, Nt),
                                                i = u(o),
                                                d = s(o);
                                            return (
                                                i +
                                                "?" +
                                                l(
                                                    c(
                                                        (((t = {})[
                                                            dt.CRYPTO_AMOUNT
                                                        ] = n),
                                                        (t[dt.CRYPTO_CURRENCY] =
                                                            r),
                                                        t),
                                                        d,
                                                    ),
                                                ) +
                                                "#/" +
                                                St
                                            );
                                        })(
                                            xe(
                                                {
                                                    cryptoAmount: p,
                                                    cryptoCurrency: g,
                                                },
                                                v,
                                            ),
                                        ),
                                        y,
                                    );
                                    break;
                                case It.STOCKS:
                                    if (!f || !d) {
                                        o("Please enter the symbol and amount");
                                        break;
                                    }
                                    window.open(
                                        (function (e) {
                                            var t,
                                                n = e.stockAmount,
                                                r = e.stockSymbol,
                                                o = a(e, wt),
                                                i = u(o),
                                                d = s(o);
                                            return (
                                                i +
                                                "?" +
                                                l(
                                                    c(
                                                        (((t = {})[
                                                            dt.STOCK_AMOUNT
                                                        ] = n),
                                                        (t[dt.STOCK_SYMBOL] =
                                                            r),
                                                        t),
                                                        d,
                                                    ),
                                                ) +
                                                "#/" +
                                                St
                                            );
                                        })(
                                            xe(
                                                {
                                                    stockSymbol: f,
                                                    stockAmount: d,
                                                },
                                                v,
                                            ),
                                        ),
                                        y,
                                    );
                                    break;
                                case It.GIFT_CARD:
                                    window.open(
                                        (function (e) {
                                            var t,
                                                n = e.redeemGiftCardInFlow,
                                                r = e.giftCardCode,
                                                o = a(e, kt);
                                            if (n)
                                                return (
                                                    u(o) +
                                                    "?" +
                                                    l(
                                                        c(
                                                            {},
                                                            s(o),
                                                            (((t = {})[
                                                                dt.GIFT_CARD_CODE
                                                            ] = r),
                                                            t),
                                                        ),
                                                    ) +
                                                    "#/" +
                                                    St
                                                );
                                            var i = l({
                                                nonprofitSlug: o.nonprofitSlug,
                                            });
                                            return Ct + "?" + i;
                                        })(
                                            xe(
                                                {
                                                    redeemGiftCardInFlow: C,
                                                    giftCardCode: h,
                                                },
                                                v,
                                                { methods: void 0 },
                                            ),
                                        ),
                                        y,
                                    );
                                    break;
                                default:
                                    if (!r || r < _) {
                                        o("Amount must be at least " + wu + _);
                                        break;
                                    }
                                    window.open(
                                        (function (e) {
                                            var t,
                                                n = e.frequency,
                                                r = e.amount,
                                                o = a(e, jt);
                                            n || (n = st.OneTime);
                                            var i = u(o),
                                                d = s(o);
                                            return (
                                                i +
                                                "?" +
                                                l(
                                                    c(
                                                        (((t = {})[
                                                            dt.FREQUENCY
                                                        ] = n),
                                                        (t[dt.AMOUNT] = r),
                                                        t),
                                                        d,
                                                    ),
                                                ) +
                                                "#/" +
                                                St
                                            );
                                        })(
                                            xe(
                                                {
                                                    amount: r,
                                                    frequency: Et.includes(i)
                                                        ? st.OneTime
                                                        : n,
                                                },
                                                v,
                                            ),
                                        ),
                                        y,
                                    );
                            }
                        },
                        [n, r, o, i, e, _, d, f, p, g, b, m, h, O, C, j, w],
                    );
                return N;
            },
            ku = function () {
                var e,
                    t = Nu(),
                    n = Gr(),
                    r = n.cryptoAmount,
                    o = n.cryptoCurrency,
                    i = n.submitError,
                    a = Cu(o && (null == (e = va[o]) ? void 0 : e.coingeckoId)),
                    c = a[0],
                    l = a[1];
                return Object(rt.g)(
                    "form",
                    { className: Xl, onSubmit: t },
                    Za || (Za = Object(rt.g)(tu, null)),
                    Object(rt.g)(
                        "div",
                        { className: Fl },
                        Qa || (Qa = Object(rt.g)(nu, null)),
                        Object(rt.g)(
                            "fieldset",
                            {
                                className: at(
                                    Ae({ fieldSetCss: Dl }, jr(vr.XXL)),
                                ),
                            },
                            $a ||
                                ($a = Object(rt.g)(
                                    "div",
                                    null,
                                    Object(rt.g)(
                                        "legend",
                                        { className: Hl },
                                        "Crypto currency",
                                    ),
                                    Object(rt.g)(Cl, null),
                                )),
                            o &&
                                Object(rt.g)(
                                    "div",
                                    null,
                                    Ja ||
                                        (Ja = Object(rt.g)(
                                            "legend",
                                            { className: Hl },
                                            "Amount",
                                        )),
                                    Object(rt.g)(Sl, {
                                        cryptoTokenRate: c,
                                        cryptoTokenLoading: l,
                                    }),
                                ),
                        ),
                        ec || (ec = Object(rt.g)(du, null)),
                        tc || (tc = Object(rt.g)(fu, null)),
                        Object(rt.g)(Io, { message: i }),
                        Object(rt.g)(
                            _u,
                            { disabled: !r || !o },
                            Se({ method: It.CRYPTO, cryptoCurrency: o }),
                        ),
                        nc || (nc = Object(rt.g)(bu, null)),
                        o &&
                            c &&
                            c > 0 &&
                            Object(rt.g)(
                                "p",
                                {
                                    className: at(
                                        Ae({ color: fr.TextGray }, yr),
                                    ),
                                },
                                "*Estimated exchange rate of",
                                " ",
                                he(c, "USD", { showCurrency: !0 }),
                                " ",
                                "/ ",
                                o,
                                " is provided by CoinGecko. Final rate will be determined by our brokerage at time of transaction conversion.",
                            ),
                    ),
                );
            },
            Tu = function (e) {
                var t;
                return at(
                    Ie(
                        {
                            outline: "none",
                            border: "none",
                            fontFamily: "inherit",
                            cursor: "pointer",
                            background: "none",
                            fontWeight: 500,
                            transition: "opacity .3s",
                            color: e,
                            display: "flex",
                            alignItems: "center",
                            alignSelf: "flex-start",
                        },
                        hr,
                        (((t = {
                            opacity: 1,
                            padding: 0,
                            gap: vr.XXS,
                            marginBottom: vr.XXL,
                            ":hover": { opacity: 0.9 },
                        })[dr.TabletLandscapeUp] = {
                            padding: vr.L,
                            marginBottom: 0,
                        }),
                        t),
                    ),
                );
            },
            Su = function () {
                var e = on().primaryColor;
                return Object(rt.g)(
                    "svg",
                    {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                    },
                    Object(rt.g)("path", {
                        stroke: e,
                        strokeWidth: "2",
                        d: "M19 12H5M12 19l-7-7 7-7",
                    }),
                );
            },
            xu = function (e) {
                var t = e.handleClick,
                    n = on().primaryColor;
                return Object(rt.g)(
                    "button",
                    { type: "button", className: Tu(n), onClick: t },
                    rc || (rc = Object(rt.g)(Su, null)),
                    oc || (oc = Object(rt.g)("span", null, "Back")),
                );
            },
            Au = (function (e) {
                return (
                    (e[(e.START = 0)] = "START"),
                    (e[(e.MANUAL = 1)] = "MANUAL"),
                    (e[(e.AMOUNT = 2)] = "AMOUNT"),
                    e
                );
            })({}),
            Iu = function (e) {
                "." === e.key && e.preventDefault();
            },
            Eu = function () {
                var e = h(null),
                    t = on(),
                    n = t.primaryColor,
                    r = t.addAmounts,
                    o = t.amount,
                    i = t.frequency,
                    a = t.minDonationAmount,
                    c = Gr(),
                    l = c.setDonationAmount,
                    u = c.donationAmount,
                    s = c.setSubmitError,
                    d = c.submitError,
                    f = g(),
                    p = f[0],
                    b = f[1];
                return (
                    m(function () {
                        Boolean(
                            "ontouchstart" in window ||
                            navigator.maxTouchPoints,
                        ) ||
                            (e.current && e.current.focus());
                    }, []),
                    o
                        ? Object(rt.g)(
                              "fieldset",
                              {
                                  className: at(
                                      Ee({ fieldSetCss: Dl }, jr(vr.S)),
                                  ),
                              },
                              ic ||
                                  (ic = Object(rt.g)(
                                      "legend",
                                      { className: Hl },
                                      "Donation amount",
                                  )),
                              Object(rt.g)(
                                  "p",
                                  {
                                      className: Mr([
                                          Bl,
                                          at({
                                              textAlign: i ? "left" : "center",
                                          }),
                                      ]),
                                  },
                                  "$",
                                  o,
                              ),
                          )
                        : Object(rt.g)(
                              "fieldset",
                              {
                                  className: at(
                                      Ee({ fieldSetCss: Dl }, jr(vr.S)),
                                  ),
                              },
                              ac ||
                                  (ac = Object(rt.g)(
                                      "legend",
                                      { className: Hl },
                                      "Donation amount",
                                  )),
                              Object(rt.g)(
                                  "div",
                                  { className: Cr(vr.XXS) },
                                  Object(rt.g)(Ui, {
                                      ref: e,
                                      id: "donation-input",
                                      type: "number",
                                      pattern: "[0-9]*",
                                      inputMode: "numeric",
                                      min: 0,
                                      step: 1,
                                      value: u || "",
                                      prefix: wu,
                                      inputClassName: li,
                                      prefixClassName: ui,
                                      error: p,
                                      sufix: ju,
                                      sufixClassName: si(n),
                                      onKeyDown: Iu,
                                      onInput: function (e) {
                                          var t = Number(e.currentTarget.value);
                                          if ((l(t), t < a)) {
                                              var n =
                                                  "Amount must be at least " +
                                                  wu +
                                                  a;
                                              (b(n), s(n));
                                          } else (b(void 0), s(null));
                                      },
                                  }),
                                  Object(rt.g)(Io, { message: d }),
                              ),
                              r &&
                                  r.length > 0 &&
                                  Object(rt.g)(
                                      "div",
                                      { className: di },
                                      r.map(function (e) {
                                          return Object(rt.g)(
                                              "button",
                                              {
                                                  key: e,
                                                  className: fi(n),
                                                  type: "button",
                                                  onClick: function () {
                                                      l(function (t) {
                                                          return "number" ==
                                                              typeof t
                                                              ? t + e
                                                              : e;
                                                      });
                                                  },
                                              },
                                              "+",
                                              (function (e, t) {
                                                  if (e < 1e3)
                                                      return e.toString();
                                                  var n = "",
                                                      r = 1;
                                                  return (
                                                      e >= 1e3 && e < 1e6
                                                          ? ((r = 1e3),
                                                            (n = "k"))
                                                          : e >= 1e6 && e < 1e9
                                                            ? ((r = 1e6),
                                                              (n = "m"))
                                                            : e >= 1e9 &&
                                                                e < 1e12
                                                              ? ((r = 1e9),
                                                                (n = "b"))
                                                              : e >= 1e12 &&
                                                                ((r = 1e12),
                                                                (n = "t")),
                                                      void 0 === t
                                                          ? (e / r)
                                                                .toFixed(3)
                                                                .replace(
                                                                    /\.?0+$/,
                                                                    "",
                                                                ) + n
                                                          : (e / r).toFixed(t) +
                                                            n
                                                  );
                                              })(e),
                                          );
                                      }),
                                  ),
                          )
                );
            },
            Ru = function (e) {
                return at({
                    position: "relative",
                    cursor: "pointer",
                    display: "flex",
                    width: "100%",
                    height: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                    color: e,
                    fontWeight: 500,
                    border: "2px solid " + e,
                    borderRight: "none",
                });
            },
            Pu = function (e) {
                return at({
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    flex: "1 1 0px",
                    "& > input": { appearance: "none", height: 0 },
                    "& > input:checked + label": {
                        backgroundColor: e,
                        color: "white",
                    },
                    "& > input:checked + label:hover": {
                        backgroundColor: e,
                        color: "white",
                    },
                });
            },
            Mu = function (e) {
                return at({
                    display: "flex",
                    width: "100%",
                    "& > div:first-of-type > label": {
                        borderRadius: "6px 0 0 6px",
                        "&::after": { borderRadius: "6px 0 0 6px" },
                    },
                    "& > div:last-of-type > label": {
                        borderRadius: "0 6px 6px 0",
                        borderRight: "2px solid " + e,
                        "&::after": { borderRadius: "0 6px 6px 0" },
                    },
                });
            },
            Lu = function () {
                var e = on(),
                    t = e.primaryColor,
                    n = e.frequency,
                    r = e.amount,
                    o = e.monthlyTitle,
                    i = Gr(),
                    a = i.frequency,
                    c = i.selectedPaymentMethod,
                    l = i.setFrequency;
                return n && o
                    ? Object(rt.g)("h4", null, o)
                    : n
                      ? r
                          ? Object(rt.g)(
                                "fieldset",
                                { className: Dl },
                                cc ||
                                    (cc = Object(rt.g)(
                                        "legend",
                                        { className: Hl },
                                        "Frequency",
                                    )),
                                Object(rt.g)(
                                    "p",
                                    { className: Ul },
                                    n === st.Monthly ? "Monthly" : "One-time",
                                ),
                            )
                          : Object(rt.g)(
                                "h4",
                                { className: Ul },
                                "Frequency:",
                                " ",
                                n === st.Monthly ? "Monthly" : "One-time",
                            )
                      : Et.includes(c)
                        ? Object(rt.g)(
                              "fieldset",
                              { className: Dl },
                              lc ||
                                  (lc = Object(rt.g)(
                                      "legend",
                                      { className: Hl },
                                      "Frequency",
                                  )),
                              Object(rt.g)(
                                  "p",
                                  null,
                                  c === It.DAF ? "Chariot" : "Venmo",
                                  " ",
                                  "only supports one-time donations",
                              ),
                          )
                        : Object(rt.g)(
                              "fieldset",
                              { className: Dl },
                              uc ||
                                  (uc = Object(rt.g)(
                                      "legend",
                                      { className: Hl },
                                      "Frequency",
                                  )),
                              Object(rt.g)(
                                  "div",
                                  { className: Mu(t) },
                                  Object(rt.g)(
                                      "div",
                                      { className: Pu(t) },
                                      Object(rt.g)("input", {
                                          type: "radio",
                                          name: "frequency",
                                          id: "monthly",
                                          checked: a === st.Monthly,
                                          value: st.Monthly,
                                      }),
                                      Object(rt.g)(
                                          "label",
                                          {
                                              className: Ru(t),
                                              id: "frequency-monthly",
                                              htmlFor: "monthly",
                                              onClick: function () {
                                                  l(st.Monthly);
                                              },
                                          },
                                          "Give Monthly",
                                      ),
                                  ),
                                  Object(rt.g)(
                                      "div",
                                      { className: Pu(t) },
                                      Object(rt.g)("input", {
                                          type: "radio",
                                          name: "frequency",
                                          id: "once",
                                          checked: a === st.OneTime,
                                          value: st.OneTime,
                                      }),
                                      Object(rt.g)(
                                          "label",
                                          {
                                              id: "frequency-one-time",
                                              htmlFor: "one-time",
                                              className: Ru(t),
                                              onClick: function () {
                                                  l(st.OneTime);
                                              },
                                          },
                                          "Once",
                                      ),
                                  ),
                              ),
                          );
            },
            Du = function (e) {
                var t = e.changeView,
                    n = Nu(),
                    r = Gr(),
                    o = r.donationAmount,
                    i = r.submitError;
                return Object(rt.g)(
                    "form",
                    { className: Xl, onSubmit: n },
                    Object(rt.g)(xu, {
                        handleClick: function () {
                            t(Au.START);
                        },
                    }),
                    Object(rt.g)(
                        "div",
                        { className: Fl },
                        sc ||
                            (sc = Object(rt.g)(
                                "h3",
                                null,
                                "Connect your DAF with Chariot",
                            )),
                        dc || (dc = Object(rt.g)(Lu, null)),
                        fc || (fc = Object(rt.g)(Eu, null)),
                        pc || (pc = Object(rt.g)(du, null)),
                        gc || (gc = Object(rt.g)(fu, null)),
                        Object(rt.g)(Io, { message: i }),
                        Object(rt.g)(
                            _u,
                            { disabled: !o || Number.isNaN(o) },
                            Se({ method: It.DAF }),
                        ),
                        bc || (bc = Object(rt.g)(bu, null)),
                    ),
                );
            },
            Hu = function (e) {
                var t = e.changeView,
                    n = on(),
                    r = n.nonprofitSlug,
                    o = n.primaryColor,
                    i = Ur(),
                    a = i === fn || i === dn ? "the nonprofit" : i.name;
                return Object(rt.g)(
                    "div",
                    { className: Xl },
                    Object(rt.g)(xu, {
                        handleClick: function () {
                            t(Au.START);
                        },
                    }),
                    Object(rt.g)(
                        "div",
                        { className: Fl },
                        mc ||
                            (mc = Object(rt.g)(
                                "h3",
                                null,
                                "Manual DAF donation",
                            )),
                        hc ||
                            (hc = Object(rt.g)(
                                "p",
                                null,
                                "Please ask your provider to make a one-time or recurring grant to:",
                            )),
                        Object(rt.g)(
                            "div",
                            { className: Cr(vr.S) },
                            Object(rt.g)(
                                "p",
                                { className: Cr(0) },
                                yc ||
                                    (yc = Object(rt.g)(
                                        "span",
                                        null,
                                        "Every.org (EIN: 61-1913297)",
                                    )),
                                vc ||
                                    (vc = Object(rt.g)(
                                        "span",
                                        null,
                                        "58 West Portal Ave #781 San Francisco, CA 94127",
                                    )),
                                Object(rt.g)(
                                    "span",
                                    null,
                                    "Memo: every.org/",
                                    r,
                                ),
                                _c ||
                                    (_c = Object(rt.g)(
                                        "span",
                                        null,
                                        "Contact info: Mark Ulrich, CEO",
                                    )),
                                Oc ||
                                    (Oc = Object(rt.g)(
                                        "span",
                                        null,
                                        "Email: team@every.org",
                                    )),
                                Cc ||
                                    (Cc = Object(rt.g)(
                                        "span",
                                        null,
                                        "Phone number: +1 (415) 650-0503",
                                    )),
                            ),
                            Object(rt.g)(
                                "p",
                                null,
                                "You may also email us at",
                                " ",
                                Object(rt.g)(
                                    "a",
                                    {
                                        className: Jr(o),
                                        href: z({
                                            address: bt,
                                            subject: "Donation via DAF",
                                        }),
                                    },
                                    bt,
                                ),
                                " ",
                                "with the memo or to let us know if you wish to share your contact information with the nonprofit/campaign. By default, your name and email will be shared with ",
                                a,
                                " if included in the grant letter from your DAF.",
                            ),
                        ),
                        Object(rt.g)(
                            "div",
                            {
                                className: at(
                                    Re({ color: fr.TextGray }, jr(0)),
                                ),
                            },
                            Object(rt.g)(
                                "p",
                                { className: at({ paddingBottom: vr.S }) },
                                "We will attribute the donation accordingly:",
                            ),
                            jc ||
                                (jc = Object(rt.g)(
                                    "p",
                                    null,
                                    "If we receive BOTH your @username and a nonprofit/campaign: we will add a donation for that nonprofit/campaign to your account.",
                                )),
                            wc ||
                                (wc = Object(rt.g)(
                                    "p",
                                    null,
                                    "If we receive only your @username, we will credit your account's gift card balance in the amount received, which you can use to support as many nonprofits as you'd like.",
                                )),
                            Nc ||
                                (Nc = Object(rt.g)(
                                    "p",
                                    null,
                                    "If we receive only a nonprofit/campaign, we will send that amount to that nonprofit/campaign.",
                                )),
                            kc ||
                                (kc = Object(rt.g)(
                                    "p",
                                    null,
                                    "If we do not receive any information by the time the wire/ACH is received, we will apply it towards running Every.org.",
                                )),
                        ),
                    ),
                );
            },
            Uu = at(
                Pe(
                    {
                        outline: "none",
                        border: "none",
                        fontFamily: "inherit",
                        background: "#ADEFD1",
                        color: "#00203F",
                        alignSelf: "center",
                        borderRadius: fo.Big,
                        padding: vr.M + " " + vr.XL,
                        display: "flex",
                        alignItems: "center",
                        fontWeight: 500,
                    },
                    hr,
                    {
                        gap: vr.XS,
                        cursor: "pointer",
                        ":hover": { background: "#7ce6b6" },
                    },
                ),
            ),
            Bu = function (e) {
                return at(
                    Pe(
                        {
                            outline: "none",
                            border: "none",
                            background: "none",
                            fontFamily: "inherit",
                            color: e,
                            alignSelf: "center",
                            display: "flex",
                            alignItems: "center",
                            fontWeight: 500,
                        },
                        hr,
                        {
                            gap: vr.XS,
                            cursor: "pointer",
                            ":hover": { opacity: 0.9 },
                        },
                    ),
                );
            },
            Fu = function () {
                return (
                    Tc ||
                    (Tc = Object(rt.g)(
                        "svg",
                        {
                            width: "62",
                            height: "19",
                            viewBox: "0 0 62 19",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                        },
                        Object(rt.g)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M4 0C1.79086 0 0 1.79086 0 4V15C0 17.2091 1.79086 19 4 19H32.4127C34.6218 19 36.4127 17.2091 36.4127 15V4C36.4127 1.79086 34.6218 0 32.4127 0H4ZM4.50829 4.36V14.952C5.11629 15.032 6.01229 15.112 7.27629 15.112C9.38829 15.112 11.1163 14.664 12.2523 13.72C13.2923 12.84 14.0443 11.416 14.0443 9.352C14.0443 7.448 13.3403 6.12 12.2203 5.288C11.1803 4.504 9.85229 4.136 7.80429 4.136C6.57229 4.136 5.40429 4.216 4.50829 4.36ZM6.95629 13.16V6.104C7.16429 6.056 7.51629 6.008 8.06029 6.008C10.1563 6.008 11.4683 7.192 11.4523 9.432C11.4523 12.008 10.0123 13.224 7.80429 13.208C7.50029 13.208 7.16429 13.208 6.95629 13.16ZM17.7509 12.232H20.8389L21.6709 15H24.2949L20.9509 4.216H17.7509L14.4549 15H16.9829L17.7509 12.232ZM20.4869 10.408H18.1029L18.7429 8.12C18.8484 7.74614 18.9481 7.30336 19.0455 6.8708C19.1106 6.58139 19.1748 6.29655 19.2389 6.04H19.2709C19.2969 6.14386 19.3237 6.25193 19.3512 6.36285C19.4932 6.93544 19.6541 7.58386 19.8149 8.12L20.4869 10.408ZM25.5789 4.216V15H28.0269V10.664H31.8989V8.68H28.0269V6.216H32.1709V4.216H25.5789Z",
                            fill: "#00203F",
                        }),
                        Object(rt.g)("path", {
                            d: "M40.2192 16.772V9.45C40.2192 8.554 40.1912 7.784 40.1632 7.154H42.0112L42.1092 8.106H42.1372C42.6412 7.378 43.4252 7 44.4192 7C45.9172 7 47.2612 8.302 47.2612 10.486C47.2612 12.978 45.6792 14.154 44.1532 14.154C43.3272 14.154 42.6832 13.818 42.3752 13.37H42.3472V16.772H40.2192ZM42.3472 10.122V11.06C42.3472 11.228 42.3612 11.382 42.3892 11.508C42.5292 12.082 43.0192 12.516 43.6352 12.516C44.5592 12.516 45.1052 11.746 45.1052 10.584C45.1052 9.492 44.6152 8.666 43.6632 8.666C43.0612 8.666 42.5292 9.114 42.3892 9.744C42.3612 9.856 42.3472 9.996 42.3472 10.122ZM54.2564 14H52.3384L52.2124 13.314H52.1704C51.7224 13.86 51.0224 14.154 50.2104 14.154C48.8244 14.154 47.9984 13.146 47.9984 12.054C47.9984 10.276 49.5944 9.422 52.0164 9.436V9.338C52.0164 8.974 51.8204 8.456 50.7704 8.456C50.0704 8.456 49.3284 8.694 48.8804 8.974L48.4884 7.602C48.9644 7.336 49.9024 7 51.1484 7C53.4304 7 54.1584 8.344 54.1584 9.954V12.334C54.1584 12.992 54.1864 13.622 54.2564 14ZM52.0864 11.508V10.766C50.9664 10.752 50.0984 11.018 50.0984 11.844C50.0984 12.39 50.4624 12.656 50.9384 12.656C51.4704 12.656 51.9044 12.306 52.0444 11.872C52.0724 11.76 52.0864 11.634 52.0864 11.508ZM54.7688 7.154H57.1348L58.1568 10.514C58.2688 10.92 58.4088 11.424 58.4928 11.788H58.5348C58.6328 11.424 58.7448 10.906 58.8428 10.514L59.6828 7.154H61.9648L60.3688 11.662C59.3888 14.378 58.7308 15.47 57.9608 16.156C57.2188 16.8 56.4348 17.024 55.9028 17.094L55.4548 15.288C55.7208 15.246 56.0568 15.12 56.3788 14.924C56.7008 14.756 57.0508 14.42 57.2608 14.07C57.3308 13.972 57.3728 13.86 57.3728 13.762C57.3728 13.692 57.3588 13.58 57.2748 13.412L54.7688 7.154Z",
                            fill: "#00203F",
                        }),
                    ))
                );
            },
            Gu = function (e) {
                var t = e.changeView,
                    n = on().primaryColor;
                return Object(rt.g)(
                    "div",
                    { className: Xl },
                    Sc || (Sc = Object(rt.g)(tu, null)),
                    Object(rt.g)(
                        "div",
                        { className: Fl },
                        xc || (xc = Object(rt.g)(nu, null)),
                        Ac ||
                            (Ac = Object(rt.g)(
                                "h4",
                                null,
                                "Instant DAF donation",
                            )),
                        Ic ||
                            (Ic = Object(rt.g)(
                                "p",
                                null,
                                "We use Chariot to verify your account info and automatically initiate a grant from your DAF, or you can get instructions for making the donation manually.",
                            )),
                        Object(rt.g)(
                            "button",
                            {
                                type: "button",
                                className: Uu,
                                onClick: function () {
                                    t(Au.AMOUNT);
                                },
                            },
                            Ec ||
                                (Ec = Object(rt.g)(
                                    "span",
                                    null,
                                    "Donate with",
                                )),
                            Rc || (Rc = Object(rt.g)(Fu, null)),
                        ),
                        Object(rt.g)(
                            "button",
                            {
                                type: "button",
                                className: Bu(n),
                                onClick: function () {
                                    t(Au.MANUAL);
                                },
                            },
                            "Get instructions for a manual DAF donation",
                        ),
                        Pc || (Pc = Object(rt.g)(bu, null)),
                    ),
                );
            },
            Xu = function () {
                var e = g(Au.START),
                    t = e[1];
                switch (e[0]) {
                    case Au.START:
                        return Object(rt.g)(Gu, { changeView: t });
                    case Au.MANUAL:
                        return Object(rt.g)(Hu, { changeView: t });
                    case Au.AMOUNT:
                        return Object(rt.g)(Du, { changeView: t });
                }
            },
            qu = function () {
                var e = on(),
                    t = e.frequency,
                    n = e.amount,
                    r = Gr(),
                    o = r.donationAmount,
                    i = r.selectedPaymentMethod,
                    a = r.paymentRequestAvailable,
                    c = r.submitError,
                    l = Nu();
                return Object(rt.g)(
                    "form",
                    { className: Xl, onSubmit: l },
                    Mc || (Mc = Object(rt.g)(tu, null)),
                    Object(rt.g)(
                        "div",
                        { className: Fl },
                        Lc || (Lc = Object(rt.g)(nu, null)),
                        Object(rt.g)(
                            "div",
                            {
                                className: Gl({
                                    horizontal: Boolean(n && t),
                                    fixedAmount: Boolean(n),
                                }),
                            },
                            Dc || (Dc = Object(rt.g)(Lu, null)),
                            Hc || (Hc = Object(rt.g)(Eu, null)),
                        ),
                        Uc || (Uc = Object(rt.g)(du, null)),
                        Bc || (Bc = Object(rt.g)(fu, null)),
                        Object(rt.g)(Io, { message: c }),
                        Object(rt.g)(
                            _u,
                            { disabled: !o || Number.isNaN(o) },
                            Se({
                                method: i,
                                paymentRequestIsApplePay: a.applePay,
                            }),
                        ),
                        Fc || (Fc = Object(rt.g)(bu, null)),
                    ),
                );
            },
            Wu = at({
                display: "block",
                width: "80px",
                height: "80px",
                alignSelf: "center",
                "& > path": { strokeWidth: "1" },
            }),
            zu = function () {
                var e = Nu(),
                    t = on().redeemGiftCardInFlow,
                    n = Gr(),
                    r = n.giftCardCode,
                    o = n.setGiftCardCode,
                    i = n.submitError;
                return Object(rt.g)(
                    "form",
                    { className: Xl, onSubmit: e },
                    Gc || (Gc = Object(rt.g)(tu, null)),
                    Object(rt.g)(
                        "div",
                        { className: Fl },
                        Xc || (Xc = Object(rt.g)(nu, null)),
                        qc || (qc = Object(rt.g)(Al, { className: Wu })),
                        Wc ||
                            (Wc = Object(rt.g)(
                                "p",
                                null,
                                "Redeem a gift card to add donation credits to your account.",
                            )),
                        t &&
                            Object(rt.g)(Ui, {
                                id: "gift-card-code-input",
                                type: "text",
                                value: r,
                                onInput: function (e) {
                                    o(e.currentTarget.value);
                                },
                            }),
                        Object(rt.g)(Io, { message: i }),
                        Object(rt.g)(_u, null, Se({ method: It.GIFT_CARD })),
                        zc || (zc = Object(rt.g)(bu, null)),
                    ),
                );
            },
            Vu =
                (at({
                    fontSize: br.fontSize,
                    lineHeight: br.fontSize,
                    fontWeight: 700,
                }),
                function () {
                    var e = Nu(),
                        t = (on(), Gr()),
                        n = t.stockAmount,
                        r = t.stockSymbol,
                        o = t.setStockAmount,
                        i = t.setStockSymbol,
                        a = t.submitError,
                        c = t.setSubmitError;
                    return Object(rt.g)(
                        "form",
                        { className: Xl, onSubmit: e },
                        Vc || (Vc = Object(rt.g)(tu, null)),
                        Object(rt.g)(
                            "div",
                            { className: Fl },
                            Yc || (Yc = Object(rt.g)(nu, null)),
                            Object(rt.g)(
                                "fieldset",
                                {
                                    className: at(
                                        Me({ fieldSetCss: Dl }, jr(vr.XXL)),
                                    ),
                                },
                                Object(rt.g)(
                                    "div",
                                    null,
                                    Kc ||
                                        (Kc = Object(rt.g)(
                                            "legend",
                                            { className: Hl },
                                            "What is the symbol of the shares?",
                                        )),
                                    Zc ||
                                        (Zc = Object(rt.g)(
                                            "span",
                                            null,
                                            "Example: AAPL",
                                        )),
                                    Object(rt.g)(Ui, {
                                        id: "stock-amount-input",
                                        inputClassName: li,
                                        type: "text",
                                        value: r,
                                        onInput: function (e) {
                                            (i(e.currentTarget.value), c(null));
                                        },
                                    }),
                                ),
                                Object(rt.g)(
                                    "div",
                                    null,
                                    Qc ||
                                        (Qc = Object(rt.g)(
                                            "legend",
                                            { className: Hl },
                                            "How many shares are you donating?",
                                        )),
                                    Object(rt.g)(Ui, {
                                        id: "donation-input",
                                        inputClassName: li,
                                        type: "number",
                                        pattern: "[0-9]*",
                                        inputMode: "numeric",
                                        min: 0,
                                        step: 1,
                                        value: n || void 0,
                                        onInput: function (e) {
                                            (o(Number(e.currentTarget.value)),
                                                c(null));
                                        },
                                    }),
                                ),
                            ),
                            $c || ($c = Object(rt.g)(du, null)),
                            Jc || (Jc = Object(rt.g)(fu, null)),
                            Object(rt.g)(Io, { message: a }),
                            Object(rt.g)(
                                _u,
                                { disabled: !n || !r },
                                Se({ method: It.STOCKS }),
                            ),
                            el || (el = Object(rt.g)(bu, null)),
                        ),
                    );
                }),
            Yu = function () {
                switch (Gr().selectedPaymentMethod) {
                    case It.CRYPTO:
                        return tl || (tl = Object(rt.g)(ku, null));
                    case It.STOCKS:
                        return nl || (nl = Object(rt.g)(Vu, null));
                    case It.DAF:
                        return rl || (rl = Object(rt.g)(Xu, null));
                    case It.GIFT_CARD:
                        return ol || (ol = Object(rt.g)(zu, null));
                    default:
                        return il || (il = Object(rt.g)(qu, null));
                }
            },
            Ku = function () {
                return (
                    al ||
                    (al = Object(rt.g)(
                        Lr,
                        { className: Ll },
                        Object(rt.g)(Yu, null),
                    ))
                );
            },
            Zu = function (e) {
                var t;
                return at(
                    (((t = {
                        background: "white",
                        width: "100%",
                        height: "100%",
                        borderRadius: "unset",
                        position: "relative",
                        overflow: "auto",
                        padding: "0",
                        paddingBottom: vr.XXL,
                    })[dr.TabletLandscapeUp] = {
                        height: e ? e + "px" : "unset",
                        background: "#f3f6f6",
                        minHeight: "378px",
                        maxHeight: "calc(100vh - 2 * " + vr.XL + ")",
                        width: "1000px",
                        overflow: "unset",
                        overflowY: "scroll",
                        "-ms-overflow-style": "none",
                        scrollbarWidth: "none",
                        "::-webkit-scrollbar": { display: "none" },
                        borderRadius: fo.Medium,
                        padding: vr.XL,
                    }),
                    t),
                );
            },
            Qu = ne(function (e, t) {
                var n = e.children,
                    r = e.height;
                return Object(rt.g)("div", { ref: t, className: Zu(r) }, n);
            }),
            $u = at(
                Le(
                    {},
                    hr,
                    (((cl = {
                        position: "fixed",
                        height: "auto",
                        width: "100%",
                        zIndex: 2147483647,
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        display: "flex",
                        background: "#ffffff",
                        justifyContent: "center",
                        alignItems: "center",
                        color: fr.Text,
                        fontFamily: ot.BasisGrotesque,
                        padding: 0,
                    })[dr.TabletLandscapeUp] = {
                        padding: vr.XL,
                        background: "rgba(0, 0, 0, 0.5)",
                    }),
                    (cl.boxSizing = "border-box"),
                    (cl["-webkit-font-smoothing"] = "antialiased"),
                    (cl["-moz-osx-font-smoothing"] = "grayscale"),
                    (cl["& *"] = { boxSizing: "inherit" }),
                    (cl["& *:before"] = { boxSizing: "inherit" }),
                    (cl["& *:after"] = { boxSizing: "inherit" }),
                    cl),
                ),
            ),
            Ju = function (e) {
                var t = e.children,
                    n = e.onClick;
                return Object(rt.g)("div", { className: $u, onClick: n }, t);
            },
            es = function () {
                var e = on().fundraiserSlug,
                    t = Gr().hideWidget,
                    n = Dr(),
                    r = Ur(),
                    o = function (e) {
                        e.target === e.currentTarget && t();
                    };
                return r === dn || (e && n === an)
                    ? (t(), null)
                    : r === fn || (e && n === cn)
                      ? Object(rt.g)(
                            Ju,
                            { onClick: o },
                            ll || (ll = Object(rt.g)(kl, { size: 24 })),
                        )
                      : Object(rt.g)(
                            Ju,
                            { onClick: o },
                            ul || (ul = Object(rt.g)(lo, { className: ao })),
                            sl ||
                                (sl = Object(rt.g)(
                                    Qu,
                                    { height: null },
                                    Object(rt.g)(
                                        ro,
                                        null,
                                        Object(rt.g)(
                                            "div",
                                            { id: "every-header" },
                                            Object(rt.g)(so, null),
                                        ),
                                        Object(rt.g)(
                                            "div",
                                            { id: "every-nonprofitInfo" },
                                            Object(rt.g)(xo, null),
                                        ),
                                        Object(rt.g)(
                                            "div",
                                            { id: "every-paymentProcess" },
                                            Object(rt.g)(Ku, null),
                                        ),
                                        Object(rt.g)(
                                            "div",
                                            { id: "every-faq" },
                                            Object(rt.g)(Wr, null),
                                        ),
                                        Object(rt.g)(
                                            "div",
                                            { id: "every-fundraiserLink" },
                                            Object(rt.g)(to, null),
                                        ),
                                        Object(rt.g)(
                                            "div",
                                            { id: "every-footer" },
                                            Object(rt.g)($r, null),
                                        ),
                                    ),
                                )),
                        );
            },
            ts =
                null == (dl = document.querySelector("body"))
                    ? void 0
                    : dl.style.overflow,
            ns = function () {
                var e = document.querySelector("body");
                if (e) {
                    if (ts) return void (e.style.overflow = ts);
                    e.style.removeProperty("overflow");
                }
            },
            rs = function (e) {
                var t,
                    n = e.options,
                    r = void 0 === n ? {} : n,
                    o = e.hide;
                return (
                    ns(),
                    m(function () {
                        function e() {
                            (o(), ns());
                        }
                        return (
                            window.addEventListener("popstate", e),
                            function () {
                                window.removeEventListener("popstate", e);
                            }
                        );
                    }, []),
                    r.show
                        ? ((t = document.querySelector("body")) &&
                              (t.style.overflow = "hidden"),
                          Object(rt.g)(
                              sr,
                              { options: r, hide: o },
                              fl || (fl = Object(rt.g)(es, null)),
                          ))
                        : null
                );
            },
            os = ["element"],
            is = { childList: !0, subtree: !0, attributeFilter: ["href"] },
            as = new Map(),
            cs =
                null !=
                (null == (bl = document.currentScript)
                    ? void 0
                    : bl.getAttribute("data-every-style")),
            ls = (function () {
                function e(e, t) {
                    (He(this, "options", void 0),
                        He(this, "mountPoint", void 0),
                        (this.options = e),
                        (this.mountPoint = t));
                }
                var t = e.prototype;
                return (
                    (t.hide = function () {
                        ((this.options.show = !1), this.render());
                    }),
                    (t.show = function () {
                        ((this.options.show = !0), this.render());
                    }),
                    (t.setOptions = function (e) {
                        ((this.options = e), this.render());
                    }),
                    (t.render = function () {
                        var e = this;
                        Object(rt.j)(
                            Object(rt.g)(rs, {
                                options: this.options,
                                hide: function () {
                                    e.hide();
                                },
                            }),
                            this.mountPoint,
                        );
                    }),
                    e
                );
            })(),
            us =
                window.MutationObserver ||
                window.WebKitMutationObserver ||
                window.MozMutationObserver,
            ss = function (e) {
                var t = e.options,
                    n = void 0 === t ? {} : t;
                return Object(rt.g)(
                    sr,
                    { options: n, hide: function () {} },
                    ml || (ml = Object(rt.g)(ds, null)),
                );
            },
            ds = function () {
                var e = on().fundraiserSlug,
                    t = Dr();
                return Ur() === fn || (e && t === cn)
                    ? hl || (hl = Object(rt.g)(kl, { size: 24 }))
                    : yl || (yl = Object(rt.g)(Ku, null));
            },
            fs = ["element", "selector"],
            ps = ["element", "selector"],
            gs = ["element", "selector"],
            bs = !(vl = T()) || "1" !== vl.explicit,
            ms = (function () {
                var e = T();
                return !!e && "1" === e.formOnly;
            })();
        ms
            ? (function () {
                  function e() {
                      for (
                          var e, t = arguments.length, n = new Array(t), r = 0;
                          r < t;
                          r++
                      )
                          n[r] = arguments[r];
                      (e = console).info.apply(
                          e,
                          ["Every.org Donate Button:"].concat(n),
                      );
                  }
                  var t,
                      n,
                      r = {},
                      o = { show: !1, openAt: "donate" },
                      i = {};
                  Ht();
                  var a = function () {
                      n ||
                          (function () {
                              var e;
                              null ==
                                  (e = document.querySelector(
                                      "#every-shadow-wrapper",
                                  )) || e.remove();
                              var r = document.createElement("div");
                              ((r.id = "every-shadow-wrapper"),
                                  t.append(r),
                                  (n = document.createElement("div")),
                                  r.attachShadow({ mode: "open" }).append(n));
                              var o = document.createElement("style");
                              ((o.id = "every-shadow-styles"), n.append(o));
                          })();
                      var e = Ge({}, o, r, i);
                      Object(rt.j)(Object(rt.g)(ss, { options: e }), n);
                  };
                  window.everyDotOrgDonateButton = {
                      createButton: function () {
                          e(
                              "createButton function is not available in formOnlyMode. Use createWidget instead.",
                          );
                      },
                      showWidget: function () {
                          e(
                              "showWidget function is not available in formOnlyMode. Use createWidget instead.",
                          );
                      },
                      setOptions: function (e) {
                          (Ge(r, e), a());
                      },
                      createWidget: function (n) {
                          var o = n.element,
                              i = n.selector,
                              c = (function (e, t) {
                                  if (null == e) return {};
                                  var n,
                                      r,
                                      o = {},
                                      i = Object.keys(e);
                                  for (r = 0; r < i.length; r++)
                                      t.indexOf((n = i[r])) >= 0 ||
                                          (o[n] = e[n]);
                                  return o;
                              })(n, fs);
                          o ||
                              i ||
                              e(
                                  "createWidget():",
                                  "must provide element or selector",
                              );
                          var l = (function (e, t) {
                              return (
                                  e || (t ? document.querySelector(t) : null)
                              );
                          })(o, i);
                          l
                              ? c.nonprofitSlug
                                  ? ((t = l), Ge(r, c), a())
                                  : e(
                                        "createWidget():",
                                        "must provide nonprofitSlug",
                                    )
                              : e(
                                    "createWidget():",
                                    "element or selector not found",
                                );
                      },
                  };
              })()
            : bs
              ? (Ht(),
                Fe(),
                new us(function (e, t) {
                    (t.disconnect(),
                        Boolean(
                            e.some(function (e) {
                                return "A" === e.target.nodeName;
                            }),
                        ) && Fe(),
                        t.observe(document, is));
                }).observe(document, is))
              : (function () {
                    function e() {
                        for (
                            var e,
                                t = arguments.length,
                                n = new Array(t),
                                r = 0;
                            r < t;
                            r++
                        )
                            n[r] = arguments[r];
                        (e = console).info.apply(
                            e,
                            ["Every.org Donate Button:"].concat(n),
                        );
                    }
                    function t() {
                        (ze(c, { show: !0 }), s());
                    }
                    function n() {
                        (ze(c, { show: !1 }), s());
                    }
                    function r(e) {
                        var n,
                            r = ze({}, e);
                        return (
                            ze(c, { openAt: null != (n = r.openAt) ? n : i }),
                            function (e) {
                                (e.preventDefault(), (l = r), t());
                            }
                        );
                    }
                    var o,
                        i = "donate",
                        a = {},
                        c = { show: !1, openAt: i },
                        l = {},
                        u = function (e, t) {
                            return e ? [e] : t && document.querySelectorAll(t);
                        };
                    Ht();
                    var s = function () {
                        var e, t, r, i, u;
                        (o ||
                            (function () {
                                var e;
                                null ==
                                    (e = document.querySelector(
                                        "#every-shadow-wrapper",
                                    )) || e.remove();
                                var t = document.createElement("div");
                                ((t.id = "every-shadow-wrapper"),
                                    (t.style.position = "absolute"),
                                    (t.style.zIndex = "2147483647"),
                                    document.body.append(t),
                                    (o = document.createElement("div")),
                                    t.attachShadow({ mode: "open" }).append(o));
                                var n = document.createElement("style");
                                ((n.id = "every-shadow-styles"), o.append(n));
                            })(),
                            (null == (e = window.location)
                                ? void 0
                                : e.hash) ===
                                "#" +
                                    (null !=
                                    (t =
                                        null !=
                                        (r =
                                            null !=
                                            (i =
                                                null == (u = l)
                                                    ? void 0
                                                    : u.openAt)
                                                ? i
                                                : null == a
                                                  ? void 0
                                                  : a.openAt)
                                            ? r
                                            : null == c
                                              ? void 0
                                              : c.openAt)
                                        ? t
                                        : "") && ze(c, { show: !0 }));
                        var s = ze({}, c, a, l);
                        Object(rt.j)(
                            Object(rt.g)(rs, { options: s, hide: n }),
                            o,
                        );
                    };
                    window.everyDotOrgDonateButton = {
                        createButton: function (t) {
                            var n = t.element,
                                r = t.selector,
                                o = We(t, ps);
                            n ||
                                r ||
                                o.nonprofitSlug ||
                                e(
                                    "createButton():",
                                    "must provide element or selector or nonprofitSlug",
                                );
                            var i = u(n, r);
                            if (i)
                                for (var a, c = Xe(i); !(a = c()).done; ) {
                                    var s,
                                        d,
                                        f = a.value,
                                        p =
                                            null != (s = f.querySelector("a"))
                                                ? s
                                                : void 0;
                                    if (!o.nonprofitSlug && !p)
                                        return void e(
                                            "no link in container",
                                            f,
                                        );
                                    var g =
                                        null !=
                                        (d =
                                            null == p
                                                ? void 0
                                                : p.getAttribute("href"))
                                            ? d
                                            : void 0;
                                    if (!o.nonprofitSlug && !g)
                                        return void e("link lacks href", p);
                                    var b = ze({}, l, o);
                                    Object(rt.j)(Object(rt.g)(At, b), f, p);
                                }
                        },
                        showWidget: t,
                        setOptions: function (e) {
                            (ze(a, e), s());
                        },
                        createWidget: function (t) {
                            var n = t.element,
                                o = t.selector,
                                i = We(t, gs);
                            n ||
                                o ||
                                e(
                                    "createWidget():",
                                    "must provide element or selector",
                                );
                            var c = u(n, o);
                            if (c)
                                if (i.nonprofitSlug) {
                                    for (var l, d = Xe(c); !(l = d()).done; )
                                        l.value.addEventListener("click", r(i));
                                    (ze(a, i), s());
                                } else
                                    e(
                                        "createWidget():",
                                        "must provide nonprofitSlug",
                                    );
                        },
                    };
                })();
    },
    NMMh: function (e, t, n) {
        "use strict";
        function r(e, t) {
            for (var n in t) e[n] = t[n];
            return e;
        }
        function o(e) {
            var t = e.parentNode;
            t && t.removeChild(e);
        }
        function i(e, t, n) {
            var r,
                o,
                i,
                c = {};
            for (i in t)
                "key" == i
                    ? (r = t[i])
                    : "ref" == i
                      ? (o = t[i])
                      : (c[i] = t[i]);
            if (
                (arguments.length > 2 &&
                    (c.children =
                        arguments.length > 3 ? R.call(arguments, 2) : n),
                "function" == typeof e && null != e.defaultProps)
            )
                for (i in e.defaultProps)
                    void 0 === c[i] && (c[i] = e.defaultProps[i]);
            return a(e, c, r, o, null);
        }
        function a(e, t, n, r, o) {
            var i = {
                type: e,
                props: t,
                key: n,
                ref: r,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __d: void 0,
                __c: null,
                __h: null,
                constructor: void 0,
                __v: null == o ? ++M : o,
            };
            return (null == o && null != P.vnode && P.vnode(i), i);
        }
        function c() {
            return { current: null };
        }
        function l(e) {
            return e.children;
        }
        function u(e, t) {
            ((this.props = e), (this.context = t));
        }
        function s(e, t) {
            if (null == t)
                return e.__ ? s(e.__, e.__.__k.indexOf(e) + 1) : null;
            for (var n; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
            return "function" == typeof e.type ? s(e) : null;
        }
        function d(e) {
            var t, n;
            if (null != (e = e.__) && null != e.__c) {
                for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                    if (null != (n = e.__k[t]) && null != n.__e) {
                        e.__e = e.__c.base = n.__e;
                        break;
                    }
                return d(e);
            }
        }
        function f(e) {
            ((!e.__d && (e.__d = !0) && L.push(e) && !p.__r++) ||
                D !== P.debounceRendering) &&
                ((D = P.debounceRendering) || H)(p);
        }
        function p() {
            var e, t, n, o, i, a, c, l, u;
            for (L.sort(U); (e = L.shift()); )
                e.__d &&
                    ((t = L.length),
                    (o = void 0),
                    (i = void 0),
                    (a = void 0),
                    (l = (c = (n = e).__v).__e),
                    (u = n.__P) &&
                        ((o = []),
                        (i = []),
                        ((a = r({}, c)).__v = c.__v + 1),
                        j(
                            u,
                            c,
                            a,
                            n.__n,
                            void 0 !== u.ownerSVGElement,
                            null != c.__h ? [l] : null,
                            o,
                            null == l ? s(c) : l,
                            c.__h,
                            i,
                        ),
                        w(o, c, i),
                        c.__e != l && d(c)),
                    L.length > t && L.sort(U));
            p.__r = 0;
        }
        function g(e, t, n, r, o, i, c, u, d, f, p) {
            var g,
                m,
                v,
                _,
                O,
                C,
                w,
                N,
                S,
                x = 0,
                A = (r && r.__k) || G,
                I = A.length,
                E = I,
                R = t.length;
            for (n.__k = [], g = 0; g < R; g++)
                null !=
                (_ = n.__k[g] =
                    null == (_ = t[g]) ||
                    "boolean" == typeof _ ||
                    "function" == typeof _
                        ? null
                        : "string" == typeof _ ||
                            "number" == typeof _ ||
                            "bigint" == typeof _
                          ? a(null, _, null, null, _)
                          : q(_)
                            ? a(l, { children: _ }, null, null, null)
                            : _.__b > 0
                              ? a(
                                    _.type,
                                    _.props,
                                    _.key,
                                    _.ref ? _.ref : null,
                                    _.__v,
                                )
                              : _)
                    ? ((_.__ = n),
                      (_.__b = n.__b + 1),
                      -1 === (N = y(_, A, (w = g + x), E))
                          ? (v = F)
                          : ((v = A[N] || F), (A[N] = void 0), E--),
                      j(e, _, v, o, i, c, u, d, f, p),
                      (O = _.__e),
                      (m = _.ref) &&
                          v.ref != m &&
                          (v.ref && k(v.ref, null, _),
                          p.push(m, _.__c || O, _)),
                      null != O &&
                          (null == C && (C = O),
                          (S = v === F || null === v.__v)
                              ? -1 == N && x--
                              : N !== w &&
                                (N === w + 1
                                    ? x++
                                    : N > w
                                      ? E > R - w
                                          ? (x += N - w)
                                          : x--
                                      : (x = N < w && N == w - 1 ? N - w : 0)),
                          (w = g + x),
                          "function" != typeof _.type ||
                          (N === w && v.__k !== _.__k)
                              ? "function" == typeof _.type || (N === w && !S)
                                  ? void 0 !== _.__d
                                      ? ((d = _.__d), (_.__d = void 0))
                                      : (d = O.nextSibling)
                                  : (d = h(e, O, d))
                              : (d = b(_, d, e)),
                          "function" == typeof n.type && (n.__d = d)))
                    : (v = A[g]) &&
                      null == v.key &&
                      v.__e &&
                      (v.__e == d && (d = s(v)), T(v, v, !1), (A[g] = null));
            for (n.__e = C, g = I; g--; )
                null != A[g] &&
                    ("function" == typeof n.type &&
                        null != A[g].__e &&
                        A[g].__e == n.__d &&
                        (n.__d = A[g].__e.nextSibling),
                    T(A[g], A[g]));
        }
        function b(e, t, n) {
            for (var r, o = e.__k, i = 0; o && i < o.length; i++)
                (r = o[i]) &&
                    ((r.__ = e),
                    (t =
                        "function" == typeof r.type
                            ? b(r, t, n)
                            : h(n, r.__e, t)));
            return t;
        }
        function m(e, t) {
            return (
                (t = t || []),
                null == e ||
                    "boolean" == typeof e ||
                    (q(e)
                        ? e.some(function (e) {
                              m(e, t);
                          })
                        : t.push(e)),
                t
            );
        }
        function h(e, t, n) {
            return (
                null == n || n.parentNode !== e
                    ? e.insertBefore(t, null)
                    : (t == n && null != t.parentNode) || e.insertBefore(t, n),
                t.nextSibling
            );
        }
        function y(e, t, n, r) {
            var o = e.key,
                i = e.type,
                a = n - 1,
                c = n + 1,
                l = t[n];
            if (null === l || (l && o == l.key && i === l.type)) return n;
            if (r > (null != l ? 1 : 0))
                for (; a >= 0 || c < t.length; ) {
                    if (a >= 0) {
                        if ((l = t[a]) && o == l.key && i === l.type) return a;
                        a--;
                    }
                    if (c < t.length) {
                        if ((l = t[c]) && o == l.key && i === l.type) return c;
                        c++;
                    }
                }
            return -1;
        }
        function v(e, t, n) {
            "-" === t[0]
                ? e.setProperty(t, null == n ? "" : n)
                : (e[t] =
                      null == n
                          ? ""
                          : "number" != typeof n || X.test(t)
                            ? n
                            : n + "px");
        }
        function _(e, t, n, r, o) {
            var i;
            e: if ("style" === t)
                if ("string" == typeof n) e.style.cssText = n;
                else {
                    if (("string" == typeof r && (e.style.cssText = r = ""), r))
                        for (t in r) (n && t in n) || v(e.style, t, "");
                    if (n)
                        for (t in n)
                            (r && n[t] === r[t]) || v(e.style, t, n[t]);
                }
            else if ("o" === t[0] && "n" === t[1])
                ((i =
                    t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1"))),
                    (t =
                        t.toLowerCase() in e
                            ? t.toLowerCase().slice(2)
                            : t.slice(2)),
                    e.l || (e.l = {}),
                    (e.l[t + i] = n),
                    n
                        ? r || e.addEventListener(t, i ? C : O, i)
                        : e.removeEventListener(t, i ? C : O, i));
            else if ("dangerouslySetInnerHTML" !== t) {
                if (o) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                else if (
                    "width" !== t &&
                    "height" !== t &&
                    "href" !== t &&
                    "list" !== t &&
                    "form" !== t &&
                    "tabIndex" !== t &&
                    "download" !== t &&
                    "rowSpan" !== t &&
                    "colSpan" !== t &&
                    t in e
                )
                    try {
                        e[t] = null == n ? "" : n;
                        break e;
                    } catch (e) {}
                "function" == typeof n ||
                    (null == n || (!1 === n && "-" !== t[4])
                        ? e.removeAttribute(t)
                        : e.setAttribute(t, n));
            }
        }
        function O(e) {
            return this.l[e.type + !1](P.event ? P.event(e) : e);
        }
        function C(e) {
            return this.l[e.type + !0](P.event ? P.event(e) : e);
        }
        function j(e, t, n, o, i, a, c, s, d, f) {
            var p,
                b,
                m,
                h,
                y,
                v,
                _,
                O,
                C,
                j,
                w,
                k,
                T,
                x,
                A,
                I = t.type;
            if (void 0 !== t.constructor) return null;
            (null != n.__h &&
                ((d = n.__h), (s = t.__e = n.__e), (t.__h = null), (a = [s])),
                (p = P.__b) && p(t));
            e: if ("function" == typeof I)
                try {
                    if (
                        ((O = t.props),
                        (C = (p = I.contextType) && o[p.__c]),
                        (j = p ? (C ? C.props.value : p.__) : o),
                        n.__c
                            ? (_ = (b = t.__c = n.__c).__ = b.__E)
                            : ("prototype" in I && I.prototype.render
                                  ? (t.__c = b = new I(O, j))
                                  : ((t.__c = b = new u(O, j)),
                                    (b.constructor = I),
                                    (b.render = S)),
                              C && C.sub(b),
                              (b.props = O),
                              b.state || (b.state = {}),
                              (b.context = j),
                              (b.__n = o),
                              (m = b.__d = !0),
                              (b.__h = []),
                              (b._sb = [])),
                        null == b.__s && (b.__s = b.state),
                        null != I.getDerivedStateFromProps &&
                            (b.__s == b.state && (b.__s = r({}, b.__s)),
                            r(b.__s, I.getDerivedStateFromProps(O, b.__s))),
                        (h = b.props),
                        (y = b.state),
                        (b.__v = t),
                        m)
                    )
                        (null == I.getDerivedStateFromProps &&
                            null != b.componentWillMount &&
                            b.componentWillMount(),
                            null != b.componentDidMount &&
                                b.__h.push(b.componentDidMount));
                    else {
                        if (
                            (null == I.getDerivedStateFromProps &&
                                O !== h &&
                                null != b.componentWillReceiveProps &&
                                b.componentWillReceiveProps(O, j),
                            !b.__e &&
                                ((null != b.shouldComponentUpdate &&
                                    !1 ===
                                        b.shouldComponentUpdate(O, b.__s, j)) ||
                                    t.__v === n.__v))
                        ) {
                            for (
                                t.__v !== n.__v &&
                                    ((b.props = O),
                                    (b.state = b.__s),
                                    (b.__d = !1)),
                                    t.__e = n.__e,
                                    t.__k = n.__k,
                                    t.__k.forEach(function (e) {
                                        e && (e.__ = t);
                                    }),
                                    w = 0;
                                w < b._sb.length;
                                w++
                            )
                                b.__h.push(b._sb[w]);
                            ((b._sb = []), b.__h.length && c.push(b));
                            break e;
                        }
                        (null != b.componentWillUpdate &&
                            b.componentWillUpdate(O, b.__s, j),
                            null != b.componentDidUpdate &&
                                b.__h.push(function () {
                                    b.componentDidUpdate(h, y, v);
                                }));
                    }
                    if (
                        ((b.context = j),
                        (b.props = O),
                        (b.__P = e),
                        (b.__e = !1),
                        (k = P.__r),
                        (T = 0),
                        "prototype" in I && I.prototype.render)
                    ) {
                        for (
                            b.state = b.__s,
                                b.__d = !1,
                                k && k(t),
                                p = b.render(b.props, b.state, b.context),
                                x = 0;
                            x < b._sb.length;
                            x++
                        )
                            b.__h.push(b._sb[x]);
                        b._sb = [];
                    } else
                        do {
                            ((b.__d = !1),
                                k && k(t),
                                (p = b.render(b.props, b.state, b.context)),
                                (b.state = b.__s));
                        } while (b.__d && ++T < 25);
                    ((b.state = b.__s),
                        null != b.getChildContext &&
                            (o = r(r({}, o), b.getChildContext())),
                        m ||
                            null == b.getSnapshotBeforeUpdate ||
                            (v = b.getSnapshotBeforeUpdate(h, y)),
                        g(
                            e,
                            q(
                                (A =
                                    null != p && p.type === l && null == p.key
                                        ? p.props.children
                                        : p),
                            )
                                ? A
                                : [A],
                            t,
                            n,
                            o,
                            i,
                            a,
                            c,
                            s,
                            d,
                            f,
                        ),
                        (b.base = t.__e),
                        (t.__h = null),
                        b.__h.length && c.push(b),
                        _ && (b.__E = b.__ = null));
                } catch (e) {
                    ((t.__v = null),
                        (d || null != a) &&
                            ((t.__e = s),
                            (t.__h = !!d),
                            (a[a.indexOf(s)] = null)),
                        P.__e(e, t, n));
                }
            else
                null == a && t.__v === n.__v
                    ? ((t.__k = n.__k), (t.__e = n.__e))
                    : (t.__e = N(n.__e, t, n, o, i, a, c, d, f));
            (p = P.diffed) && p(t);
        }
        function w(e, t, n) {
            for (var r = 0; r < n.length; r++) k(n[r], n[++r], n[++r]);
            (P.__c && P.__c(t, e),
                e.some(function (t) {
                    try {
                        ((e = t.__h),
                            (t.__h = []),
                            e.some(function (e) {
                                e.call(t);
                            }));
                    } catch (e) {
                        P.__e(e, t.__v);
                    }
                }));
        }
        function N(e, t, n, r, i, a, c, l, u) {
            var d,
                f,
                p,
                b = n.props,
                m = t.props,
                h = t.type,
                y = 0;
            if (("svg" === h && (i = !0), null != a))
                for (; y < a.length; y++)
                    if (
                        (d = a[y]) &&
                        "setAttribute" in d == !!h &&
                        (h ? d.localName === h : 3 === d.nodeType)
                    ) {
                        ((e = d), (a[y] = null));
                        break;
                    }
            if (null == e) {
                if (null === h) return document.createTextNode(m);
                ((e = i
                    ? document.createElementNS("http://www.w3.org/2000/svg", h)
                    : document.createElement(h, m.is && m)),
                    (a = null),
                    (l = !1));
            }
            if (null === h) b === m || (l && e.data === m) || (e.data = m);
            else {
                if (
                    ((a = a && R.call(e.childNodes)),
                    (f = (b = n.props || F).dangerouslySetInnerHTML),
                    (p = m.dangerouslySetInnerHTML),
                    !l)
                ) {
                    if (null != a)
                        for (b = {}, y = 0; y < e.attributes.length; y++)
                            b[e.attributes[y].name] = e.attributes[y].value;
                    (p || f) &&
                        ((p &&
                            ((f && p.__html == f.__html) ||
                                p.__html === e.innerHTML)) ||
                            (e.innerHTML = (p && p.__html) || ""));
                }
                if (
                    ((function (e, t, n, r, o) {
                        var i;
                        for (i in n)
                            "children" === i ||
                                "key" === i ||
                                i in t ||
                                _(e, i, null, n[i], r);
                        for (i in t)
                            (o && "function" != typeof t[i]) ||
                                "children" === i ||
                                "key" === i ||
                                "value" === i ||
                                "checked" === i ||
                                n[i] === t[i] ||
                                _(e, i, t[i], n[i], r);
                    })(e, m, b, i, l),
                    p)
                )
                    t.__k = [];
                else if (
                    (g(
                        e,
                        q((y = t.props.children)) ? y : [y],
                        t,
                        n,
                        r,
                        i && "foreignObject" !== h,
                        a,
                        c,
                        a ? a[0] : n.__k && s(n, 0),
                        l,
                        u,
                    ),
                    null != a)
                )
                    for (y = a.length; y--; ) null != a[y] && o(a[y]);
                l ||
                    ("value" in m &&
                        void 0 !== (y = m.value) &&
                        (y !== e.value ||
                            ("progress" === h && !y) ||
                            ("option" === h && y !== b.value)) &&
                        _(e, "value", y, b.value, !1),
                    "checked" in m &&
                        void 0 !== (y = m.checked) &&
                        y !== e.checked &&
                        _(e, "checked", y, b.checked, !1));
            }
            return e;
        }
        function k(e, t, n) {
            try {
                "function" == typeof e ? e(t) : (e.current = t);
            } catch (e) {
                P.__e(e, n);
            }
        }
        function T(e, t, n) {
            var r, i;
            if (
                (P.unmount && P.unmount(e),
                (r = e.ref) &&
                    ((r.current && r.current !== e.__e) || k(r, null, t)),
                null != (r = e.__c))
            ) {
                if (r.componentWillUnmount)
                    try {
                        r.componentWillUnmount();
                    } catch (e) {
                        P.__e(e, t);
                    }
                ((r.base = r.__P = null), (e.__c = void 0));
            }
            if ((r = e.__k))
                for (i = 0; i < r.length; i++)
                    r[i] && T(r[i], t, n || "function" != typeof e.type);
            (n || null == e.__e || o(e.__e), (e.__ = e.__e = e.__d = void 0));
        }
        function S(e, t, n) {
            return this.constructor(e, n);
        }
        function x(e, t, n) {
            var r, o, a, c;
            (P.__ && P.__(e, t),
                (o = (r = "function" == typeof n)
                    ? null
                    : (n && n.__k) || t.__k),
                (a = []),
                (c = []),
                j(
                    t,
                    (e = ((!r && n) || t).__k = i(l, null, [e])),
                    o || F,
                    F,
                    void 0 !== t.ownerSVGElement,
                    !r && n
                        ? [n]
                        : o
                          ? null
                          : t.firstChild
                            ? R.call(t.childNodes)
                            : null,
                    a,
                    !r && n ? n : o ? o.__e : t.firstChild,
                    r,
                    c,
                ),
                w(a, e, c));
        }
        function A(e, t) {
            x(e, t, A);
        }
        function I(e, t, n) {
            var o,
                i,
                c,
                l,
                u = r({}, e.props);
            for (c in (e.type &&
                e.type.defaultProps &&
                (l = e.type.defaultProps),
            t))
                "key" == c
                    ? (o = t[c])
                    : "ref" == c
                      ? (i = t[c])
                      : (u[c] = void 0 === t[c] && void 0 !== l ? l[c] : t[c]);
            return (
                arguments.length > 2 &&
                    (u.children =
                        arguments.length > 3 ? R.call(arguments, 2) : n),
                a(e.type, u, o || e.key, i || e.ref, null)
            );
        }
        function E(e, t) {
            var n = {
                __c: (t = "__cC" + B++),
                __: e,
                Consumer: function (e, t) {
                    return e.children(t);
                },
                Provider: function (e) {
                    var n, r;
                    return (
                        this.getChildContext ||
                            ((n = []),
                            ((r = {})[t] = this),
                            (this.getChildContext = function () {
                                return r;
                            }),
                            (this.shouldComponentUpdate = function (e) {
                                this.props.value !== e.value &&
                                    n.some(function (e) {
                                        ((e.__e = !0), f(e));
                                    });
                            }),
                            (this.sub = function (e) {
                                n.push(e);
                                var t = e.componentWillUnmount;
                                e.componentWillUnmount = function () {
                                    (n.splice(n.indexOf(e), 1), t && t.call(e));
                                };
                            })),
                        e.children
                    );
                },
            };
            return (n.Provider.__ = n.Consumer.contextType = n);
        }
        (n.d(t, "a", function () {
            return u;
        }),
            n.d(t, "b", function () {
                return l;
            }),
            n.d(t, "c", function () {
                return I;
            }),
            n.d(t, "d", function () {
                return E;
            }),
            n.d(t, "e", function () {
                return i;
            }),
            n.d(t, "f", function () {
                return c;
            }),
            n.d(t, "g", function () {
                return i;
            }),
            n.d(t, "h", function () {
                return A;
            }),
            n.d(t, "i", function () {
                return P;
            }),
            n.d(t, "j", function () {
                return x;
            }),
            n.d(t, "k", function () {
                return m;
            }));
        var R,
            P,
            M,
            L,
            D,
            H,
            U,
            B,
            F = {},
            G = [],
            X =
                /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
            q = Array.isArray;
        ((R = G.slice),
            (P = {
                __e: function (e, t, n, r) {
                    for (var o, i, a; (t = t.__); )
                        if ((o = t.__c) && !o.__)
                            try {
                                if (
                                    ((i = o.constructor) &&
                                        null != i.getDerivedStateFromError &&
                                        (o.setState(
                                            i.getDerivedStateFromError(e),
                                        ),
                                        (a = o.__d)),
                                    null != o.componentDidCatch &&
                                        (o.componentDidCatch(e, r || {}),
                                        (a = o.__d)),
                                    a)
                                )
                                    return (o.__E = o);
                            } catch (t) {
                                e = t;
                            }
                    throw e;
                },
            }),
            (M = 0),
            (u.prototype.setState = function (e, t) {
                var n;
                ((n =
                    null != this.__s && this.__s !== this.state
                        ? this.__s
                        : (this.__s = r({}, this.state))),
                    "function" == typeof e && (e = e(r({}, n), this.props)),
                    e && r(n, e),
                    null != e && this.__v && (t && this._sb.push(t), f(this)));
            }),
            (u.prototype.forceUpdate = function (e) {
                this.__v && ((this.__e = !0), e && this.__h.push(e), f(this));
            }),
            (u.prototype.render = l),
            (L = []),
            (H =
                "function" == typeof Promise
                    ? Promise.prototype.then.bind(Promise.resolve())
                    : setTimeout),
            (U = function (e, t) {
                return e.__v.__b - t.__v.__b;
            }),
            (p.__r = 0),
            (B = 0));
    },
    "Pq/i": function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n("NMMh"),
            o = r.g,
            i = r.j,
            a = function (e) {
                return e && e.default ? e.default : e;
            };
        if ("function" == typeof a(n("/hs+"))) {
            var c =
                document.getElementById("preact_root") ||
                document.body.firstElementChild;
            (0,
                (function () {
                    var e = a(n("/hs+")),
                        t = {},
                        r = document.querySelector(
                            '[type="__PREACT_CLI_DATA__"]',
                        );
                    r &&
                        (t =
                            JSON.parse(decodeURI(r.innerHTML)).preRenderData ||
                            t);
                    var l;
                    t.url && (l = t.url);
                    i(
                        o(e, { CLI_DATA: { preRenderData: t } }),
                        document.body,
                        c,
                    );
                })());
        }
    },
    kPAj: function (e) {
        var t;
        ((e.exports = t = {}),
            (t.simpleFilter = function (e, n) {
                return n.filter(function (n) {
                    return t.test(e, n);
                });
            }),
            (t.test = function (e, n) {
                return null !== t.match(e, n);
            }),
            (t.match = function (e, t, n) {
                var r,
                    o = 0,
                    i = [],
                    a = t.length,
                    c = 0,
                    l = 0,
                    u = (n = n || {}).pre || "",
                    s = n.post || "",
                    d = (n.caseSensitive && t) || t.toLowerCase();
                e = (n.caseSensitive && e) || e.toLowerCase();
                for (var f = 0; f < a; f++)
                    ((r = t[f]),
                        d[f] === e[o]
                            ? ((r = u + r + s), (o += 1), (l += 1 + l))
                            : (l = 0),
                        (c += l),
                        (i[i.length] = r));
                return o === e.length
                    ? ((c = d === e ? 1 / 0 : c),
                      { rendered: i.join(""), score: c })
                    : null;
            }),
            (t.filter = function (e, n, r) {
                return n && 0 !== n.length
                    ? "string" != typeof e
                        ? n
                        : ((r = r || {}),
                          n
                              .reduce(function (n, o, i) {
                                  var a = o;
                                  r.extract && (a = r.extract(o));
                                  var c = t.match(e, a, r);
                                  return (
                                      null != c &&
                                          (n[n.length] = {
                                              string: c.rendered,
                                              score: c.score,
                                              index: i,
                                              original: o,
                                          }),
                                      n
                                  );
                              }, [])
                              .sort(function (e, t) {
                                  var n = t.score - e.score;
                                  return n || e.index - t.index;
                              }))
                    : [];
            }));
    },
    nr9d: function (e) {
        "use strict";
        function t(e) {
            var t = Object.prototype.toString.call(e);
            return (
                "[object RegExp]" === t ||
                "[object Date]" === t ||
                (function (e) {
                    return e.$$typeof === u;
                })(e)
            );
        }
        function n(e, t) {
            return !1 !== t.clone && t.isMergeableObject(e)
                ? c(Array.isArray(e) ? [] : {}, e, t)
                : e;
        }
        function r(e, t, r) {
            return e.concat(t).map(function (e) {
                return n(e, r);
            });
        }
        function o(e) {
            return Object.keys(e).concat(
                (function (e) {
                    return Object.getOwnPropertySymbols
                        ? Object.getOwnPropertySymbols(e).filter(function (t) {
                              return Object.propertyIsEnumerable.call(e, t);
                          })
                        : [];
                })(e),
            );
        }
        function i(e, t) {
            try {
                return t in e;
            } catch (e) {
                return !1;
            }
        }
        function a(e, t, r) {
            var a = {};
            return (
                r.isMergeableObject(e) &&
                    o(e).forEach(function (t) {
                        a[t] = n(e[t], r);
                    }),
                o(t).forEach(function (o) {
                    (function (e, t) {
                        return (
                            i(e, t) &&
                            !(
                                Object.hasOwnProperty.call(e, t) &&
                                Object.propertyIsEnumerable.call(e, t)
                            )
                        );
                    })(e, o) ||
                        (a[o] =
                            i(e, o) && r.isMergeableObject(t[o])
                                ? (function (e, t) {
                                      if (!t.customMerge) return c;
                                      var n = t.customMerge(e);
                                      return "function" == typeof n ? n : c;
                                  })(o, r)(e[o], t[o], r)
                                : n(t[o], r));
                }),
                a
            );
        }
        function c(e, t, o) {
            (((o = o || {}).arrayMerge = o.arrayMerge || r),
                (o.isMergeableObject = o.isMergeableObject || l),
                (o.cloneUnlessOtherwiseSpecified = n));
            var i = Array.isArray(t);
            return i === Array.isArray(e)
                ? i
                    ? o.arrayMerge(e, t, o)
                    : a(e, t, o)
                : n(t, o);
        }
        var l = function (e) {
                return (
                    (function (e) {
                        return !!e && "object" == typeof e;
                    })(e) && !t(e)
                );
            },
            u =
                "function" == typeof Symbol && Symbol.for
                    ? Symbol.for("react.element")
                    : 60103;
        ((c.all = function (e, t) {
            if (!Array.isArray(e))
                throw new Error("first argument should be an array");
            return e.reduce(function (e, n) {
                return c(e, n, t);
            }, {});
        }),
            (e.exports = c));
    },
});
//# sourceMappingURL=index.js.map
