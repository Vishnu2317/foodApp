import React from "react";
import { Link } from "react-router-dom";

const FoodHome = ({pizza,burger}) => {
  return (
    <>
      <h1>Homepage</h1>
      <h3>
        <Link to="/food"> Home </Link>
      </h3>
      <div>
        <Link to='/pizza'>
        <h2>{pizza.name}</h2>
        <img src={pizza.image} height={150} width={150} />
        </Link>
      </div>
      <div>
        <Link to='/burger'>
        <h2>{burger.name}</h2>
        <img src={burger.image} height={150} width={150} />
        </Link>
      </div>
       
    </>
  );
};

export default FoodHome;
