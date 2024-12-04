import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const PageContent = () => {
  const { theme } = useContext(ThemeContext);

  const pageStyles = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    textAlign: "center",
  };
  return (
    <div style={pageStyles}>
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
      <p>This is a demonstration of using useContext in React</p>
    </div>
  );
};

export default PageContent;
