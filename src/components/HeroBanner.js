import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tecnología Inteligente para tu Hogar</h1>
          <p className="text-xl mb-8">Descubre los mejores productos smart que harán tu vida más fácil</p>
          <div className="flex space-x-4">
            <Link to="/tienda">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
                Comprar ahora
              </button>
            </Link>
            <Link to="/tienda">
              <button className="border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition">
                Ver productos
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          {/* Increased size of the image container */}
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-white rounded-full opacity-20"></div>
            {/* Adjusted inset for larger size if needed, or keep them relative to container */}
            <div className="absolute inset-6 bg-white rounded-full opacity-30 md:inset-8"></div>
            <div className="absolute inset-12 bg-white rounded-full opacity-40 md:inset-16"></div>
            <img 
              src="https://png.pngtree.com/png-clipart/20240323/original/pngtree-smart-home-devices-png-image_14656257.png" 
              alt="Producto destacado" 
              className="relative z-10 w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;