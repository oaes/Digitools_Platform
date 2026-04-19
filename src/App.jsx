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

function App() {
  const [cartItems] = useState([]);

  return (
    <>
      <ToastContainer />

      <NavBar cartCount={cartItems?.length}></NavBar>
      <Banner />
      <Rating></Rating>
      <Main></Main>
      <Cart></Cart>
      <ProductsCard></ProductsCard>
      <MainTwo></MainTwo>
    </>
  );
}

export default App;
