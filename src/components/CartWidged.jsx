import cart from "../assets/cart.svg";
import { Link } from "react-router-dom";
export const CartWidget = () => {
  return (
    <Link to="/cart">
      <img src={cart} alt="" width={30}/>
      <span>7</span>
    </Link>
  );
};
