import { createContext, useState } from "react";

// Step 1: Create the context
export const ThemeContext = createContext(); // Call createContext()

// Step 2: Create the provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Light theme by default

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} {/* Provide theme data to children */}
    </ThemeContext.Provider>
  );
};
