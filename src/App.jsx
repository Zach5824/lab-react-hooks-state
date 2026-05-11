import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // TODO: Implement state
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div className={isDarkMode ? "dark-app" : "light-app"}>
      <h1>Shopping App</h1>
      
      {/* 1. Dark Mode Toggle */}
      <DarkModeToggle 
        isDarkMode={isDarkMode} 
        onToggle={() => setIsDarkMode(!isDarkMode)} 
      />

      {/* 2. Category Filter */}
      <label>Filter by Category: </label>
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* 3. Product List */}
      <ProductList 
        category={selectedCategory} 
        onAddToCart={handleAddToCart} 
      />

      {/* 4. Cart */}
      <Cart items={cartItems} />
    </div>
  );
};

export default App
