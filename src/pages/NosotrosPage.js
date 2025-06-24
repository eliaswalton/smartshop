import React from 'react';

const NosotrosPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Sobre <span className="text-[#32FFC4]">Nosotros</span>
      </h1>
      <div className="max-w-2xl mx-auto text-lg space-y-4">
        <p>
          En SmartShop, nuestra misión es brindarte la última tecnología con el mejor servicio.
          Somos un equipo de entusiastas de la tecnología apasionados por conectar a las personas
          con los dispositivos que aman.
        </p>
        <p>
          Desde nuestros inicios, nos hemos esforzado por ofrecer una selección curada de productos
          de alta calidad, precios competitivos y una experiencia de compra excepcional.
          Creemos que la tecnología debe ser accesible y fácil de entender.
        </p>
        <p>
          Gracias por elegir SmartShop. ¡Esperamos servirte!
        </p>
      </div>
    </div>
  );
};

export default NosotrosPage;
