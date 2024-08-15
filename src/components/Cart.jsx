// Cart.jsx
import React from 'react';

function ReactCart({ cartItems, removeFromCart }) {
  return (
    <div>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <span>{item.nombre}</span>
              <span>{item.precio}</span>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ReactCart;
