import { CartItem } from "../components/common/CartItem";
import CheckoutButton from "../components/common/CheckoutButton";
import { useCart } from "../context/CartContext";

export const CartPage = () => {
  const { items } = useCart();
  const subtotal = items.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  const shippingCost = 4.0;
  const total = subtotal + shippingCost;

  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-bold mb-6">Cart Items</h1>
      {items && items.length > 0 ? (
        <div className="flex flex-col md:flex-row justify-center gap-4 items-center md:items-stretch">
          <div className="basis-full md:basis-3/6 ">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="basis-full md:basis-1/6 border border-gray-300 shadow-md w-full md:w-auto p-4 self-start">
            <div className="flex justify-between my-2">
              <span className="block text-slate-500">Subtotal</span>
              <span className="block text-slate-500">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between my-2">
              <span className="block text-slate-500">Shipping</span>
              <span className="block text-slate-500">
                ${shippingCost.toFixed(2)}
              </span>
            </div>
            <div className="border border-1 w-full"></div>
            <div className="flex justify-between my-2">
              <span className="block font-semibold">Total</span>
              <div>
                <span className="block font-semibold">
                  ${total.toFixed(2)} USD
                </span>
                <span className="block text-slate-500 text-xs">
                  including VAT
                </span>
              </div>
            </div>
            <CheckoutButton />
          </div>
        </div>
      ) : (
        <div className="text-4xl text-center text-slate-400 mt-20 border border-gray-300 shadow-md py-10">
          No Item
        </div>
      )}
    </div>
  );
};
