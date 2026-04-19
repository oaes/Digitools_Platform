import React, { useState } from "react";

const tagStyles = {
  "best-seller": { bg: "#FEF3C7", text: "#D97706" },
  popular: { bg: "#DBEAFE", text: "#1D4ED8" },
  new: { bg: "#D1FAE5", text: "#065F46" },
};

const ProductsCard = ({ product, onAddToCart, isInCart }) => {
  //  Prevent rendering empty/invalid card
  if (!product || !product.name) return null;

  const [btnText, setBtnText] = useState("Buy Now");

  const tagStyle = tagStyles[product?.tagType] || {
    bg: "#F3F4F6",
    text: "#374151",
  };

  const features = product?.features || [];

  const handleBuy = () => {
    if (!onAddToCart) return;
    onAddToCart(product);
    setBtnText("Added to Cart");
    setTimeout(() => setBtnText("Buy Now"), 2000);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300">
      
      {/* Header */}
      <div className="flex items-start justify-between">
        <span className="text-3xl">{product.icon}</span>

        {product.tag && (
          <span
            className="text-xs font-bold px-3 py-1 rounded-full"
            style={{ backgroundColor: tagStyle.bg, color: tagStyle.text }}
          >
            {product.tag}
          </span>
        )}
      </div>

      {/* Name & Description */}
      <div>
        <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>

        {product.description && (
          <p className="text-sm text-gray-500 mt-1 leading-relaxed">
            {product.description}
          </p>
        )}
      </div>

      {/* Price */}
      {product.price && (
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-extrabold text-gray-900">
            {product.price}
          </span>
          {product.period && (
            <span className="text-sm text-gray-400 font-medium">
              /{product.period}
            </span>
          )}
        </div>
      )}

      {/* Features */}
      {features.length > 0 && (
        <ul className="flex flex-col gap-2 flex-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
              <svg
                className="w-4 h-4 shrink-0"
                style={{ color: "#7C3AED" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/*  Button */}
      {onAddToCart && (
        <button
          onClick={handleBuy}
          disabled={isInCart}
          className="mt-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-linear-to-l from-[#9514FA] to-[#4F39F6] cursor-pointer transition-all duration-200 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isInCart ? "Added to Cart" : btnText}
        </button>
      )}
    </div>
  );
};

export default ProductsCard;