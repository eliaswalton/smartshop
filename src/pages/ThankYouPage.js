import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <div className="bg-white p-10 rounded-xl shadow-lg max-w-lg mx-auto">
        <svg className="w-20 h-20 text-green-500 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">¡Gracias por tu compra!</h1>
        <p className="text-gray-600 mb-8">
          Hemos recibido la confirmación de tu pago (simulada). En breve procesaremos tu pedido.
          Recibirás un correo electrónico con los detalles y el seguimiento.
        </p>
        <Link
          to="/tienda"
          className="bg-[#32FFC4] text-[#0A0F2C] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition"
        >
          Seguir Comprando
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
