import React from "react";

const Cart = ({ cart, handleClearCart, children }) => {
  let total = 0;
  let quantity = 0;
  let totalShipping = 0;
  for (const product of cart) {
    product.quantity = product.quantity || 1;
    total = total + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (total * 7) / 100;
  const grandTotal = total + totalShipping + tax;
  return (
    <div className=" bg-orange-400 w-full px-5 py-2 sticky top-0">
      <h3 className="text-xl font-bold mb-5">Order Summary</h3>
      <p className="text-lg font-semibold mb-2">Selected item:{quantity}</p>
      <p className="text-lg font-semibold mb-2">Total Price:${total}</p>
      <p className="text-lg font-semibold mb-2">Shipping:${totalShipping}</p>
      <p className="text-lg font-semibold mb-5">Tax:${tax}</p>
      <p className="text-lg font-semibold ">
        Grand Total:${grandTotal.toFixed(2)}
      </p>
        <div>
        <button c onClick={handleClearCart} className="btn mt-8 btn-primary w-full">Clear cart</button>
        {children}
        </div>
    </div>
  );
};

export default Cart;
