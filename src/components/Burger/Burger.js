import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = props => {
  /* const transformedIngredients2 = Object.entries(props.ingredients).map(
    index => {
      return [...Array(props.ingredients[index[0]])].map((_, i) => {
        return <BurgerIngredient key={i} type={index[0]} />;
      });
    }
  ); */
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((prev, cur) => {
      return prev.concat(cur);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add some ingredients</p>;
  }
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default burger;
