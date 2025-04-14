import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import { Route, Routes, useNavigate } from 'react-router-dom'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import CheckOutPage from './pages/CheckOutPage'
// import api from './api/products'


function App() {
  const [search,setSearch] = useState('')
  const [product,setProduct] = useState([
    {
      "id": "101",
      "name": "OPPO F21s Pro 5G phone",
      "price": "245.99",
      "description":"OPPO F21s Pro 5G is a powerful device with a RAM extension feature, that offers brilliant operational speed to users.",
      "image": "/images/1.jpg"
    },
    {
      "id": "102",
      "name": "PTron Newly Launched Tangent Sports headphone, 60Hrs Playtime",
      "price": "150",
      "description": "Gigantic 60 + Hours of music playtime on a single charge; BT5.2 Wireless headphones with ENC (Environmental Noise Cancellation) Technology to enhance your voice quality over the voice calls",
      "image": "./images/4.jpg"
    },
    {
      "id": "103",
      "name": "Dell Inspiron 3511 Laptop",
      "price": "440",
      "description":"Dell Inspiron 3511 11th Generation Intel Core i5-1135G7 Processor (8MB Cache, up to 4.2 GHz);Operating System: Windows 10 Home Single Language, English",
      "image": "./images/3.jpg"
    },
    {
      "id": "104",
      "name": "Lenovo IdeaPad Slim Laptop",
      "price": "250",
      "description":"Lenovo IdeaPad Slim 311th Gen Intel Core i5-1135G7 | Speed: 2.4 GHz (Base) - 4.2 GHz (Max) | 4 Cores | 8 Threads | 8 MB Cache",
      "image": "/images/7.jpg"
    },
    {
      "id": "105",
      "name": "ASUS VivoBook 15 Laptop",
      "price": "767.96",
      "description":"ASUS VivoBook 15 15.6-inch (39.62 cm) HD, Dual Core Intel Celeron N4020, Thin and Light Laptop (4GB RAM/256GB SSD/Integrated Graphics/Windows 11 Home/Transparent Silver/1.8 Kg), X515MA-BR011W",
      "image": "/images/6.jpg"
    },
    {
      "id": "106",
      "name": "Campus Men's Maxico Running Shoes",
      "price": "10.99",
      "description":"The high raised back cover with extra padding.",
      "image": "/images/5.jpg"
    },
    {
      "id": "107",
      "name": "WRISTIO HD, Bluetooth Calling Smart Watch",
      "description":"Minix watches are exclusively designed to fulfill the advanced tech needs of today  generation.",
      "price": "15.99",
      "image": "/images/2.jpg"
    }
  ])
  const [searchResult,setSearchResult] = useState([])
  const [cartItems,setCartItems] = useState([])
  const [quantity,setQuantity]=useState(1)
  const [cname,csetName] = useState('')
  const [address,setAddress] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const filteredResult = product.filter(p => p.name && p.name.toLowerCase().includes(search.toLowerCase()))
    setSearchResult(filteredResult)
  },[product,search])

  // useEffect(() =>  {
  //   const fetchProduct = async () => {
  //   try{
  //   const response = await api.get("products")
  //   setProduct(response.data)
  //   } catch(err) {
  //     console.log(`Error:${err.message}`)
  //   }
  // }
  // fetchProduct()
  // },[])


  const handleAddToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const handleRemoveFromCart = (id) => {
      setCartItems((p) => p.filter((item) => item.id !== id))
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cname || !address ) {
      alert('Please enter your name and address.');
    }
    alert(`✅ Order placed!\nThank you,`);
    clearCart();
    csetName('')
    setAddress('')
    setSearch('')
    navigate('/')
  }

  const clearCart = () => {
    setCartItems([]);
  }


  return (
    <div>
      <Header
        Search={search}
        setSearch={setSearch}
        cartItems={cartItems}
      />
      
      <Routes>
        <Route path='/' element={<Home product={searchResult} />} />
        <Route path='/product/:id' element={<ProductPage product={product} quantity={quantity} setQuantity={setQuantity} handleAddToCart={handleAddToCart}/>}/>
        <Route path='/cart' element={<CartPage cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart}/> }/>
        <Route path='/checkoutpage' element={<CheckOutPage cartItems={cartItems} cname={cname} csetName={csetName} address={address} setAddress={setAddress}  handleSubmit={handleSubmit}/>} />
      </Routes>
      
    </div>
  )
}

export default App
