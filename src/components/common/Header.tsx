import { NavLink, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    const savedCreds: any = localStorage.getItem("creds")
      ? JSON.parse(localStorage.getItem("creds") as any)
      : null;
    if (savedCreds) {
      delete savedCreds.token;
      localStorage.setItem("creds", JSON.stringify(savedCreds));
      navigate("/login");
    }
  };

  return (
    <header className="bg-secondary-background text-foreground p-2 md:px-20 px-2">
      <div className="container flex justify-between items-center  mx-auto">
        <div className="flex items-center gap-3">
          <NavLink to="categories">Categories</NavLink>
          <NavLink to="/">All Products</NavLink>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => navigate("/cart")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
              width="24"
              height="24"
            >
              <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
          </button>
          <button
            className="py-1 px-3 rounded bg-red-600 text-white"
            onClick={logoutHandler}
          >
            Logout
          </button>
          <div className="w-9 h-9 rounded-full bg-green-500"></div>
        </div>
      </div>
    </header>
  );
};
