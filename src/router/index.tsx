import { createBrowserRouter } from "react-router-dom";
import HomePage from "../views/home";
import RootLayout from "../layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "/", element: <HomePage /> }],
  },
]);

export default router;
