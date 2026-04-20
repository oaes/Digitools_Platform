import "./App.css";
import Banner from "./components/Banner";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Rating from "./components/Rating";
import Main from "./components/Main";
import Cart from "./components/Cart";
import ProductsCard from "./components/ProductsCard";
import MainTwo from "./components/MainTwo";
import Pricing from "./components/Pricing";
import LastBanner from "./components/LastBanner";
import Footer from "./components/Footer";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      if (prev.some((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    setCartItems([]);
  };

  return (
    <>
      <ToastContainer />

      <NavBar cartCount={cartItems?.length}></NavBar>
      <Banner />
      <Rating></Rating>
      <Main cartItems={cartItems} setCartItems={setCartItems}></Main>
      <Cart
        cartItems={cartItems}
        onRemove={handleRemove}
        onCheckout={handleCheckout}
      ></Cart>
      <ProductsCard></ProductsCard>
      <MainTwo></MainTwo>
      <Pricing></Pricing>
      <LastBanner></LastBanner>
      <Footer></Footer>
    </>
  );
}

export default App;
