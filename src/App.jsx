import { useState } from "react";
import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import { CartContext } from "./context/CartContext";

function App() {
  const [cartData, setCartData] = useState([]);

  return (
    <>
      <CartContext.Provider
        value={{ cartData: cartData, setCartData: setCartData }}
      >
        <Header />
        <Home />
        <Contact />
        <Footer />
      </CartContext.Provider>
    </>
  );
}

export default App;
