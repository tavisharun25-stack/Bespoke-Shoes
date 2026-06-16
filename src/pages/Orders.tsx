import React from 'react';
import useShoeStore from '../store/useShoeStore';
import OrderTracking from '../components/OrderTracking';
import { Link } from 'react-router-dom';
import { Package } from 'lucide-react';

const Orders = () => {
  const { orders } = useShoeStore();

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-24 pb-20 flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-4">
          <Package size={64} className="text-gray-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-white mb-4">No Orders Yet</h1>
          <p className="text-gray-400 mb-8">
            You haven't placed any custom shoe orders yet. Start designing your perfect shoe and place your first order!
          </p>
          <Link
            to="/customize"
            className="inline-block bg-yellow-600 hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold uppercase tracking-wider transition-smooth"
          >
            Design Your First Shoe
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-white mb-4">My Orders</h1>
        <p className="text-gray-400 mb-12">
          Track your custom shoe orders and see real-time updates from your artisan.
        </p>

        <div className="space-y-8">
          {orders.map((order) => (
            <OrderTracking key={order.id} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
