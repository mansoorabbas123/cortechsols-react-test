import useFetch from "../custom-hooks/useFetch";
import { base_url } from "../config";
import { Link } from "react-router-dom";

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
    <div>
      <h1 className="text-primary-color font-bold">Home page</h1>
      <Link to="login">Login page</Link>
    </div>
  );
};
