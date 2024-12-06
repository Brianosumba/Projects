import { useTheme } from "../context/ThemeContext";
import "../styles/ThemeButton.css";
const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeButton;
