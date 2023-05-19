import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Views/ItemListContainer";
import ItemDetailContainer from "./Views/ItemDetailContainer";
import CheckoutContainer from "./Views/CheckoutContainer";
import { routes } from "./routes";
import { useState } from "react";
import CartContext from "./Context/CartContext";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    const newArray = cart.filter((_item) => _item[0].id !== item[0].id);
    setCart(newArray);
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, emptyCart }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={routes.root} element={<ItemListContainer />} />
          <Route
            path={routes.itemListContainer}
            element={<ItemListContainer />}
          />
          <Route
            path={routes.itemDetailContainer}
            element={<ItemDetailContainer />}
          />
          <Route
            path={routes.checkoutContainer}
            element={<CheckoutContainer />}
          />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
