import React, { useState } from 'react';
import CustomizationBuilder from '../components/CustomizationBuilder';
import useShoeStore from '../store/useShoeStore';
import { ShoeConfig, Order } from '../types/shoe';
import { useNavigate } from 'react-router-dom';

const Customize = () => {
  const { addCustomization, addOrder } = useShoeStore();
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleComplete = (config: ShoeConfig) => {
    addCustomization(config);

    // Create sample order
    const order: Order = {
      id: Date.now().toString(),
      customerId: 'CUST_' + Date.now(),
      shoeConfig: config,
      status: 'Design',
      artisan: 'Rajesh Kumar',
      orderDate: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
      progressPhotos: [],
      paymentStatus: 'Pending',
      paymentMethod: 'UPI',
    };

    addOrder(order);
    setOrderPlaced(true);

    setTimeout(() => {
      navigate('/orders');
    }, 2000);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center pt-20">
        <div className="text-center max-w-2xl mx-auto px-4">
          <div className="text-6xl mb-6">✨</div>
          <h1 className="text-4xl font-bold text-white mb-4">Order Placed Successfully!</h1>
          <p className="text-gray-400 mb-8">
            Your custom shoe design has been received. Our artisans will begin crafting your perfect shoe shortly. You can track your order progress in the Orders section.
          </p>
          <div className="glass-effect p-6 rounded-lg mb-8 text-left">
            <p className="text-gray-400 mb-2">✓ Design saved and ready for production</p>
            <p className="text-gray-400 mb-2">✓ Artisan assigned to your project</p>
            <p className="text-gray-400">✓ Real-time progress updates coming soon</p>
          </div>
          <p className="text-gray-500 text-sm">Redirecting to your orders...</p>
        </div>
      </div>
    );
  }

  return <CustomizationBuilder onComplete={handleComplete} />;
};

export default Customize;
