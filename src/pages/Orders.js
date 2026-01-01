import "./Orders.css";
function Orders({ orders, updateOrderStatus }) {
  return (
    <div>
      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        orders.map((order, index) => (
          <div className="order-card" key={index}>
            <h3>{order.name}</h3>
            <p>Price: ₹{order.price}</p>
            <p>Category: {order.category}</p>
            <p>Status: {order.status}</p>

            {order.status !== "Completed" && (
              <button onClick={() => updateOrderStatus(index)}>
                Next Status
              </button>
            )}

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;
