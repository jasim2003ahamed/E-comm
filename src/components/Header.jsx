import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";



const Header = ({Search,setSearch,cartItems}) => {
  return (
    <header className="bg-gray-900 text-white p-4 ">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
            <Link to='/' className="hidden text-2xl sm:block">Ecommerce</Link>

          <form className="flex items-center space-x-2" onSubmit={(e) => e.preventDefault()}>
            <input className='px-4 py-2 rounded-lg w-full md:w-64 bg-gray-800 text-white focus:outline-none'
              type="text"
              name="search" 
              id="search"
              placeholder='Search Products'
              value={Search}
              onChange={(e) => setSearch(e.target.value)} 
            />
          </form>
          
          <div className='flex space-x-4 h-5'>
            {cartItems.length === 0 ? ( <Link to="/cart" > <FaShoppingCart className='size-5' /></Link>) : (
              <div className="flex items-center space-x-5 "> 
                <Link to="/cart" className="relative"> <span className='bg-blue-500 px-2 rounded-xl' >{cartItems.length} </span><FaShoppingCart className='size-4' /> </Link>
              </div>
            )}
          </div>

        </div>
    </header>
  )
}

export default Header


