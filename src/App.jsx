
import HomePage from "./Components/HomePageComponent/HomePage"
import UserPage from './Components/UserPageComponent/UserPage'
import Product from './Components/ProductPageComponent/ProductPage'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Data from './Data/products.json'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Product  data={Data}/>} />
      <Route path='/user' element={<UserPage/>}/>
    </Routes>
  )
}

export default App
