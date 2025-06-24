import React from 'react';
import AnimatedProductCard from '../components/AnimatedProductCard';
import { products } from '../mock/products';

const TiendaPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-12 text-center">
        Nuestra <span className="text-[#32FFC4]">Tienda</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <AnimatedProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TiendaPage;
