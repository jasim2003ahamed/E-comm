import React from 'react'


const CheckOutPage = ({cartItems,cname,csetName,address,setAddress,handleSubmit}) => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
  <div className="p-4 max-w-xl mx-auto">
  <h2 className="text-2xl font-bold mb-4">Checkout</h2>

  <form onSubmit={handleSubmit}  className="space-y-4">
    <input
      type="text"
      required
      placeholder="Your Name"
      value={cname}
      onChange={e => csetName(e.target.value)}
      className="w-full border px-3 py-2 rounded"
    />
    <textarea
      required
      placeholder="Your Address"
      value={address}
      onChange={e => setAddress(e.target.value)}
      className="w-full border px-3 py-2 rounded"
      rows="3"
    />
    <div className="text-lg font-semibold">
      Total: <span className="text-blue-600">${total}</span>
    </div>
    <button
      type="submit"
      className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
    >
      Place Order
    </button>
  </form>
</div>
);
}


export default CheckOutPage

