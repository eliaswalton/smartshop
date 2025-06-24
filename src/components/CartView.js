import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartView = () => {
  const { cartItems, totalPrice, removeItemFromCart, updateItemQuantity } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Tu carrito está vacío</h2>
        <p>Agrega algunos productos para verlos aquí.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Tu Carrito</h2>
      <div className="space-y-4">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
            <div className="flex items-center space-x-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                <p className="text-gray-600 text-sm">${item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l hover:bg-gray-300"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="px-4 py-1 bg-gray-100 text-gray-800">{item.quantity}</span>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded-r hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              <p className="font-semibold text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
              <button
                onClick={() => removeItemFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-right">
        <h3 className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</h3>
        <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
          Proceder al Pago
        </button>
      </div>
    </div>
  );
};

export default CartView;
