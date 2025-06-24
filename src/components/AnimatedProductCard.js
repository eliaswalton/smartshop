import React, { useRef, useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const AnimatedProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`group relative bg-[#0A0F2C] border border-[#A7A9AC]/20 rounded-xl overflow-hidden transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/producto/${product.id}`} className="block group/link">
        <div
          className={`absolute inset-0 bg-[#32FFC4] opacity-0 rounded-xl pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-20' : ''}`}
          style={{
            boxShadow: '0 0 60px 10px rgba(50, 255, 196, 0.5)',
            filter: 'blur(20px)'
          }}
        />

        <div className="relative pb-[100%] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className={`absolute h-full w-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
        </div>

        <div className="p-5 relative">
          <h3 className="font-bold text-lg mb-1 transition-colors duration-300 text-[#F2F2F2] group-hover/link:text-[#32FFC4]">
            {product.name}
          </h3>
          <p className="text-md font-semibold text-[#32FFC4] mb-2">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </Link>
      <div className="p-5 pt-0 relative"> {/* Add to cart button remains outside the Link */}
        <button
          onClick={() => addItemToCart(product)}
          className="mt-0 relative overflow-hidden inline-block px-6 py-3 bg-transparent border-2 border-[#32FFC4] text-[#32FFC4] rounded-lg hover:text-[#0A0F2C] hover:bg-[#32FFC4] transition-colors duration-300"
        >
          <span className="relative z-10">AGREGAR AL CARRITO</span>
          {/* Simplified button hover effect slightly for clarity if the full card hover was conflicting */}
        </button>
      </div>
    </div>
  );
};

export default AnimatedProductCard;