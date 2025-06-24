import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutHeader from './components/LayoutHeader';
import HeroBanner from './components/HeroBanner';
import AnimatedProductCard from './components/AnimatedProductCard';
import AnimatedBackground from './components/AnimatedBackground';
import { products } from './mock/products';
import { CartProvider } from './context/CartContext';
import CartView from './components/CartView';
import HomePage from './pages/HomePage';
import TiendaPage from './pages/TiendaPage';
import NosotrosPage from './pages/NosotrosPage';
import ContactoPage from './pages/ContactoPage';
import PaymentPage from './pages/PaymentPage';
import ThankYouPage from './pages/ThankYouPage';

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
      <Router>
        <div className="min-h-screen bg-[#0A0F2C] text-[#F2F2F2] relative overflow-x-hidden">
          <AnimatedBackground />
          <LayoutHeader onCartClick={() => setIsCartViewVisible(true)} /> {/* Changed to always set true, CartView handles its own close */}

          <Routes>
            <Route path="/" element={
              <main>
                <HomePage /> {/* HomePage now includes HeroBanner */}
                <section className="py-20 animate-on-scroll">
                  <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">
                      <span className="text-[#32FFC4]">PRODUCTOS</span> DESTACADOS
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {products.slice(0, 3).map(product => ( // Display a few featured products
                        <AnimatedProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </div>
                </section>
              </main>
            } />
            <Route path="/tienda" element={<TiendaPage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/checkout/payment" element={<PaymentPage />} />
            <Route path="/checkout/thank-you" element={<ThankYouPage />} />
            <Route path="/inicio" element={ //This route ensures /inicio also shows the home page content
              <main>
                <HomePage /> {/* HomePage now includes HeroBanner */}
                <section className="py-20 animate-on-scroll">
                  <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">
                      <span className="text-[#32FFC4]">PRODUCTOS</span> DESTACADOS
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {products.slice(0, 3).map(product => (
                        <AnimatedProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </div>
                </section>
              </main>
            } />
          </Routes>

          <CartView isOpen={isCartViewVisible} onClose={() => setIsCartViewVisible(false)} />

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
      </Router>
    </CartProvider>
  );
};

export default App;


// DONE