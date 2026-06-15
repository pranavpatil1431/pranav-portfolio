import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "gaming";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "dark",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "portfolio-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove any known theme classes
    root.classList.remove("light", "dark", "gaming");

    // Add the new theme class
    root.classList.add(theme);

    // Save the theme preference to localStorage
    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  const value = {
    theme,
    setTheme: (theme: Theme) => setTheme(theme),
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const nextTheme = () => {
    if (theme === "light") return "dark";
    if (theme === "dark") return "gaming";
    return "light";
  };

  return (
    <button
      onClick={() => setTheme(nextTheme())}
      className="fixed bottom-24 right-6 z-50 bg-gradient-to-r from-primary to-secondary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-all duration-300"
      aria-label={`Switch theme (current: ${theme})`}
      title={`Switch theme (current: ${theme})`}
    >
      {theme === "light" ? (
        <i className="fas fa-moon"></i>
      ) : theme === "dark" ? (
        <i className="fas fa-gamepad"></i>
      ) : (
        <i className="fas fa-sun"></i>
      )}
    </button>
  );
}
