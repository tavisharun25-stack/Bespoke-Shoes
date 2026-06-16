import { create } from 'zustand';
import { ShoeConfig, Order, TemplateDesign } from '../types/shoe';

interface ShoeStore {
  customizations: ShoeConfig[];
  currentCustomization: ShoeConfig | null;
  addCustomization: (config: ShoeConfig) => void;
  updateCustomization: (id: string, config: Partial<ShoeConfig>) => void;
  deleteCustomization: (id: string) => void;
  setCurrentCustomization: (config: ShoeConfig | null) => void;

  orders: Order[];
  addOrder: (order: Order) => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
  addProgressPhoto: (orderId: string, photo: any) => void;

  templates: TemplateDesign[];
  setTemplates: (templates: TemplateDesign[]) => void;
}

const useShoeStore = create<ShoeStore>((set) => ({
  customizations: JSON.parse(localStorage.getItem('customizations') || '[]'),
  currentCustomization: null,

  addCustomization: (config: ShoeConfig) =>
    set((state) => {
      const newConfig = { ...config, id: Date.now().toString(), createdAt: new Date().toISOString() };
      const updated = [...state.customizations, newConfig];
      localStorage.setItem('customizations', JSON.stringify(updated));
      return { customizations: updated };
    }),

  updateCustomization: (id: string, config: Partial<ShoeConfig>) =>
    set((state) => {
      const updated = state.customizations.map((c) =>
        c.id === id ? { ...c, ...config } : c
      );
      localStorage.setItem('customizations', JSON.stringify(updated));
      return { customizations: updated };
    }),

  deleteCustomization: (id: string) =>
    set((state) => {
      const updated = state.customizations.filter((c) => c.id !== id);
      localStorage.setItem('customizations', JSON.stringify(updated));
      return { customizations: updated };
    }),

  setCurrentCustomization: (config: ShoeConfig | null) =>
    set({ currentCustomization: config }),

  orders: JSON.parse(localStorage.getItem('orders') || '[]'),

  addOrder: (order: Order) =>
    set((state) => {
      const updated = [...state.orders, order];
      localStorage.setItem('orders', JSON.stringify(updated));
      return { orders: updated };
    }),

  updateOrderStatus: (orderId: string, status: Order['status']) =>
    set((state) => {
      const updated = state.orders.map((order) =>
        order.id === orderId ? { ...order, status } : order
      );
      localStorage.setItem('orders', JSON.stringify(updated));
      return { orders: updated };
    }),

  addProgressPhoto: (orderId: string, photo: any) =>
    set((state) => {
      const updated = state.orders.map((order) =>
        order.id === orderId
          ? { ...order, progressPhotos: [...order.progressPhotos, photo] }
          : order
      );
      localStorage.setItem('orders', JSON.stringify(updated));
      return { orders: updated };
    }),

  templates: [
    {
      id: '1',
      name: 'Classic Oxford',
      description: 'Timeless formal elegance',
      thumbnail: '',
      shoeConfig: {
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
      artisanId: '1',
    },
    {
      id: '2',
      name: 'Urban Casual',
      description: 'Modern comfort for everyday wear',
      thumbnail: '',
      shoeConfig: {
        model: 'Casual',
        size: 9,
        width: 'Standard',
        fabricOuter: 'Mesh',
        fabricColor: '#d4af37',
        heelHeight: '1"',
        shoeLength: 'LowTop',
        insoleComfort: 'Memory Foam',
        soleType: 'Rubber',
        soleThickness: '14mm',
      },
      artisanId: '2',
    },
    {
      id: '3',
      name: 'Eco-Friendly Boot',
      description: 'Sustainable luxury for conscious living',
      thumbnail: '',
      shoeConfig: {
        model: 'HighTop',
        size: 9,
        width: 'Standard',
        fabricOuter: 'Bamboo',
        fabricColor: '#2d5016',
        heelHeight: '1.5"',
        shoeLength: 'HighTop',
        insoleComfort: 'Premium Gel',
        soleType: 'Commando Rubber',
        soleThickness: '14mm',
      },
      artisanId: '3',
    },
  ],

  setTemplates: (templates: TemplateDesign[]) =>
    set({ templates }),
}));

export default useShoeStore;
