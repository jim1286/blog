import App from "@/app/App";
import { BaseMainPage, PrivateRoute } from "@/hoc";
import { RecentPage, MyPostPage } from "@/pages";
import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "", // 루트 경로
    element: <App />,
    children: [
      {
        path: "", // BaseMainPage가 렌더링되는 경로
        element: <BaseMainPage />,
        children: [
          {
            path: "", // 기본 경로에서 recent로 리다이렉션
            element: <Navigate to="recent" />, // 상대 경로로 수정
          },
          {
            path: "recent", // 상대 경로로 수정
            element: <RecentPage />,
          },
          {
            path: "my", // 상대 경로로 수정
            element: <PrivateRoute />,
            children: [
              {
                path: "", // /my 경로에서 post로 리다이렉션
                element: <Navigate to="post" />, // 상대 경로로 수정
              },
              {
                path: "post", // 상대 경로로 수정
                element: <MyPostPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
