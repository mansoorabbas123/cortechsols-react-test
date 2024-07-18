import { createBrowserRouter, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="login">Login page</Link>
      </div>
    ),
  },
  {
    path: "login",
    element: <LoginPage />,
  },
]);

export default router;
