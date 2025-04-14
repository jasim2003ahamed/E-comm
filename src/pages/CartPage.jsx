import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({ cartItems, handleRemoveFromCart }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center p-4 border rounded-xl">
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-gray-700 font-bold">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="text-white hover:text-black transition rounded-lg bg-red-600 p-2"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right text-xl font-bold mt-4">
            Total: ${getTotalPrice()}
          </div>
          <div className="border-t pt-4">
            <h4 className="text-xl font-bold">Order Summary</h4>
            <p className="text-lg mt-2">
              Total: <span className="text-blue-600 font-semibold">${getTotalPrice()}</span>
            </p>
            <Link to={'/checkoutpage'} ><button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"> 
              Buy Now
            </button>
            </Link>
          </div>
        </div>
        // </div>
      )}
    </div>
  );
};

export default CartPage;
