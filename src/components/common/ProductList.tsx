import { Product } from "./Product";

export const ProductList = () => {
  return (
    <div className="products-wrapper">
      {Array.from({ length: 30 }, (_, i) => i + 1).map((el: number) => (
        <Product key={el} />
      ))}
    </div>
  );
};
