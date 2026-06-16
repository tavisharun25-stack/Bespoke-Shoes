import React from 'react';
import { ShoeConfig } from '../types/shoe';

interface ShoePreview3DProps {
  config: ShoeConfig;
}

const ShoePreview3D: React.FC<ShoePreview3DProps> = ({ config }) => {
  return (
    <div className="w-full h-96 bg-gradient-to-b from-gray-900 to-black rounded-lg border border-yellow-600/20 flex items-center justify-center overflow-hidden">
      <div className="text-center">
        <div className="w-64 h-64 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center border-2 border-dashed border-yellow-600/30 mb-4">
          <div>
            <div className="text-6xl mb-4">👞</div>
            <p className="text-gray-400 text-sm">3D Preview Coming Soon</p>
            <p className="text-yellow-600 text-xs mt-2">Shoe visualization will appear here</p>
          </div>
        </div>

        <div className="mt-6 space-y-2 text-left max-w-xs mx-auto">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Model:</span>
            <span className="text-yellow-400 font-semibold">{config.model}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Size:</span>
            <span className="text-yellow-400 font-semibold">US {config.size}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Material:</span>
            <span className="text-yellow-400 font-semibold">{config.fabricOuter}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Color:</span>
            <div className="flex items-center space-x-2">
              <div
                className="w-4 h-4 rounded border border-gray-600"
                style={{ backgroundColor: config.fabricColor }}
              />
              <span className="text-yellow-400 font-semibold">{config.fabricColor}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoePreview3D;
