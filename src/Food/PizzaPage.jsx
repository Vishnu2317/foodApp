import React, { useEffect, useState } from "react";
import FoodData from "./Fooddata";


const PizzaPage = ({addCart}) => {

  return (
    <>
      <h2>{FoodData[0].subItemsData.name}</h2>
      {FoodData[0].subItemsData.subItems.map((pizzaitems,index)=>{
        return (
          <div key={index}>
            <h1>{pizzaitems.name}</h1>
            <img src={pizzaitems.image} height={150} width={150} />
            <h3>{pizzaitems.description}</h3>
            <h4>Price : Rs {pizzaitems.price}.00</h4>
            <button onClick={() => addCart(pizzaitems)}>Add to Cart</button>
          </div>
        )
      })}
    </>
  );
};

export default PizzaPage;
