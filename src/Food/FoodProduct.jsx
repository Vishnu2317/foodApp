import React from 'react'




 const FoodProduct = ({ products,addCart })=> {
  return (
    <>
     
    <h2>Pizza & Burger</h2>
        {products.map((item,index)=>{
        return (
            <div key={index}>
                <h2>{item.subItemsData.name}</h2>
                {item.subItemsData.subItems.map((food,index)=>{
                    return (
                        <div key={index}>
                            <h1>{food.name}</h1>
                            <img src={food.image} height={150} width={150} />
                            <h3>{food.description}</h3>
                            <h4>Price : Rs {food.price}.00</h4>
                            <button onClick={()=>addCart(food)}>Add to Cart</button>
                        </div>
                    )
                })}
            </div>
        )
    })}
    </>
  )
}

export default FoodProduct