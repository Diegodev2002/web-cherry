import React from 'react';

function Cart({ cartItems, removeFromCart }) {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold">Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between p-4 bg-gray-100 mb-2">
              <span>{item.nombre}</span>
              <span>{item.precio}</span>
              <button
                onClick={() => removeFromCart(item)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Quitar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
