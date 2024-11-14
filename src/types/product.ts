export interface PriceRange {
  min: string;
  max: string;
  currency: string;
}

export interface Specification {
  id: string;
  group: string;
  key: string;
  value: string;
  unit?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  model: string;
  sku: string;
  price: PriceRange;
  moq: string;
  unit: string;
  specifications: Specification[];
  images: File[];
  mainImage: File | null;
  keywords: string[];
  customization: {
    available: boolean;
    options: string[];
  };
  warranty: string;
  leadTime: string;
}