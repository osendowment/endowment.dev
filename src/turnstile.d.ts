interface Window {
    turnstile?: {
        render: (
            element: HTMLElement,
            options: {
                sitekey: string;
                callback: (token: string) => void;
            },
        ) => string;
        reset: (widgetId?: string) => void;
        remove: (widgetId?: string) => void;
    };
}
