import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home({ products, addOrder }) {
  const navigate = useNavigate();

  const handleRequest = (product) => {
    addOrder(product);
    navigate("/orders");
  };

  return (
    <div>
      <h2>Available Products</h2>

      <div className="products">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <p>Category: {product.category}</p>

            <button onClick={() => handleRequest(product)}>
              Request
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
