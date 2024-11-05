import App from "@/app/App";
import { BaseMainPage, PrivateRoute } from "@/hoc";
import { RecentPage, MyPostPage, CreatePostPage, PostPage } from "@/pages";
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
            element: <Navigate to="recent" />,
          },
          {
            path: "recent",
            element: <RecentPage />,
          },
          {
            path: "my",
            element: <PrivateRoute />,
            children: [
              {
                path: "", // /my 경로에서 post로 리다이렉션
                element: <Navigate to="post" />,
              },
              {
                path: "post",
                element: <MyPostPage />,
              },
              {
                path: "create",
                element: <CreatePostPage />,
              },
            ],
          },
        ],
      },
      {
        path: "post/:postId",
        element: <PostPage />,
      },
    ],
  },
]);

export default router;
