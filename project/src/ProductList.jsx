import { productData } from "./data";

export default function ProductList({ addToCart, removeFromCart, cartItems }) {
  const safeCart = cartItems || [];

  return (
    <div className="product-container">
      {productData.map((item) => {
        const itemInCart = safeCart.find((p) => p.id === item.id);

        return (
          <div className="product-card" key={item.id}>
            <img src={item.img} alt={item.name} className="product-img" />
            <div className="product-info">
              <h2>{item.name}</h2>
              <p>{item.desc}</p>
              <div className="price">₹{Number(String(item.price).replace(/,/g, "")).toLocaleString('en-IN')}
              </div>

              {itemInCart ? (
                <div className="qty-counter">
                  <button onClick={() => removeFromCart(item)}>-</button>
                  <span>{itemInCart.quantity}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
              ) : (
                <button className="add-btn" onClick={() => addToCart(item)}>
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}