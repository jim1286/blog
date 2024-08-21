import { Outlet } from "react-router-dom";
import styled, { DefaultTheme, ThemeProvider } from "styled-components";
import { theme as CustomTheme } from "@/theme";

function App() {
  const colorMode: DefaultTheme = CustomTheme.light;

  return (
    <ThemeProvider theme={colorMode}>
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  overflow-y: scroll;
  width: 100vw;
  min-width: 800px;
  height: 100vh;
`;
