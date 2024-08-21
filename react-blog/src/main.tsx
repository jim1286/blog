import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import isValidProp from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 1000 * 60 * 5,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StyleSheetManager shouldForwardProp={isValidProp}>
    <QueryClientProvider client={queryClient}>
      {import.meta.env.DEV && <ReactQueryDevtools />}
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StyleSheetManager>
);
