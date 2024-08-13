import React from 'react';

function ProductList({ products }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {products.map((producto, index) => (
        <div
          key={index}
          className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md my-12"
        >
          <div className="relative mx-4 -mt-6 h-60 overflow-hidden rounded-xl  bg-center text-white shadow-lg shadow-blue-gray-500/40">
            <img src={producto.image} alt="" className="content" />
          </div>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {producto.nombre}
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              {producto.descripcion}
            </p>
            <p className="text-center block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              <strong className="text-[#B92F22] p-1 text-center">Precio:</strong> {producto.precio}
            </p>
          </div>
          <div className="mx-auto p-6 pt-0 justify-center flex gap-10">
            <label htmlFor={`range_${index}`} className="my-auto">Talla:</label>
            <select name={`range_${index}`} id={`range_${index}`} className="border-solid border-2">
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                  <option value="xl">XL</option>
            </select>

            <div className="heart-container" title="Like">
              <input type="checkbox" className="checkbox" id={`Give-It-An-Id_${index}`} />
              <div className="svg-container">
                <svg
                  viewBox="0 0 24 24"
                  className="svg-outline"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  className="svg-filled"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                </svg>
                <svg
                  className="svg-celebrate"
                  width="100"
                  height="100"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
      ))}
    </div>
  );
}

export default ProductList;
