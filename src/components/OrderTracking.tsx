import React from 'react';
import { Order } from '../types/shoe';
import { Calendar, User, Package, Truck, CheckCircle } from 'lucide-react';

interface OrderTrackingProps {
  order: Order;
}

const OrderTracking: React.FC<OrderTrackingProps> = ({ order }) => {
  const statusSteps = [
    { status: 'Design', label: 'Design Approved', icon: '🎨' },
    { status: 'Production', label: 'In Production', icon: '🔨' },
    { status: 'QualityCheck', label: 'Quality Check', icon: '✓' },
    { status: 'Shipping', label: 'Shipping', icon: '📦' },
    { status: 'Delivered', label: 'Delivered', icon: '✓' },
  ];

  const currentStepIndex = statusSteps.findIndex(step => step.status === order.status);

  return (
    <div className="glass-effect p-8 rounded-xl">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Order #{order.id.slice(0, 8)}</h3>
          <p className="text-gray-400 text-sm">Placed on {new Date(order.orderDate).toLocaleDateString()}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-400 text-sm">Estimated Delivery</p>
          <p className="text-yellow-400 font-bold">{new Date(order.estimatedDelivery).toLocaleDateString()}</p>
        </div>
      </div>

      {/* Status Timeline */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          {statusSteps.map((step, index) => (
            <div key={step.status} className="flex flex-col items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-lg mb-2 transition-smooth ${
                  index <= currentStepIndex
                    ? 'bg-yellow-600 text-black border-2 border-yellow-400'
                    : 'bg-gray-700 text-gray-300 border-2 border-gray-600'
                }`}
              >
                {step.icon}
              </div>
              <p className="text-xs text-center text-gray-400">{step.label}</p>
            </div>
          ))}
        </div>
        <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-yellow-600 transition-all duration-300"
            style={{ width: `${((currentStepIndex + 1) / statusSteps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Artisan Info */}
      <div className="bg-gray-900/50 p-4 rounded-lg mb-8 flex items-center space-x-4">
        <User size={24} className="text-yellow-400" />
        <div>
          <p className="text-gray-400 text-sm">Master Artisan</p>
          <p className="text-white font-bold">{order.artisan}</p>
        </div>
      </div>

      {/* Progress Photos */}
      {order.progressPhotos.length > 0 && (
        <div className="mb-8">
          <h4 className="text-lg font-bold text-white mb-4">Production Progress</h4>
          <div className="grid grid-cols-2 gap-4">
            {order.progressPhotos.map((photo, index) => (
              <div key={index} className="bg-gray-900/50 rounded-lg overflow-hidden">
                <div className="w-full h-32 bg-gray-800 flex items-center justify-center border-2 border-dashed border-yellow-600/30">
                  <div className="text-center">
                    <p className="text-2xl mb-2">📸</p>
                    <p className="text-gray-400 text-xs">Photo placeholder</p>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-yellow-400 font-semibold text-sm">{photo.step}</p>
                  <p className="text-gray-400 text-xs mt-1">{photo.description}</p>
                  <p className="text-gray-500 text-xs mt-1">{new Date(photo.timestamp).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Order Details */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-900/50 p-4 rounded-lg">
          <p className="text-gray-400 text-sm">Shoe Model</p>
          <p className="text-white font-bold">{order.shoeConfig.model}</p>
        </div>
        <div className="bg-gray-900/50 p-4 rounded-lg">
          <p className="text-gray-400 text-sm">Material</p>
          <p className="text-white font-bold">{order.shoeConfig.fabricOuter}</p>
        </div>
        <div className="bg-gray-900/50 p-4 rounded-lg">
          <p className="text-gray-400 text-sm">Payment Status</p>
          <p className={`font-bold ${order.paymentStatus === 'Completed' ? 'text-green-400' : 'text-yellow-400'}`}>
            {order.paymentStatus}
          </p>
        </div>
        <div className="bg-gray-900/50 p-4 rounded-lg">
          <p className="text-gray-400 text-sm">Payment Method</p>
          <p className="text-white font-bold">{order.paymentMethod || 'Pending'}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
