export const apiurl =
  import.meta.env.VITE_LOCAL_URL === "production"
    ? "http://localhost:4000`"
    : `http://localhost:4000`;  




export const locations = [
    { label: "Delhi", id: 54343 },
    { label: "Chennai", id: 8923 },
    { label: "Mumbai", id: 3456 },
  ];

  
export const Chennai = [
    {
        "hotelName": "Ocean View Resort",
        "pricePerNight": 4000,
        "amenities": [
          "Beachfront Access",
          "Outdoor Pool",
          "Restaurant",
          "Fitness Center",
          "Spa & Wellness Center"
        ],
        "location": {
          "city": "Chennai",
          "address": "456 Beach Road, Chennai, Tamil Nadu, India",
          "latitude": 13.0452,
          "longitude": 80.2640
        },
        "image": "https://example.com/ocean-view-resort.jpg"
      },
      {
        "hotelName": "Royal Orchid Grand",
        "pricePerNight": 3500,
        "amenities": [
          "Luxury Suites",
          "Fine Dining Restaurant",
          "Rooftop Bar",
          "Business Center",
          "Concierge Service"
        ],
        "location": {
          "city": "Chennai",
          "address": "789 Elegant Street, Chennai, Tamil Nadu, India",
          "latitude": 13.0674,
          "longitude": 80.2376
        },
        "image": "https://example.com/royal-orchid-grand.jpg"
      },
      {
        "hotelName": "Urban Retreat Inn",
        "pricePerNight": 2800,
        "amenities": [
          "Modern Rooms",
          "City Views",
          "24/7 Room Service",
          "Meeting Rooms",
          "Airport Shuttle"
        ],
        "location": {
          "city": "Chennai",
          "address": "321 Downtown Avenue, Chennai, Tamil Nadu, India",
          "latitude": 13.0827,
          "longitude": 80.2707
        },
        "image": "https://example.com/urban-retreat-inn.jpg"
      }
      
      
      
      
    
      
      
      
      
]