import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="dark">
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </div>
  );
}

export default App;
