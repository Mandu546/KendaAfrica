export const hotels = [
  {
    id: 1,

    slug: "enashipai-resort",

    city: "naivasha",

    name: "Enashipai Resort",

    category: "hotel",

    thumbnail:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",

    heroImage:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",

    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    ],

    description:
      "Luxury lakeside resort located in Naivasha.",

    shortDescription:
      "Luxury lakeside resort.",

    location: {
      address: "Moi South Lake Road",
      county: "Nakuru County",

      coordinates: {
        lat: -0.716,
        lng: 36.433,
      },

      googleMaps:
        "https://maps.google.com",
    },

    rating: 4.7,

    priceRange:
      "KES 20,000 - 50,000",

    amenities: [
      "Pool",
      "Spa",
      "Restaurant",
      "Gym",
      "Conference",
      "WiFi",
    ],

    // ADD THIS HERE
    facilities: [
      "Swimming Pool",
      "Spa",
      "Conference Center",
      "Gym",
      "Restaurant",
    ],

    // ADD THIS HERE
    roomTypes: [
      "Standard Room",
      "Deluxe Room",
      "Executive Suite",
    ],

    // ADD THIS HERE
    booking: {
      checkIn: "2:00 PM",
      checkOut: "10:00 AM",
    },

    contacts: {
      phone: "+254700000000",
      email: "info@enashipai.com",
      website: "enashipai.com",
    },

    // ADD THIS HERE
    socials: {
      instagram: "@enashipai",
      facebook: "Enashipai Resort",
    },

    // REPLACE nearby WITH THIS
    nearby: [
      {
        name: "Hell's Gate",
        distance: "20 km",
      },
      {
        name: "Lake Naivasha",
        distance: "5 km",
      },
    ],

    reviews: [
      {
        user: "John",
        rating: 5,
        comment: "Amazing experience.",
      },
    ],
  },
];