import React from 'react';

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tecnología Inteligente para tu Hogar</h1>
          <p className="text-xl mb-8">Descubre los mejores productos smart que harán tu vida más fácil</p>
          <div className="flex space-x-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
              Comprar ahora
            </button>
            <button className="border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition">
              Ver productos
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-white rounded-full opacity-20"></div>
            <div className="absolute inset-4 bg-white rounded-full opacity-30"></div>
            <div className="absolute inset-8 bg-white rounded-full opacity-40"></div>
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