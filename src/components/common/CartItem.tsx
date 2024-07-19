import { useCart } from "../../context/CartContext";
import { CartItem as TypeCartItem } from "../../types";

interface Props {
  item: TypeCartItem;
}

export const CartItem = ({ item }: Props) => {
  const { removeItem, increaseQuantity, decreaseQuantity } = useCart();

  const itemSubtotal = item.price * item.quantity;

  return (
    <div className="border border-gray-300 shadow-md rounded w-full md:w-auto gap-2 p-4 flex sm:flex-row flex-col justify-between mb-4">
      {/* image + content */}
      <div className="flex gap-3">
        <div className="w-[200px] h-[150px]">
          <img
            src={item.image}
            alt=""
            className="w-full h-full object-cover "
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold">{item.title}</h1>
          <p className="text-slate-500">Subtotal: ${itemSubtotal}</p>
        </div>
      </div>
      {/* buttons */}
      <div className="sm:self-stretch self-end flex flex-col gap-3">
        <div className="flex items-baseline w-36 ">
          <button
            className="bg-slate-200 border border-1 w-full transition-all hover:bg-slate-300"
            onClick={() => decreaseQuantity(item.id)}
          >
            -
          </button>
          <span className="block border border-1 w-full text-center">
            {item.quantity}
          </span>
          <button
            className="bg-slate-200 border border-1 w-full transition-all hover:bg-slate-300"
            onClick={() => increaseQuantity(item.id)}
          >
            +
          </button>
        </div>
        <div className="mx-auto flex gap-2 mt-4">
          <span className="block">${item.price}</span>
          <button className="" onClick={() => removeItem(item.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              fill="currentColor"
              width="20"
              height="20"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
