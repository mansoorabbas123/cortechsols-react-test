import { IProduct } from "../../pages";
import { Product } from "./Product";

interface Props {
  products: IProduct[] | null
}

export const ProductList = ({products}: Props) => {
  return (
    <div className="products-wrapper">
      {products && products.map((product: IProduct) => (
        <Product key={product.id} product={product}/>
      ))}
    </div>
  );
};
