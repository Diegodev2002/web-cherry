import React, { useEffect, useState } from 'react';

function ReactCart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Fetch para obtener los elementos del carrito
    fetch('/api/get-cart')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la respuesta del servidor');
        }
        return response.json();
      })
      .then((data) => {
        // Validar que data.products exista y sea un array
        if (data && Array.isArray(data.products)) {
          setCartItems(data.products);

          // Calcular el total
          const totalPrice = data.products.reduce((acc, product) => acc + parseFloat(product.precio), 0);
          setTotal(totalPrice);
        } else {
          console.error('Datos de productos inválidos o no encontrados');
        }
      })
      .catch((error) => console.error('Error fetching cart items:', error));
  }, []);

  return (
    <div>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((product, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded-lg mb-4">
              <h2 className="text-xl font-bold">{product.nombre}</h2>
              <p>{product.descripcion}</p>
              <p className="text-red-500">Precio: {product.precio}</p>
              <p className="text-blue-500">Talla: {product.talla}</p>
            </div>
          ))}
          <div className="p-4 bg-gray-200 shadow-md rounded-lg mt-4">
            <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
          </div>
          <div className="w-full justify-center my-10 flex">
            <button className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-[#FC9090] group px-8 py-2 m-auto">
              <span className="relative z-10 text-[#FC9090] group-hover:text-white text-xl duration-500">
                Pagar
              </span>
              <span className="absolute w-full h-full bg-[#FC9090] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
              <span className="absolute w-full h-full bg-[#FC9090] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
            </button>
          </div>
        </div>
      ) : (
        <p>No hay productos en el carrito.</p>
      )}
    </div>
  );
}

export default ReactCart;
