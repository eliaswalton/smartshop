import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const PaymentPage = () => {
  const { cartItems, totalPrice, clearCart } = useContext(CartContext); // Assuming clearCart will be added
  const navigate = useNavigate();

  const handleConfirmPayment = () => {
    // In a real app, here you would handle image upload and backend confirmation.
    // For simulation:
    if (clearCart) { // Check if clearCart is available
        clearCart();
    }
    navigate('/checkout/thank-you');
  };

  if (cartItems.length === 0 && totalPrice === 0) { // Check if cart was emptied by navigating back
    return (
        <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-3xl font-bold text-[#32FFC4] mb-6">Página de Pago</h1>
            <p className="text-xl mb-4">Tu carrito está vacío o el pago ya fue procesado.</p>
            <p className="mb-8">Si ya pagaste, ¡gracias por tu compra!</p>
            <button
                onClick={() => navigate('/tienda')}
                className="bg-[#32FFC4] text-[#0A0F2C] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition"
            >
                Volver a la Tienda
            </button>
        </div>
    );
  }


  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#32FFC4]">Confirmar y Pagar</h1>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Order Summary Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg text-gray-800">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-3">Resumen de tu Pedido</h2>
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center py-3 border-b last:border-b-0">
              <div>
                <p className="font-medium">{item.name} (x{item.quantity})</p>
                <p className="text-sm text-gray-600">${item.price.toFixed(2)} c/u</p>
              </div>
              <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <div className="flex justify-between items-center mt-6 pt-3 border-t">
            <p className="text-xl font-bold">Total:</p>
            <p className="text-xl font-bold text-[#32FFC4]">${totalPrice.toFixed(2)}</p>
          </div>
        </div>

        {/* Payment Instructions and Upload Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg text-gray-800">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-3">Instrucciones de Pago</h2>
          <div className="space-y-4 mb-6">
            <p>Por favor, realiza la transferencia por el monto total de <strong>${totalPrice.toFixed(2)}</strong> a la siguiente cuenta bancaria:</p>
            <ul className="list-disc list-inside bg-gray-50 p-4 rounded-md">
              <li><strong>Banco:</strong> Banco SmartTech</li>
              <li><strong>Número de Cuenta:</strong> 123-456789-00</li>
              <li><strong>Titular:</strong> SmartShop S.A.</li>
              <li><strong>Referencia:</strong> TuNombre_PedidoSmartShop</li>
            </ul>
            <p>Una vez realizada la transferencia, sube el comprobante de pago.</p>
          </div>

          <div>
            <label htmlFor="payment-screenshot" className="block text-sm font-medium text-gray-700 mb-1">
              Adjuntar Comprobante de Pago:
            </label>
            <input
              type="file"
              id="payment-screenshot"
              name="payment-screenshot"
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#32FFC4] file:text-[#0A0F2C] hover:file:bg-opacity-80"
            />
            <p className="mt-1 text-xs text-gray-500">Formatos aceptados: JPG, PNG. (Funcionalidad simulada)</p>
          </div>

          <button
            onClick={handleConfirmPayment}
            className="w-full mt-8 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition text-lg"
          >
            Confirmar Pago y Enviar Comprobante
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
