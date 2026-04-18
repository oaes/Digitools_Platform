import "./App.css";
import Banner from "./components/Banner";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Rating from "./components/Rating";

function App() {
  const [cartItems] = useState([]);

  return (
    <>
      <ToastContainer />

      <NavBar cartCount={cartItems.length}></NavBar>
      <Banner />
      <Rating></Rating>
    </>
  );
}

export default App;
