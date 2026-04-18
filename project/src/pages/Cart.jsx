import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, addToCart, removeFromCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => {
    const price =
      typeof item.price === "string"
        ? Number(item.price.replace(/,/g, ""))
        : item.price;
    return acc + price * item.quantity;
  }, 0);

  return (
    <div className="cart-container" style={{ padding: "20px", color: "white" }}>
      <h2 style={{ color: "cyan", textAlign: "center" }}>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            marginTop: "80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <h3>Oops! Your cart is empty.</h3>
          <Link
            to="/"
            style={{
              color: "cyan",
              textDecoration: "none",
              border: "1px solid cyan",
              padding: "15px 30px",
              borderRadius: "8px",
              fontSize: "1.1rem",
              transition: "0.3s",
            }}
            className="go-shoping"
          >
            GO SHOPING
          </Link>
        </div>
      ) : (
        <div
          className="cart-item-list"
          style={{ maxWidth: "1000px", margin: "0 auto" }}
        >
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="cart-item"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #333",
                padding: "15px 0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  width: "40%",
                }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: "80px", borderRadius: "8px" }}
                />
                <div>
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  width: "30%",
                  justifyContent: "center",
                }}
              >
                <button
                  onClick={() => removeFromCart(item)}
                  style={{
                    padding: "5px 12px",
                    backgroundColor: "#ff4d4d",
                    border: "none",
                    color: "white",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                >
                  -
                </button>

                <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  {item.quantity}
                </span>

                <button
                  onClick={() => addToCart(item)}
                  style={{
                    padding: "5px 12px",
                    backgroundColor: "cyan",
                    border: "none",
                    color: "black",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                >
                  +
                </button>
              </div>

              <div style={{ width: "30%", textAlign: "right" }}>
                <p style={{ fontWeight: "bold", margin: "0" }}>
                  Total ₹
                  {Number(String(item.price).replace(/,/g, "")) * item.quantity}
                </p>
              </div>
            </div>
          ))}
          <div
            style={{
              marginTop: "30px",
              textAlign: "right",
              borderTop: "2px solid cyan",
              paddingTop: "20px",
            }}
          >
            <h3>Grand Total ₹{totalPrice}</h3>
            <button
              style={{
                backgroundColor: "cyan",
                color: "black",
                padding: "12px 30px",
                border: "none",
                borderRadius: "5px",
                fontWeight: "bold",
                marginTop: "10px",
                cursor: "pointer",
              }}
            >
              Checkout Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
