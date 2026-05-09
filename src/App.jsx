
import HomePage from "./Components/HomePageComponent/HomePage"
import ProductPage from './Components/ProductPageComponent/ProductPage'
import './App.css'
import { Routers, Router } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/product' element={<ProductPage/>}/>
    </Routes>
  )
}

export default App
