import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '../pages/RootLayout.jsx';
import Home from '../pages/Home/Home.jsx';
import Post from '../pages/Post/Post.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // 공통 레이아웃
    // errorElement: <ErrorPage />, // 에러 발생 시 공통 처리
    children: [
      { path: "/", element: <Home /> },
      { path: "/post/:slug", element: <Post /> },
    ],
  },
]);

export default router;
