import App from "@/app/App";
import { BaseMainPage } from "@/hoc";
import { RecentPage, TrendPage } from "@/pages";
import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <BaseMainPage />,
        children: [
          {
            path: "/",
            element: <Navigate to={"recent"} />,
          },
          {
            path: "/recent",
            element: <RecentPage />,
          },
          {
            path: "/trend",
            element: <TrendPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
