import { Link } from "react-router-dom";

export const Product = () => {
  return (
    <div className="p-3 bg-secondary-background rounded text-white">
      <img src="https://placehold.co/600x400" alt="" className="mb-4" />
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nobis
        esse nostrum nisi excepturi consequatur a, temporibus dicta fuga, minima
        atque architecto, quis minus numquam autem perferendis deleniti modi
        illo.
      </p>
      <div className="flex justify-between items-center  ">
        <span>$44</span>{" "}
        <Link to="/cart" className="p-2 rounded bg-blue-600 ">
          Add to Card
        </Link>
      </div>
    </div>
  );
};
