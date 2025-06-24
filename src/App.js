import React, { useEffect, useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import HeroBanner from './components/HeroBanner';
import AnimatedProductCard from './components/AnimatedProductCard';
import AnimatedBackground from './components/AnimatedBackground';
import { products } from './mock/products';
import { CartProvider } from './context/CartContext';
import CartView from './components/CartView';

const App = () => {
  const [isCartViewVisible, setIsCartViewVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75;
        if (isVisible) {
          el.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#0A0F2C] text-[#F2F2F2] relative overflow-x-hidden">
        <AnimatedBackground />
        <LayoutHeader onCartClick={() => setIsCartViewVisible(!isCartViewVisible)} />
        
        {isCartViewVisible ? (
          <CartView />
        ) : (
          <main>
            <HeroBanner />
            
            <section className="py-20 animate-on-scroll">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">
                  <span className="text-[#32FFC4]">PRODUCTOS</span> DESTACADOS
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {products.map(product => (
                    <AnimatedProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </section>
          </main>
        )}

        <style jsx global>{`
          .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </CartProvider>
  );
};

export default App;


// DONE