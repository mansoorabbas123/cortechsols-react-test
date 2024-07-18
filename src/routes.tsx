import { createBrowserRouter } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "./pages";
import { ProtectedRoute } from "./components/common";

const router = createBrowserRouter([
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
