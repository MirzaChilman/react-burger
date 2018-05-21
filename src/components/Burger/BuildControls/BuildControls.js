import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = props => {
  return (
    <div className="BuildControls">
      <p>
        Current Price: <strong>${props.price.toFixed(2)}</strong>
      </p>
      {controls.map(item => {
        return (
          <BuildControl
            key={item.label}
            label={item.label}
            added={() => props.ingredientAdded(item.type)}
            removed={() => props.ingredientRemoved(item.type)}
            disabled={props.disabled[item.type]}
          />
        );
      })}
      <button
        className="OrderButton"
        disabled={!props.purchaseable}
        onClick={props.ordered}
      >
        Order Now
      </button>
    </div>
  );
};
export default buildControls;
