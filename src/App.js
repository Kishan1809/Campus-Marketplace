import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import AddProduct from "./pages/AddProduct";

function App() {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts
      ? JSON.parse(savedProducts)
      : [
          { id: 1, name: "Cycle", price: 3000, category: "Transport" },
          { id: 2, name: "Calculator", price: 500, category: "Study" },
          { id: 3, name: "Chair", price: 800, category: "Furniture" }
        ];
  });

  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const addOrder = (product) => {
    setOrders([...orders, { ...product, status: "Requested" }]);
  };

  const updateOrderStatus = (index) => {
    const updatedOrders = [...orders];

    if (updatedOrders[index].status === "Requested") {
      updatedOrders[index].status = "Accepted";
    } else if (updatedOrders[index].status === "Accepted") {
      updatedOrders[index].status = "Completed";
    }

    setOrders(updatedOrders);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
        <Route
          path="/"
          element={<Home products={products} addOrder={addOrder} />}
        />
        <Route
          path="/add"
          element={<AddProduct addProduct={addProduct} />}
        />
        <Route
          path="/orders"
          element={
            <Orders
              orders={orders}
              updateOrderStatus={updateOrderStatus}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        </Routes>
      </div>  
    </BrowserRouter>
  );
}

export default App;
