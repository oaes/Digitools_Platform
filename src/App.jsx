import "./App.css";
import Banner from "./components/Banner";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [cartItems] = useState([]);

  return (
    <>
      <ToastContainer />

      <NavBar cartCount={cartItems.length}></NavBar>
      <Banner />
    </>
  );
}

export default App;
