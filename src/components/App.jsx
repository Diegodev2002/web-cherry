import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      image: '/img/women/outfit_w1.jpg',
      nombre: 'Outfit 1',
      descripcion: 'Vestido Bumster de seda con tirantes ajustables, escote en forma de corazón & un coqueto olan en la parte baja.',
      precio: '$900',
    },
    {
      image: '/img/women/outfit_w2.jpg',
      nombre: 'Outfit 2',
      descripcion: 'Descripción del producto 2',
      precio: '$1200',
    },
    // Agrega más productos aquí
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item !== product));
  };

  return (
    <div className="flex">
      <div className="w-2/3">
        <ProductList products={products} addToCart={addToCart} />
      </div>
      <div className="w-1/3">
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
};

export default App;
