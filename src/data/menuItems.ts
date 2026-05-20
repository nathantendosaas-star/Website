export const menuCategories = ["All", "Starters", "Main Courses", "Side Dishes", "Fine Wines", "Desserts"];

export const menuItems = [
  {
    id: 1,
    name: "Truffle Infused Risotto",
    description: "Creamy Acquerello rice, seasonal black truffles, 36-month aged Parmigiano-Reggiano, and a hint of white truffle oil.",
    price: 32,
    category: "Main Courses",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=800&auto=format&fit=crop",
    ],
    featured: true,
  },
  {
    id: 2,
    name: "Pan-Seared Scallops",
    description: "Hokkaido scallops, cauliflower purée, crispy pancetta, and a delicate lemon-herb foam.",
    price: 28,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop",
    ],
    featured: true,
  },
  {
    id: 3,
    name: "Wagyu Beef Tenderloin",
    description: "Grade A5 Wagyu, smoked bone marrow butter, caramelized shallots, and a rich red wine reduction.",
    price: 65,
    category: "Main Courses",
    image: "https://images.unsplash.com/photo-1546241072-48010ad28c2c?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1546241072-48010ad28c2c?q=80&w=800&auto=format&fit=crop",
    ],
    featured: true,
  },
  {
    id: 4,
    name: "Heirloom Tomato Salad",
    description: "Balsamic pearls, fresh burrata, basil crystals, and extra virgin olive oil from the Tuscan hills.",
    price: 18,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1592417817098-8fd3d9ebc4a5?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1592417817098-8fd3d9ebc4a5?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: 5,
    name: "Vintage Bordeaux 2015",
    description: "A full-bodied red with notes of blackcurrant, cedar, and a hint of spice. Perfectly aged.",
    price: 120,
    category: "Fine Wines",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: 6,
    name: "Deconstructed Tiramisu",
    description: "Espresso-soaked ladyfingers, mascarpone clouds, and a dusting of Venezuelan cocoa.",
    price: 16,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=800&auto=format&fit=crop",
    ],
  }
];

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};
