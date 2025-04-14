import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {


  return (
    <div className="border p-4 rounded shadow hover:shadow-md transition bg-gray-100  ">
      <Link to={`/product/${product.id}`}
        className="inline-block mt-2  hover:underline">
      <img
        className="w-full object-cover mb-2"
        src={product.image}
        alt={product.name}
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-700">${product.price}</p>
      <p>View Details</p> 
      </Link>
    </div>
  );
};


export default ProductCard