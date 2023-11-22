import React from 'react';
import { useTheme}from '../ThemeContext';
import './App.css';
import ShoppingCart from './ShoppingCart';
function App() {
  return (
    <div className="App">
     
       <ShoppingCart/>
      <useTheme/>
    </div>
  );
}

export default App;
