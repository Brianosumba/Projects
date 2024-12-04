import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); //Access theme and toggle function
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemSwitcher;
