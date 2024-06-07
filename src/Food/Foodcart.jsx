import React from 'react'
import { useNavigate } from 'react-router-dom'
 


 const Foodcart = ({cart,setcart,clearCart,removeCart,calcTotal})=> {
   const nav = useNavigate()

    const handleBuy = () =>{
        alert("your order is placed")
        setcart([])
        nav('/')
    }
  return (
     <>
     <h1> Cart Items </h1>
     

    { cart.length > 0 
      ? 
      <>
    <button onClick={clearCart}>Clear Cart</button>
    <h1>Total Amount - Rs: {calcTotal()} </h1>
    {cart.map((item,index)=>{
        return(
            <div key={index}>
                <h1>{item.name}</h1>
                <img src={item.image} height={150} width={150} />
                <h4>Rs : {item.price}.00</h4>
                <button onClick={()=>removeCart(index)}>Remove from Cart</button>
            </div>
        )
    })}
    <button onClick={handleBuy}>Order Now</button>

    </> 
     : 
    <>
    <h1>Your Cart is Empty</h1>
    </> }
    </>

  )
}

export default Foodcart