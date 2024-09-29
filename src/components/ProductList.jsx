import React from 'react';

export default function ProductList({ products, addToCart }) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map(product => (
        <div key={product.id} className="border rounded-lg shadow-lg p-4 bg-white transition-transform transform hover:scale-105">
          <img src={product.imageSrc} alt={product.name} className="w-full h-32 object-cover rounded-md" />
          <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-700">{`฿${product.price}`}</p>
          <button onClick={() => addToCart(product)} className="mt-2 bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600 transition duration-200">
            เพิ่มในตะกร้า
          </button>
        </div>
      ))}
    </div>
  );
}
