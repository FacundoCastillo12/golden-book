import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const THEME_KEY = "myTheme";

const useDarkMode = (): [boolean, () => void] => {
  const [theme, setTheme] = useLocalStorage<string>(THEME_KEY, "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return [theme === "dark", toggleTheme];
};

export default useDarkMode;
