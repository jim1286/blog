import { Outlet } from "react-router-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { theme as CustomTheme } from "@/theme";
import { Container } from "./styles";
import { ToastContainer } from "react-toastify";
import { NotificationIcon } from "@/components";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const colorMode: DefaultTheme = CustomTheme.light;

  return (
    <ThemeProvider theme={colorMode}>
      <Container>
        <ToastContainer
          icon={({ type }) => <NotificationIcon type={type} />}
          autoClose={3000}
          position="bottom-right"
          style={{ width: "410px" }}
          stacked
        />
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}

export default App;
