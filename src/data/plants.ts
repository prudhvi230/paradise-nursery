
import { Plant } from '../store/cartSlice';

export const plants: Plant[] = [
  // Indoor Plants
  {
    id: 1,
    name: "Monstera Deliciosa",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=400&fit=crop",
    category: "Indoor Plants",
    description: "Large, glossy leaves with natural splits"
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop",
    category: "Indoor Plants",
    description: "Low maintenance with striking vertical leaves"
  },
  {
    id: 3,
    name: "Fiddle Leaf Fig",
    price: 68.99,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop",
    category: "Indoor Plants",
    description: "Dramatic large leaves, perfect statement plant"
  },
  // Flowering Plants
  {
    id: 4,
    name: "Peace Lily",
    price: 28.99,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop",
    category: "Flowering Plants",
    description: "Elegant white blooms and glossy green leaves"
  },
  {
    id: 5,
    name: "Orchid Collection",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=400&fit=crop",
    category: "Flowering Plants",
    description: "Beautiful exotic flowering plants"
  },
  {
    id: 6,
    name: "African Violet",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop",
    category: "Flowering Plants",
    description: "Compact plant with vibrant purple flowers"
  },
  // Succulents
  {
    id: 7,
    name: "Jade Plant",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop",
    category: "Succulents",
    description: "Lucky plant with thick, fleshy leaves"
  },
  {
    id: 8,
    name: "Succulent Garden",
    price: 35.99,
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=400&fit=crop",
    category: "Succulents",
    description: "Variety pack of colorful succulents"
  }
];
