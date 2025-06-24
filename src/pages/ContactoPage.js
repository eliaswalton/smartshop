import React from 'react';

const ContactoPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-10 text-center">
        Ponte en <span className="text-[#32FFC4]">Contacto</span>
      </h1>
      <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-md">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
            <input type="text" name="name" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#32FFC4] focus:border-[#32FFC4] sm:text-sm text-gray-900" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input type="email" name="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#32FFC4] focus:border-[#32FFC4] sm:text-sm text-gray-900" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
            <textarea id="message" name="message" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#32FFC4] focus:border-[#32FFC4] sm:text-sm text-gray-900"></textarea>
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[#0A0F2C] bg-[#32FFC4] hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#32FFC4]">
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactoPage;
