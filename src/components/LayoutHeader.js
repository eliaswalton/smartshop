import React from 'react';

const LayoutHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">SmartShop</div>
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="text-gray-600 hover:text-black">Inicio</a>
          <a href="/tienda" className="text-gray-600 hover:text-black">Tienda</a>
          <a href="/nosotros" className="text-gray-600 hover:text-black">Nosotros</a>
          <a href="/contacto" className="text-gray-600 hover:text-black">Contacto</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
            </svg>
          </button>
          <button className="md:hidden p-2 rounded-full hover:bg-gray-100">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default LayoutHeader;