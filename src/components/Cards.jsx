import React, { useState } from 'react';

interface Product {
  id: string;
  nombre: string;
  descripcion: string;
  precio: string;
  talla: string;
}

function ProductList({ products }) {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleCheckboxChange = (product, index) => {
    const sizeSelect = document.querySelector(`#range_${index}`);
    const selectedSize = sizeSelect ? sizeSelect.value : 'S';

    if (selectedProducts.find((item) => item.id === product.id)) {
      setSelectedProducts((prev) => prev.filter((item) => item.id !== product.id));
    } else {
      setSelectedProducts((prev) => [
        ...prev,
        {
          id: product.id,
          nombre: product.nombre,
          descripcion: product.descripcion,
          precio: product.precio,
          talla: selectedSize,
        },
      ]);
    }
  };

  const handleAddToCart = () => {
    // Guardar productos seleccionados en el almacenamiento local
    localStorage.setItem('cart', JSON.stringify(selectedProducts));
  
    // Redirigir a la página del carrito
    window.location.href = '/carrito';
  };
  

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {products.map((producto, index) => (
        <div
          key={index}
          className="relative group cursor-pointer overflow-hidden duration-500 w-80 h-112 bg-zinc-800 text-gray-50 p-5"
        >
          <div>
            <div className="group-hover:scale-110 w-full h-full bg-[#FC9090] duration-500">
              <img src={producto.image} className="w-full h-full object-cover" alt={producto.nombre} />
            </div>
            <div className="absolute w-full left-0 p-5 -bottom-24 duration-500 group-hover:-translate-y-20">
              <div className="absolute -z-10 left-0 w-full h-full opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-black"></div>
              <span className="shadow-nome text-2xl font-bold text-[#FC9090]">{producto.nombre}</span>
              <p className="text-base group-hover:opacity-100 w-full duration-500 opacity-0">
                {producto.descripcion} <br />
                <strong className="text-[#B92F22] p-1 text-center">Precio:</strong> {producto.precio}
              </p>
              <div className='flex m-auto'>
                <label htmlFor={`size_${index}`} className='my-auto'>Talla:</label>
                <select name={`range_${index}`} id={`range_${index}`} className="border-solid border-2 m-2 p-2 text-black">
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                  <option value="xl">XL</option>
                </select>
                <p className='my-auto mx-3'>Seleccionar : </p>
                <div className="heart-container" title="Like">
                  <input type="checkbox" className="checkbox" id={`Give-It-An-Id_${index}`} onChange={() => handleCheckboxChange(producto, index)} />
                  <div className="svg-container">
                    <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                    </svg>
                    <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                    </svg>
                    <svg className="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="10,10 20,20"></polygon>
                      <polygon points="10,50 20,50"></polygon>
                      <polygon points="20,80 30,70"></polygon>
                      <polygon points="90,10 80,20"></polygon>
                      <polygon points="90,50 80,50"></polygon>
                      <polygon points="80,80 70,70"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="w-full justify-center my-10 flex">
        <button
          onClick={handleAddToCart}
          className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-[#FC9090] group px-8 py-2 m-auto"
        >
          <span className="relative z-10 text-[#FC9090] group-hover:text-white text-xl duration-500">
            Agregar al carrito
          </span>
          <span className="absolute w-full h-full bg-[#FC9090]-left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
          <span className="absolute w-full h-full bg-[#FC9090] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
        </button>
      </div>
    </div>
  );
}

export default ProductList;
