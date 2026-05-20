export const menuCategories = ["All", "Breakfast", "Lunch", "Dinner", "Drinks", "Desserts"];

export const menuItems = [
  {
    id: 1,
    name: "Naguru Sunrise Breakfast",
    description: "Two eggs your way, artisanal sausages, grilled tomatoes, and local organic coffee. Perfect for a hilltop morning.",
    price: 35000,
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1496042399014-17f06bb9d820?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1496042399014-17f06bb9d820?q=80&w=800&auto=format&fit=crop",
    ],
    featured: true,
  },
  {
    id: 2,
    name: "Grilled Tilapia Fillet",
    description: "Fresh Lake Victoria tilapia served with lemon butter sauce and a side of traditional steamed greens.",
    price: 45000,
    category: "Lunch",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop",
    ],
    featured: true,
  },
  {
    id: 3,
    name: "Hillview Beef Steak",
    description: "Tender beef tenderloin grilled to perfection, served with roasted seasonal vegetables and a red wine reduction.",
    price: 55000,
    category: "Dinner",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop",
    ],
    featured: true,
  },
  {
    id: 4,
    name: "Classic Luwombo Chicken",
    description: "Traditional slow-cooked chicken stew steamed in banana leaves, served with matooke and kachumbari.",
    price: 42000,
    category: "Dinner",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: 5,
    name: "Fresh Tropical Juice",
    description: "A refreshing blend of mango, pineapple, and passion fruit, squeezed fresh daily.",
    price: 12000,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: 6,
    name: "Hilltop Fruit Platter",
    description: "A seasonal selection of the finest local fruits, served with a honey-yogurt dip.",
    price: 18000,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=800&auto=format&fit=crop",
    ],
  }
];

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-UG', {
    style: 'currency',
    currency: 'UGX',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};
