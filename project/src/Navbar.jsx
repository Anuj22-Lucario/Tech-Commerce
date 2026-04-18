import { Link } from "react-router-dom";

export default function Navbar({ cartItems = [] }) {

  const totalItems = cartItems? cartItems.reduce((acc, item) => acc + item.quantity, 0) : 0;

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          Tech Commerce
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <Link to="/cart" className="cart" style={{ textDecoration: "none" }}>
        Cart ({totalItems}) <i class="fa-solid fa-cart-shopping"></i>
      </Link>
    </nav>
  );
}
