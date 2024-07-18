import { Link } from "react-router-dom";
import { IProduct } from "../../pages";
import { useCart } from "../../context/cart-context";

interface Props {
  product: IProduct
}

export const Product = ({product}: Props) => {
  const { items, addItem, removeItem, clearCart } = useCart();

  return (
    <div className="p-5 bg-secondary-background rounded-lg text-white">
      <img src={product.image} alt="" className="mb-4 w-full h-[350px] object-cover" />
    <p className="mb-5">{product.description.substring(0,100)}</p>
    <div className="flex justify-between items-center  ">
      <span>${product.price}</span>{" "}
      <button onClick={()=> addItem({id: product.id, title: product.title, price: product.price, quantity: 1})} className="p-2 rounded bg-blue-600 ">
        Add to Card
      </button>
    </div>
  </div>
  );
};
