import React, { useState } from "react";
import products from "../assets/jsonData/CartItem.json";
import ProductsCard from "./ProductsCard";
import { toast } from "react-toastify";
import Cart from "./Cart";

const Main = ({ cartItems, setCartItems }) => {
  const [activeTab, setActiveTab] = useState("products");

  const handleAddToCart = (product) => {
    const alreadyInCart = cartItems.find((item) => item.id === product.id);
    if (alreadyInCart) {
      toast.info(`"${product.name}" is already in your cart.`, {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    setCartItems((prev) => [...prev, product]);
    toast.success(`"${product.name}" added to cart!`, {
      position: "top-center",
      autoClose: 2500,
    });
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    setCartItems([]);
  };

  const cartIds = new Set(cartItems?.map((i) => i.id));

  return (
    <section id="products" className="py-6 mt-20 px-6 lg:px-20">
      {/* Main section content  */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold text-[#101727]">
          Premium Digital Tools
        </h1>
        <p className="text-base text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>

        <div className="flex items-center gap-3 justify-center">
          <button
            onClick={() => setActiveTab("products")}
            className={`text-sm font-semibold px-5 py-2 rounded-full ${activeTab === "products" ? "text-white bg-linear-to-l from-[#9514FA] to-[#4F39F6] hover:opacity-90" : "border bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text hover:text-transparent"} transition-colors duration-200 cursor-pointer`}
          >
            Products
          </button>

          <button
            onClick={() => setActiveTab("cart")}
            className={`text-sm font-semibold px-5 py-2 rounded-full ${activeTab === "cart" ? "text-white bg-linear-to-l from-[#9514FA] to-[#4F39F6] hover:opacity-90" : "border bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text hover:text-transparent"} transition-colors duration-200 cursor-pointer`}
          >
            Cart ({cartItems?.length})
          </button>
        </div>
      </div>

      <div className="mt-20">
        {/* Products container  */}
        {activeTab === "products" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductsCard
                key={index}
                product={product}
                onAddToCart={handleAddToCart}
                isInCart={cartIds.has(product.id)}
              />
            ))}
          </div>
        )}

        {/* Cart View  */}
        {activeTab === "cart" && (
          <Cart
            cartItems={cartItems}
            onRemove={handleRemove}
            onCheckout={handleCheckout}
          />
        )}
      </div>
    </section>
  );
};

export default Main;
