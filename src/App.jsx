import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Basket from './pages/Basket'
import './styles/index.css'
import SingleProduct from './Pages/SingleProduct'


function App() {

  return (
    <div className="App">

      <Header />


      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/home/:id' element={<SingleProduct />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/basket' element={<Basket />} />

      </Routes>

    </div>
  )
}

export default App
