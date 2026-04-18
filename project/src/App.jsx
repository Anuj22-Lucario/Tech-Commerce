import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import "./style.css"
import About from "./pages/About";

function App() {

  let count = 0

  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("techCart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("techCart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const isExist = prev.find((item) => item.id === product.id);
      if (isExist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };
  const removeFromCart = (product) => {
    setCartItems((prev) => {
      const isExist = prev.find((item) => item.id === product.id);
      if (isExist.quantity === 1) {
        return prev.filter((item) => item.id !== product.id);
      }
      return prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );
    }); 
  };
  return (
    <BrowserRouter>
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              cartItems={cartItems}
            />
          }
        />
        <Route path="/about" element = {<About/>}/>
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
