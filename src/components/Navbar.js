import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/login">Login</Link> |{" "}
      <Link to="/orders">Orders</Link>
      <Link to="/add">Add Product</Link>
    </nav>
  );
}

export default Navbar;
