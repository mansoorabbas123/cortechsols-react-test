import useFetch from "../custom-hooks/useFetch";
import { base_url } from "../config";
import { Link } from "react-router-dom";
import { ProductList } from "../components/common";

interface Product {
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
  } = useFetch<Product[]>(`${base_url}/products`);
  console.log("data", products);
  console.log("loading", loading);
  console.log("error", error);

  return (
    <div className="container mx-auto rounded-lg">
      <h1 className="text-primary-color font-bold mt-12 mb-5">All Products</h1>
      <ProductList />
    </div>
  );
};
