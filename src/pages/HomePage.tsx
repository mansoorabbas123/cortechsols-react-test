import useFetch from "../custom-hooks/useFetch";
import { base_url } from "../config";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ProductList } from "../components/common";
export interface IProduct {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

export const HomePage = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetch<IProduct[]>(`${base_url}/products`);

  const render_products = () => {
    if (error) {
      return <div>error</div>;
    } else if (loading) {
      return (
        <div className="products-wrapper">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((el: number) => (
            <Skeleton key={el} height={400} className="rounded-lg" />
          ))}
        </div>
      );
    } else {
      return <ProductList products={products} />;
    }
  };

  return (
    <div className="container mx-auto rounded-lg">
      <h1 className="text-primary-color font-bold mt-12 mb-5">All Products</h1>
      {render_products()}
    </div>
  );
};
