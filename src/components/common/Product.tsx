import { useNavigate } from "react-router-dom";
import { IProduct } from "../../pages";
import { useCart } from "../../context/CartContext";

interface Props {
  product: IProduct;
}

export const Product = ({ product }: Props) => {
  const { addItem } = useCart();
  const navigate = useNavigate();

  const addToCartHandler = (product: IProduct) => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
    navigate("/cart");
  };

  return (
    <div className="p-5 bg-secondary-background rounded-lg text-white">
      <img
        src={product.image}
        alt=""
        className="mb-4 w-full h-[350px] object-cover"
      />
      <p className="mb-5">{product.description.substring(0, 100)}</p>
      <div className="flex justify-between items-center  ">
        <span>${product.price}</span>{" "}
        <button
          onClick={() => addToCartHandler(product)}
          className="p-2 rounded bg-primary text-foreground hover:opacity-80 transition-all"
        >
          Add to Card
        </button>
      </div>
    </div>
  );
};
