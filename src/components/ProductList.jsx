import React from 'react';

function ProductList({ products, addToCart }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {products.map((producto, index) => (
        <div
          key={index}
          className="relative group cursor-pointer overflow-hidden duration-500 w-80 h-96 bg-zinc-800 text-gray-50 p-5"
        >
          <div>
            <div className="group-hover:scale-110 w-full h-64 bg-[#FC9090] duration-500">
              <img src={producto.image} className="w-full h-full" alt={producto.nombre} />
            </div>
            <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
              <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-black"></div>
              <span className="text-xl font-bold text-[#FC9090]">{producto.nombre}</span>
              <p className="text-xs group-hover:opacity-100 w-56 duration-500 opacity-0">
                {producto.descripcion} <br />
                <strong className="text-[#B92F22] p-1 text-center">Precio:</strong> {producto.precio}
              </p>
              <button
                onClick={() => addToCart(producto)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
