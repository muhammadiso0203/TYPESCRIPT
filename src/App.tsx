import { memo } from "react";
import { NavLink, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/cart";

const App = () => {
  return (
    <div>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/wishlist"}>Wishlist</NavLink>
      <NavLink to={"/cart"}>Cart</NavLink>
      {useRoutes([
        { path: "/", element: <Home /> },
        { path: "/wishlist", element: <Wishlist /> },
        { path: "/cart", element: <Cart /> },
      ])}
    </div>
  );
};

export default memo(App);
