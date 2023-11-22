import React, { useReducer } from 'react';

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

const cartReducer = (state, action) => {
switch (action.type) {
case ADD_TO_CART:
return [...state, { ...action.payload, quantity: 1 }];
case REMOVE_FROM_CART:
  return state.filter(item => item.id !== action.payload);

case UPDATE_QUANTITY:
  return state.map(item =>
    item.id === action.payload.id
      ? { ...item, quantity: action.payload.quantity }
      : item
  );

default:
  return state;
}
};
// Component
const ShoppingCart = () => {
const [cart, dispatch] = useReducer(cartReducer, []);
const addToCart = item => {
dispatch({ type: ADD_TO_CART, payload: item });
};
const removeFromCart = itemId => {
dispatch({ type: REMOVE_FROM_CART, payload: itemId });
};
const updateQuantity = (itemId, quantity) => {
dispatch({ type: UPDATE_QUANTITY, payload: { id: itemId, quantity } });
};
return (
<div>
<h2>Shopping Cart</h2>
<ul>
{cart.map(item => (
<li key={item.id}>
{item.name} - Quantity: {item.quantity}{' '}
<button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
<button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
<button onClick={() => removeFromCart(item.id)}>Remove</button>
</li>
))}
</ul>
<button onClick={() => addToCart({ id: 1, name: 'Product 1' })}>
Add Product 1 to Cart
</button>
<button onClick={() => addToCart({ id: 2, name: 'Product 2' })}>
Add Product 2 to Cart
</button>
</div>
);
};
export default ShoppingCart;