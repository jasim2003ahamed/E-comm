import React from 'react'
import {useParams} from 'react-router-dom'


const ProductPage = ({product,quantity,setQuantity,handleAddToCart}) => {
    const {id} = useParams()
    const foundProduct = product.find(p => p.id.toString() === id)

  return (
    <div className="p-4 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
      <div className="bg-white rounded-xl shadow p-4">
        <img
          src={foundProduct.image}
          alt={foundProduct.name}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <div className="flex flex-col justify-between space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{foundProduct.name}</h1>
          <p className="text-gray-600 mt-2">{foundProduct.description || "No description available."}</p>
          <p className="text-xl text-blue-600 mt-4 font-semibold">${foundProduct.price}</p>
        </div>

        <div className="flex items-center gap-4">
          <label className="text-lg text-orange-500">Quantity:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            className="w-20 border rounded px-2 py-1"
          />
        </div>

          <button
            onClick={() => handleAddToCart(foundProduct, quantity)}
            className="bg-blue-600 w-full text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
      </div>
    </div>
  )
}


export default ProductPage