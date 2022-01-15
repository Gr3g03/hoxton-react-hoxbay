import { useEffect, useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Basket from './pages/Basket'
import SingleProduct from './pages/SingleProduct'
import CategorieProduct from './pages/CategorieProduct'
import './styles/index.css'


function App() {

  const [basketItem, setBasketItem] = useState([])

  console.log(basketItem)
  return (
    <div className="App">

      <Header />

      <Routes>

        <Route path='/home' element={<Home />} />
        <Route path='/home/:id' element={<SingleProduct setBasketItem={setBasketItem} basketItem={basketItem} />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/categories/:id' element={<CategorieProduct />} />
        <Route path='/basket' element={<Basket basketItem={basketItem} />} />

      </Routes>

    </div>
  )
}

export default App
