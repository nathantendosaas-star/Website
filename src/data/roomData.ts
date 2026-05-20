export const rooms = [
  {
    id: 1,
    name: "Deluxe Single Room",
    description: "Elegant comfort for the solo traveler. Features a queen-sized bed, high-speed Wi-Fi, and city views.",
    price: 350000,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop",
    amenities: ["Free Wi-Fi", "AC", "Smart TV", "Mini Bar"]
  },
  {
    id: 2,
    name: "Executive Double Room",
    description: "Spacious and modern, perfect for couples or business partners. Features twin beds and a dedicated workspace.",
    price: 450000,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop",
    amenities: ["Free Wi-Fi", "AC", "Smart TV", "City View", "Coffee Maker"]
  },
  {
    id: 3,
    name: "Luxury Suite",
    description: "Our finest accommodation. Includes a separate living area, king-sized bed, and a private balcony with panoramic views.",
    price: 750000,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
    amenities: ["Free Wi-Fi", "AC", "Smart TV", "Private Balcony", "Jacuzzi"]
  }
];

export const formatRoomPrice = (price: number) => {
  return new Intl.NumberFormat('en-UG', {
    style: 'currency',
    currency: 'UGX',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price) + " / Night";
};
