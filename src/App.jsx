import React, { useEffect, useState }  from 'react'
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
import FoodHome from './Food/FoodHome'
import FoodProduct from './Food/FoodProduct'
import Foodcart from './Food/Foodcart'
import FoodData from './Food/Fooddata'
import PizzaPage from './Food/PizzaPage'
import BurgerPage from './Food/BurgerPage'

function App() {

  const [products, setproducts] = useState([])
  const [Pizza, setPizza] = useState([])
  const [Burger, setBurger] = useState([])
  const [Cart, setCart] = useState([])

  const addCart = (Pizzaitems) =>{
    setCart((prevValue)=>[...prevValue,Pizzaitems])
}

const removeCart = (index) =>{
   setCart((prevValue)=> prevValue.filter((e,i) => i!==index) ) 
}

const calcTotal = () =>{
    let total = 0
    Cart.forEach((food) => total += parseInt(food.price) )
    return total.toFixed(2)
}

const clearCart = () =>{
    setCart([])
}

  
useEffect(()=>{
  setproducts(FoodData)
},[])


useEffect(()=>{
    setPizza(FoodData[0])
},[])

useEffect(()=>{
    setBurger(FoodData[1])
})

  return (
     <>
      <BrowserRouter>
      <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/food">Food</Link></li>
            <li><Link to="/pizza">Pizza</Link></li>
            <li><Link to="/burger">Burger</Link></li>
            <li><Link to="/cart">Cart : {Cart.length}</Link></li>
        </ul>
    </nav>
      <Routes>
        <Route path='/' element={<FoodHome pizza={Pizza} burger={Burger} /> }/>
        <Route path='/food' element={<FoodProduct products={products} /> }/>
        <Route path='/cart' element={<Foodcart cart={Cart} setcart={setCart} addCart={addCart} removeCart={removeCart} clearCart={clearCart} calcTotal={calcTotal} /> }/>
        <Route path='/pizza' element={<PizzaPage pizza={Pizza} addCart={addCart} /> }/>
        <Route path='/burger' element={<BurgerPage burger={Burger} addCart={addCart}/> }/>
      </Routes>
      </BrowserRouter>
      
     </>
  )
}

export default App