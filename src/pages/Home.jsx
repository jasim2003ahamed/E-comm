import React from 'react'
import ProductCard from '../components/ProductCard'

const Home = ({product}) => {
  return (
    <main className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {product.map(product => (<ProductCard key={product.id} product={product} />))}
    </main>
  )
}

export default Home