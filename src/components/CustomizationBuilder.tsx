import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ShoeConfig } from '../types/shoe';
import ShoePreview3D from './ShoePreview3D';
import { ChevronRight, Check } from 'lucide-react';

interface CustomizationBuilderProps {
  onComplete: (config: ShoeConfig) => void;
  initialConfig?: ShoeConfig;
}

const CustomizationBuilder: React.FC<CustomizationBuilderProps> = ({ onComplete, initialConfig }) => {
  const { register, watch, handleSubmit, setValue } = useForm<ShoeConfig>({
    defaultValues: initialConfig || {
      model: 'Oxford',
      size: 9,
      width: 'Standard',
      fabricOuter: 'Premium Leather',
      fabricColor: '#1a1a1a',
      heelHeight: '1"',
      shoeLength: 'LowTop',
      insoleComfort: 'Orthotic Foam',
      soleType: 'Leather',
      soleThickness: '12mm',
    },
  });

  const [step, setStep] = useState(1);
  const config = watch();

  const steps = [
    { number: 1, title: 'Model & Fit', icon: '👟' },
    { number: 2, title: 'Materials', icon: '🧵' },
    { number: 3, title: 'Customization', icon: '⚙️' },
    { number: 4, title: 'Review', icon: '✓' },
  ];

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const onSubmit = (data: ShoeConfig) => {
    onComplete(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Step Indicator */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            {steps.map((s) => (
              <div key={s.number} className="flex flex-col items-center flex-1">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-2 transition-smooth ${
                    step >= s.number
                      ? 'bg-yellow-600 text-black border-2 border-yellow-400'
                      : 'bg-gray-700 text-gray-300 border-2 border-gray-600'
                  }`}
                >
                  {s.icon}
                </div>
                <p className="text-xs uppercase tracking-wider font-semibold text-center">
                  {s.title}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-yellow-600 transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2 space-y-8">
              {/* Step 1: Model & Fit */}
              {step === 1 && (
                <div className="glass-effect p-8 rounded-xl space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-6">Choose Your Shoe Model & Fit</h2>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">Shoe Model</label>
                    <select
                      {...register('model')}
                      className="w-full bg-gray-800 border border-yellow-600/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400"
                    >
                      <option value="Oxford">Oxford - Classic Formal</option>
                      <option value="Derby">Derby - Versatile Formal</option>
                      <option value="Loafers">Loafers - Sophisticated Casual</option>
                      <option value="Casual">Casual - Modern Everyday</option>
                      <option value="LowTop">Low Top - Minimalist</option>
                      <option value="HighTop">High Top - Premium Comfort</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-3">Size (US)</label>
                      <input
                        type="number"
                        {...register('size', { min: 5, max: 15 })}
                        className="w-full bg-gray-800 border border-yellow-600/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-3">Width</label>
                      <select
                        {...register('width')}
                        className="w-full bg-gray-800 border border-yellow-600/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400"
                      >
                        <option value="Narrow">Narrow</option>
                        <option value="Standard">Standard</option>
                        <option value="Wide">Wide</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">Shoe Length</label>
                    <select
                      {...register('shoeLength')}
                      className="w-full bg-gray-800 border border-yellow-600/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400"
                    >
                      <option value="LowTop">Low Top (Casual, Sneaker-style)</option>
                      <option value="MidTop">Mid Top (Ankle Support)</option>
                      <option value="HighTop">High Top (Maximum Support)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 2: Materials */}
              {step === 2 && (
                <div className="glass-effect p-8 rounded-xl space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-6">Select Your Materials</h2>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">Outer Fabric Material</label>
                    <select
                      {...register('fabricOuter')}
                      className="w-full bg-gray-800 border border-yellow-600/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400"
                    >
                      <option value="Premium Leather">Premium Leather - Timeless Luxury</option>
                      <option value="Suede">Suede - Soft Elegance</option>
                      <option value="Faux Leather">Faux Leather - Ethical Choice</option>
                      <option value="Mesh">Mesh - Breathable Comfort</option>
                      <option value="Cloth">Cloth - Natural Feel</option>
                      <option value="Bamboo">Bamboo - Sustainable Premium</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">Sole Type</label>
                    <select
                      {...register('soleType')}
                      className="w-full bg-gray-800 border border-yellow-600/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400"
                    >
                      <option value="Leather">Leather - Classic Premium</option>
                      <option value="Crepe">Crepe Rubber - Luxurious Comfort</option>
                      <option value="Commando Rubber">Commando Rubber - Durable Tread</option>
                      <option value="Rubber">Rubber - Modern Durability</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">Insole Comfort</label>
                    <select
                      {...register('insoleComfort')}
                      className="w-full bg-gray-800 border border-yellow-600/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400"
                    >
                      <option value="Basic Cushion">Basic Cushion - Classic Support</option>
                      <option value="Memory Foam">Memory Foam - Adaptive Comfort</option>
                      <option value="Orthotic Foam">Orthotic Foam - Premium Support</option>
                      <option value="Premium Gel">Premium Gel - Maximum Comfort</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Customization */}
              {step === 3 && (
                <div className="glass-effect p-8 rounded-xl space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-6">Customize Details</h2>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">Fabric Color</label>
                    <div className="flex items-center space-x-4">
                      <input
                        type="color"
                        {...register('fabricColor')}
                        className="w-20 h-20 rounded-lg cursor-pointer border border-yellow-600/30"
                      />
                      <div>
                        <p className="text-gray-400 text-sm">Selected Color</p>
                        <p className="text-yellow-400 font-semibold">{config.fabricColor}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">Heel Height</label>
                    <select
                      {...register('heelHeight')}
                      className="w-full bg-gray-800 border border-yellow-600/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400"
                    >
                      <option value="0.5\"">0.5 inch - Minimal Lift</option>
                      <option value="1\"">1 inch - Standard</option>
                      <option value="1.5\"">1.5 inch - Enhanced</option>
                      <option value="2\"">2 inch - Elevated</option>
                      <option value="2.5\"">2.5 inch - Premium</option>
                      <option value="3\"">3 inch - Statement</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">Sole Thickness</label>
                    <select
                      {...register('soleThickness')}
                      className="w-full bg-gray-800 border border-yellow-600/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400"
                    >
                      <option value="10mm">10mm - Minimal Cushioning</option>
                      <option value="12mm">12mm - Standard Comfort</option>
                      <option value="14mm">14mm - Enhanced Cushioning</option>
                      <option value="16mm">16mm - Maximum Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">Special Notes (Optional)</label>
                    <textarea
                      {...register('description')}
                      placeholder="Any special requests or notes for your artisan?"
                      className="w-full bg-gray-800 border border-yellow-600/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 h-24 resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Review */}
              {step === 4 && (
                <div className="glass-effect p-8 rounded-xl space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-6">Review Your Custom Shoe</h2>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gray-900/50 p-4 rounded-lg">
                      <p className="text-gray-400 text-sm">Model</p>
                      <p className="text-white font-bold">{config.model}</p>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-lg">
                      <p className="text-gray-400 text-sm">Size & Width</p>
                      <p className="text-white font-bold">US {config.size} ({config.width})</p>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-lg">
                      <p className="text-gray-400 text-sm">Material</p>
                      <p className="text-white font-bold">{config.fabricOuter}</p>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-lg">
                      <p className="text-gray-400 text-sm">Heel Height</p>
                      <p className="text-white font-bold">{config.heelHeight}</p>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-lg">
                      <p className="text-gray-400 text-sm">Sole Type</p>
                      <p className="text-white font-bold">{config.soleType}</p>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-lg">
                      <p className="text-gray-400 text-sm">Insole Comfort</p>
                      <p className="text-white font-bold">{config.insoleComfort}</p>
                    </div>
                  </div>

                  <div className="bg-yellow-600/10 border border-yellow-600/30 rounded-lg p-4">
                    <p className="text-yellow-400 text-sm font-semibold">✓ Ready to Order</p>
                    <p className="text-gray-300 text-sm mt-2">Click 'Complete Order' to proceed with payment and have your artisan begin crafting your perfect shoe!</p>
                  </div>
                </div>
              )}
            </div>

            {/* Preview Section */}
            <div className="lg:col-span-1 sticky top-24">
              <ShoePreview3D config={config} />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-12">
            <button
              type="button"
              onClick={handleBack}
              disabled={step === 1}
              className="px-6 py-3 rounded-lg border border-yellow-600/30 text-white hover:bg-yellow-600/10 disabled:opacity-50 disabled:cursor-not-allowed transition-smooth font-semibold"
            >
              ← Back
            </button>

            {step === 4 ? (
              <button
                type="submit"
                className="px-8 py-3 rounded-lg bg-yellow-600 hover:bg-yellow-500 text-black font-bold uppercase tracking-wider flex items-center space-x-2 transition-smooth"
              >
                <Check size={20} />
                <span>Complete Order</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                className="px-8 py-3 rounded-lg bg-yellow-600 hover:bg-yellow-500 text-black font-bold uppercase tracking-wider flex items-center space-x-2 transition-smooth"
              >
                <span>Next</span>
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomizationBuilder;
