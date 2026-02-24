interface Window {
    turnstile?: {
        render: (
            element: HTMLElement,
            options: {
                sitekey: string;
                appearance?: "always" | "execute" | "interaction-only";
                callback: (token: string) => void;
                "error-callback"?: (error: unknown) => void;
                "expired-callback"?: () => void;
                "timeout-callback"?: () => void;
            },
        ) => string;
        reset: (widgetId?: string) => void;
        remove: (widgetId?: string) => void;
    };
}
