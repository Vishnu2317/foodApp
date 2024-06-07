import React from 'react'
import FoodData from './Fooddata'

const BurgerPage = () => {
  return (
    <>
          <h2>{FoodData[1].subItemsData.name}</h2>
        {FoodData[1].subItemsData.subItems.map((burgeritems,index)=>{
        return (
          <div key={index}>
            <h1>{burgeritems.name}</h1>
            <img src={burgeritems.image} height={150} width={150} />
            <h3>{burgeritems.description}</h3>
            <h4>Price : Rs {burgeritems.price}.00</h4>
            <button onClick={() => addCart(burgeritems)}>Add to Cart</button>
          </div>
        )
      })}
    </>
  )
}

export default BurgerPage