import React from "react";
import { toast } from "react-toastify";

const Cart = ({ cartItems }) => {
  if (cartItems?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <span className="text-6xl mb-4">🛒</span>
        <h3 className="text-xl font-bold text-gray-700">Your cart is empty</h3>
        <p className="text-sm text-gray-400 mt-2">
          Browse products and click "Buy Now" to add items.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto rounded-xl border border-gray-200 px-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Your Cart</h3>

      <div className="flex flex-col gap-4">
        {cartItems?.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-xl px-5 py-4 flex items-center justify-between gap-4 shadow-sm"
          >
            {/* Icon + Name  */}
            <div className="flex items-center gap-3">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {item.name}
                </p>
                <p className="text-xs text-gray-400">
                  {item.period === "one-time"
                    ? "One-time payment"
                    : item.period === "yearly"
                      ? "Per year"
                      : "Per month"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
