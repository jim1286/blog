import { Outlet } from "react-router-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { theme as CustomTheme } from "@/theme";

function App() {
  const colorMode: DefaultTheme = CustomTheme.light;

  return (
    <ThemeProvider theme={colorMode}>
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
