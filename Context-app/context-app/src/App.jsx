import React from "react";
import { ThemeProvider } from "./Component/ThemeContext";
import ThemSwitcher from "./Component/ThemSwitcher";
import PageContent from "./Component/PageContent";

const App = () => {
  return (
    <ThemeProvider>
      <ThemSwitcher />
      <PageContent />
    </ThemeProvider>
  );
};

export default App;
