import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartView = ({ isOpen, onClose }) => {
  const { cartItems, totalPrice, removeItemFromCart, updateItemQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    onClose(); // Close the cart panel
    navigate('/checkout/payment');
  };

  // No early return null for isOpen false, to allow exit animations
  // CSS classes will handle visibility and interactivity

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ease-in-out
                    ${isOpen ? 'bg-opacity-50' : 'bg-opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>

      {/* Side Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50
                    transform transition-transform duration-300 ease-in-out flex flex-col
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Tu Carrito</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900 text-2xl">&times;</button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex-grow flex flex-col justify-center items-center p-4 text-center">
            <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Tu carrito está vacío</h3>
            <p className="text-sm text-gray-500">Agrega algunos productos para verlos aquí.</p>
          </div>
        ) : (
          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-start justify-between bg-gray-50 p-3 rounded-lg shadow-sm">
                <div className="flex items-start space-x-3">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h3 className="font-semibold text-md text-gray-800">{item.name}</h3>
                    <p className="text-gray-600 text-xs">${item.price.toFixed(2)}</p>
                    <button
                      onClick={() => removeItemFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 text-xs mt-1"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <div className="flex items-center">
                    <button
                      onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-l text-sm hover:bg-gray-300"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-3 py-0.5 bg-white border-t border-b text-gray-800 text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-r text-sm hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <p className="font-semibold text-gray-800 text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="p-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Subtotal:</h3>
              <h3 className="text-lg font-semibold text-gray-800">${totalPrice.toFixed(2)}</h3>
            </div>
            <button
              onClick={handleProceedToPayment}
              className="w-full bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
            >
              Proceder al Pago
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartView;
