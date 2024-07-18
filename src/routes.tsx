import { createBrowserRouter } from "react-router-dom";
import { CartPage, HomePage, LoginPage, RegisterPage } from "./pages";
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
      {
        path: "cart",
        element: <CartPage />
      }
    ],
  },
]);

export default router;
