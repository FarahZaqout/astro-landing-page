export const applyTheme = (theme) => {
    const root = document.documentElement;
    root.style.setProperty("--text-primary", theme.textPrimary);
    root.style.setProperty("--text-secondary", theme.textSecondary);
    root.style.setProperty("--bg-confider-bgPrimary", theme.bg - blue - 500);
    root.style.setProperty("--bg-secondary", theme.bgSecondary);
};
