export interface ShoeConfig {
  id?: string;
  model: 'Oxford' | 'Derby' | 'Loafers' | 'Casual' | 'HighTop' | 'LowTop';
  size: number;
  width: 'Narrow' | 'Standard' | 'Wide';
  fabricOuter: 'Premium Leather' | 'Suede' | 'Faux Leather' | 'Mesh' | 'Cloth' | 'Bamboo';
  fabricColor: string;
  heelHeight: '0.5"' | '1"' | '1.5"' | '2"' | '2.5"' | '3"';
  shoeLength: 'LowTop' | 'MidTop' | 'HighTop';
  insoleComfort: 'Basic Cushion' | 'Memory Foam' | 'Orthotic Foam' | 'Premium Gel';
  soleType: 'Leather' | 'Crepe' | 'Commando Rubber' | 'Rubber';
  soleThickness: '10mm' | '12mm' | '14mm' | '16mm';
  description?: string;
  createdAt?: string;
  price?: number;
}

export interface Order {
  id: string;
  customerId: string;
  shoeConfig: ShoeConfig;
  status: 'Design' | 'Production' | 'QualityCheck' | 'Shipping' | 'Delivered';
  artisan: string;
  orderDate: string;
  estimatedDelivery: string;
  progressPhotos: ProgressPhoto[];
  paymentStatus: 'Pending' | 'Completed' | 'Failed';
  paymentMethod?: 'UPI' | 'Card' | 'Cash';
}

export interface ProgressPhoto {
  step: string;
  imageUrl: string;
  timestamp: string;
  description: string;
}

export interface Artisan {
  id: string;
  name: string;
  specialization: string;
  yearsOfExperience: number;
  bio: string;
  profileImage: string;
  completedShoes: number;
}

export interface TemplateDesign {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  shoeConfig: ShoeConfig;
  artisanId: string;
}
