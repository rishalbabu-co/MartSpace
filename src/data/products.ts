import { Box, Truck, Building2, Factory, Cpu, Shirt, Wheat } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  moq: string;
  supplier: string;
  location: string;
  category: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  distance?: number;
}

export const categories = [
  { icon: Box, name: 'Industrial Supplies' },
  { icon: Truck, name: 'Logistics' },
  { icon: Building2, name: 'Construction' },
  { icon: Factory, name: 'Manufacturing' },
  { icon: Cpu, name: 'Electronics' },
  { icon: Shirt, name: 'Textiles' },
  { icon: Wheat, name: 'Agriculture' },
];

export const sampleProducts: Product[] = [
  {
    id: 1,
    name: 'Industrial Automation System',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=800&q=80',
    price: '$2,500 - $10,000',
    moq: '1 Set',
    supplier: 'TechCorp Industries',
    location: 'Shanghai, China',
    category: 'Industrial Supplies',
    coordinates: { lat: 31.2304, lng: 121.4737 }
  },
  {
    id: 2,
    name: 'Solar Panel Kit',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    price: '$800 - $1,200',
    moq: '10 Units',
    supplier: 'GreenEnergy Solutions',
    location: 'Gujarat, India',
    category: 'Electronics',
    coordinates: { lat: 22.2587, lng: 71.1924 }
  },
  {
    id: 3,
    name: 'Construction Equipment',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80',
    price: '$15,000 - $25,000',
    moq: '1 Unit',
    supplier: 'BuildTech Solutions',
    location: 'Dubai, UAE',
    category: 'Construction',
    coordinates: { lat: 25.2048, lng: 55.2708 }
  },
  {
    id: 4,
    name: 'Textile Manufacturing Machine',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80',
    price: '$8,000 - $12,000',
    moq: '1 Unit',
    supplier: 'TextilePro Industries',
    location: 'Mumbai, India',
    category: 'Textiles',
    coordinates: { lat: 19.0760, lng: 72.8777 }
  },
  {
    id: 5,
    name: 'Agricultural Drone',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80',
    price: '$3,000 - $5,000',
    moq: '2 Units',
    supplier: 'AgriTech Solutions',
    location: 'California, USA',
    category: 'Agriculture',
    coordinates: { lat: 36.7783, lng: -119.4179 }
  }
];