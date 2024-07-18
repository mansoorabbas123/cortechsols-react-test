import { useCart } from "../context/cart-context";

export const CartPage = () => {
    const { items, addItem, removeItem, clearCart } = useCart();
    console.log("cart items::",items);

  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-bold mb-6">Cart Items</h1>
      <div className="flex flex-col md:flex-row justify-center gap-4 items-center md:items-stretch">
        <div className="basis-full md:basis-3/6 border border-gray-300 shadow-md rounded w-full md:w-auto flex sm:flex-row flex-col justify-between gap-2 p-4 ">
          {/* image + content */}
          <div className="flex gap-3">
            <div className="w-[200px]">
              <img
                src="https://placehold.co/600x400"
                alt=""
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold">
                This is some dummy title
              </h1>
              <p className="text-slate-500">Subtotal: $71.00</p>
            </div>
          </div>
          {/* buttons */}
          <div className="sm:self-stretch self-end flex flex-col gap-3">
            <div className="flex items-baseline w-36 ">
              <button className="bg-slate-200 border border-1 w-full transition-all hover:bg-slate-300">
                -
              </button>
              <span className="block border border-1 w-full text-center">
                1
              </span>
              <button className="bg-slate-200 border border-1 w-full transition-all hover:bg-slate-300">
                +
              </button>
            </div>
            <div className="mx-auto flex gap-2 mt-4">
              <span className="block">$71</span>
              <button className="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"
              width="20"
              height="20">
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="basis-full md:basis-1/6 border border-gray-300 shadow-md w-full md:w-auto p-4">
          <div className="flex justify-between my-2">
              <span className="block text-slate-500">Subtotal</span>
              <span className="block text-slate-500">$10.00</span>
          </div>
          <div className="flex justify-between my-2">
              <span className="block text-slate-500">Shipping</span>
              <span className="block text-slate-500">$4.00</span>
          </div>
          <div className="border border-1 w-full"></div>
          <div className="flex justify-between my-2">
              <span className="block font-semibold">Total</span>
              <div>
              <span className="block font-semibold">$114.99 USD</span>
              <span className="block text-slate-500 text-xs">including VAT</span>
              </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
