export const experiences = [
  {
    id: 1,
    name: "The Chef's Table",
    description: "An intimate 7-course journey led by our Executive Chef. Witness the artistry behind every dish in our semi-private kitchen space.",
    price: 150,
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
    features: ["Private Chef", "Wine Pairing", "Custom Menu", "Kitchen Tour"]
  },
  {
    id: 2,
    name: "Wine Cellar Tasting",
    description: "Explore our collection of rare vintages in the heart of our cellar. Guided by our head sommelier with artisanal cheese pairings.",
    price: 85,
    image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=800&auto=format&fit=crop",
    features: ["Sommelier Guided", "Rare Vintages", "Pairing Plate", "Cellar Tour"]
  },
  {
    id: 3,
    name: "Rooftop Garden Lounge",
    description: "Enjoy handcrafted cocktails and botanical-inspired small plates with panoramic views of the city skyline.",
    price: 45,
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=800&auto=format&fit=crop",
    features: ["Panoramic Views", "Signature Cocktails", "Small Plates", "Live Music"]
  }
];

export const formatExperiencePrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price) + " / Person";
};
