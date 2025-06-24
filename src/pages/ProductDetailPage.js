import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../mock/products'; // Assuming mock data is here
import { CartContext } from '../context/CartContext';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { addItemToCart } = useContext(CartContext);

  // Find product by ID (ensure productId from URL is compared correctly, e.g., as number or string)
  // Mock product IDs are numbers. useParams returns strings.
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-red-500 mb-6">Producto no encontrado</h1>
        <p className="text-xl mb-8">Lo sentimos, el producto que buscas no existe o no está disponible.</p>
        <Link
          to="/tienda"
          className="bg-[#32FFC4] text-[#0A0F2C] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition"
        >
          Volver a la Tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Product Image Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full h-auto max-h-[500px] object-contain rounded-lg"
          />
        </div>

        {/* Product Details Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg text-gray-800">
          <h1 className="text-4xl font-bold mb-4 text-[#0A0F2C]">{product.name}</h1>
          <p className="text-2xl font-semibold text-[#32FFC4] mb-6">${product.price.toFixed(2)}</p>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Descripción:</h2>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          {/* Placeholder for other details like specifications if they existed */}
          {/*
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Especificaciones:</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Especificación A: Valor A</li>
              <li>Especificación B: Valor B</li>
            </ul>
          </div>
          */}

          <button
            onClick={() => addItemToCart(product)}
            className="w-full mt-6 bg-[#32FFC4] text-[#0A0F2C] px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-80 transition duration-300 ease-in-out transform hover:scale-105"
          >
            AGREGAR AL CARRITO
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
