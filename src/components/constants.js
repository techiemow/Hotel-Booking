export const apiurl =
  import.meta.env.VITE_LOCAL_URL === "production"
    ? "http://localhost:4000`"
    : `http://localhost:4000`;  




export const locations = [
    { label: "Delhi", id: 54343 },
    { label: "Chennai", id: 8923 },
    { label: "Mumbai", id: 3456 },
  ];

  
export const hotels = {
    "Chennai": [
      {
        "name": "Luxury Inn Chennai",
        "ratings": 4.5,
        "price_per_night_INR": 7500,
        "amenities": ["Free WiFi", "Swimming Pool", "Spa", "Restaurant"],
        "location": "Marina Beach, Chennai",
        "image": "https://example.com/images/luxury_inn_chennai.jpg"
      },
      {
        "name": "City View Hotel",
        "ratings": 3.8,
        "price_per_night_INR": 4500,
        "amenities": ["Breakfast Included", "Gym", "Parking"],
        "location": "Mount Road, Chennai",
        "image": "https://example.com/images/city_view_hotel.jpg"
      },
      {
        "name": "Taj Coromandel",
        "ratings": 4.7,
        "price_per_night_INR": 12000,
        "amenities": ["Luxury Rooms", "Fine Dining", "Spa", "Fitness Center"],
        "location": "Nungambakkam, Chennai",
        "image": "https://example.com/images/taj_coromandel_chennai.jpg"
      },
      {
        "name": "ITC Grand Chola",
        "ratings": 4.6,
        "price_per_night_INR": 10500,
        "amenities": ["Royal Suites", "Multiple Restaurants", "Pool", "Banquet Halls"],
        "location": "Guindy, Chennai",
        "image": "https://example.com/images/itc_grand_chola_chennai.jpg"
      },
      {
        "name": "Radisson Blu Hotel Chennai City Centre",
        "ratings": 4.3,
        "price_per_night_INR": 6500,
        "amenities": ["Free WiFi", "Restaurant", "Bar", "Fitness Center"],
        "location": "Egmore, Chennai",
        "image": "https://example.com/images/radisson_blu_chennai.jpg"
      },
      {
        "name": "Hyatt Regency Chennai",
        "ratings": 4.4,
        "price_per_night_INR": 9500,
        "amenities": ["Spacious Rooms", "Outdoor Pool", "Fitness Center", "Spa"],
        "location": "Anna Salai, Chennai",
        "image": "https://example.com/images/hyatt_regency_chennai.jpg"
      },
      {
        "name": "The Leela Palace Chennai",
        "ratings": 4.8,
        "price_per_night_INR": 14500,
        "amenities": ["Luxury Suites", "Fine Dining", "Beach Access", "Spa"],
        "location": "MRC Nagar, Chennai",
        "image": "https://example.com/images/leela_palace_chennai.jpg"
      },
      {
        "name": "The Raintree Hotel, Anna Salai",
        "ratings": 4.5,
        "price_per_night_INR": 8000,
        "amenities": ["Luxurious Rooms", "Rooftop Restaurant", "Fitness Center", "Spa"],
        "location": "Anna Salai, Chennai",
        "image": "https://example.com/images/theraintree_annasalai_chennai.jpg"
      },
      {
        "name": "Courtyard by Marriott Chennai",
        "ratings": 4.2,
        "price_per_night_INR": 7000,
        "amenities": ["Modern Rooms", "All-Day Dining", "Outdoor Pool", "Gym"],
        "location": "Teynampet, Chennai",
        "image": "https://example.com/images/courtyard_marriott_chennai.jpg"
      },
      {
        "name": "Hilton Chennai",
        "ratings": 4.4,
        "price_per_night_INR": 9000,
        "amenities": ["Spacious Suites", "Fine Dining", "Swimming Pool", "Fitness Center"],
        "location": "Guindy, Chennai",
        "image": "https://example.com/images/hilton_chennai.jpg"
      },
      {
        "name": "Feathers - A Radha Hotel",
        "ratings": 4.3,
        "price_per_night_INR": 6500,
        "amenities": ["Elegant Rooms", "Multi-Cuisine Restaurant", "Spa", "Banquet Halls"],
        "location": "Porur, Chennai",
        "image": "https://example.com/images/feathers_radha_hotel_chennai.jpg"
      },
      {
        "name": "Park Hyatt Chennai",
        "ratings": 4.6,
        "price_per_night_INR": 11000,
        "amenities": ["Luxury Accommodations", "Award-Winning Dining", "Spa", "Pool"],
        "location": "Velachery, Chennai",
        "image": "https://example.com/images/park_hyatt_chennai.jpg"
      }
   
    ],
    "Mumbai": [
      {
        "name": "Marine Plaza Mumbai",
        "ratings": 4.2,
        "price_per_night_INR": 8500,
        "amenities": ["Sea View Rooms", "Rooftop Restaurant", "Bar"],
        "location": "Marine Drive, Mumbai",
        "image": "https://example.com/images/marine_plaza_mumbai.jpg"
      },
      {
        "name": "Grand Hotel Mumbai",
        "ratings": 4.0,
        "price_per_night_INR": 6500,
        "amenities": ["Free WiFi", "Spa", "Fitness Center"],
        "location": "Colaba, Mumbai",
        "image": "https://example.com/images/grand_hotel_mumbai.jpg"
      },
      {
        "name": "The Oberoi Mumbai",
        "ratings": 4.8,
        "price_per_night_INR": 18000,
        "amenities": ["Luxury Rooms", "Fine Dining", "Spa", "Fitness Center"],
        "location": "Nariman Point, Mumbai",
        "image": "https://example.com/images/oberoi_mumbai.jpg"
      },
      {
        "name": "JW Marriott Mumbai Juhu",
        "ratings": 4.6,
        "price_per_night_INR": 14000,
        "amenities": ["Beachfront Location", "Multiple Restaurants", "Pool", "Gym"],
        "location": "Juhu Beach, Mumbai",
        "image": "https://example.com/images/jw_marriott_mumbai_juhu.jpg"
      },
      {
        "name": "The Taj Mahal Palace",
        "ratings": 4.7,
        "price_per_night_INR": 20000,
        "amenities": ["Historic Luxury", "Iconic Architecture", "Fine Dining", "Spa"],
        "location": "Colaba, Mumbai",
        "image": "https://example.com/images/taj_mahal_palace_mumbai.jpg"
      },
      {
        "name": "Trident Nariman Point",
        "ratings": 4.4,
        "price_per_night_INR": 12000,
        "amenities": ["Seaside Views", "Multiple Dining Options", "Pool", "Fitness Center"],
        "location": "Nariman Point, Mumbai",
        "image": "https://example.com/images/trident_nariman_point_mumbai.jpg"
      },
      {
        "name": "ITC Maratha Mumbai",
        "ratings": 4.3,
        "price_per_night_INR": 10000,
        "amenities": ["Luxurious Rooms", "Specialty Restaurants", "Spa", "Fitness Center"],
        "location": "Sahar, Mumbai",
        "image": "https://example.com/images/itc_maratha_mumbai.jpg"
      },
      {
        "name": "Grand Hyatt Mumbai",
        "ratings": 4.5,
        "price_per_night_INR": 13000,
        "amenities": ["Spacious Rooms", "Multiple Restaurants", "Pool", "Fitness Center"],
        "location": "Santacruz, Mumbai",
        "image": "https://example.com/images/grand_hyatt_mumbai.jpg"
      },
      {
        "name": "The St. Regis Mumbai",
        "ratings": 4.7,
        "price_per_night_INR": 16000,
        "amenities": ["Luxury Suites", "Fine Dining", "Rooftop Pool", "Spa"],
        "location": "Lower Parel, Mumbai",
        "image": "https://example.com/images/st_regis_mumbai.jpg"
      },
      {
        "name": "Sofitel Mumbai BKC",
        "ratings": 4.4,
        "price_per_night_INR": 11000,
        "amenities": ["Contemporary Rooms", "French Cuisine", "Pool", "Spa"],
        "location": "Bandra Kurla Complex, Mumbai",
        "image": "https://example.com/images/sofitel_mumbai_bkc.jpg"
      },
      {
        "name": "Novotel Mumbai Juhu Beach",
        "ratings": 4.2,
        "price_per_night_INR": 9500,
        "amenities": ["Beachfront Location", "All-Day Dining", "Pool", "Fitness Center"],
        "location": "Juhu Beach, Mumbai",
        "image": "https://example.com/images/novotel_mumbai_juhu.jpg"
      },
      {
        "name": "The Leela Mumbai",
        "ratings": 4.6,
        "price_per_night_INR": 14000,
        "amenities": ["Luxury Accommodations", "Award-Winning Dining", "Spa", "Pool"],
        "location": "Andheri East, Mumbai",
        "image": "https://example.com/images/leela_mumbai.jpg"
      }
      // More hotels in Mumbai...
    ],
    "Delhi": [
      {
        "name": "Deluxe Heights Delhi",
        "ratings": 4.3,
        "price_per_night_INR": 7800,
        "amenities": ["Airport Shuttle", "Conference Rooms", "Restaurant"],
        "location": "Connaught Place, Delhi",
        "image": "https://example.com/images/deluxe_heights_delhi.jpg"
      },
      {
        "name": "Royal Retreat Delhi",
        "ratings": 4.6,
        "price_per_night_INR": 9500,
        "amenities": ["Swimming Pool", "Luxury Spa", "Bar & Lounge"],
        "location": "Chanakyapuri, Delhi",
        "image": "https://example.com/images/royal_retreat_delhi.jpg"
      },
      {
        "name": "The Leela Palace New Delhi",
        "ratings": 4.9,
        "price_per_night_INR": 25000,
        "amenities": ["Luxury Suites", "Fine Dining", "Spa", "Outdoor Pool"],
        "location": "Chanakyapuri, New Delhi",
        "image": "https://example.com/images/leela_palace_delhi.jpg"
      },
      {
        "name": "Taj Palace, New Delhi",
        "ratings": 4.7,
        "price_per_night_INR": 18000,
        "amenities": ["Grand Rooms", "Multiple Restaurants", "Pool", "Fitness Center"],
        "location": "Sardar Patel Marg, New Delhi",
        "image": "https://example.com/images/taj_palace_delhi.jpg"
      },
      {
        "name": "ITC Maurya, New Delhi",
        "ratings": 4.5,
        "price_per_night_INR": 15000,
        "amenities": ["Luxurious Accommodations", "Specialty Dining", "Spa", "Fitness Center"],
        "location": "Diplomatic Enclave, New Delhi",
        "image": "https://example.com/images/itc_maurya_delhi.jpg"
      },
      {
        "name": "The Oberoi New Delhi",
        "ratings": 4.8,
        "price_per_night_INR": 22000,
        "amenities": ["Premium Rooms", "Award-Winning Restaurants", "Spa", "Fitness Center"],
        "location": "Dr. Zakir Hussain Marg, New Delhi",
        "image": "https://example.com/images/oberoi_delhi.jpg"
      },
      {
        "name": "Hyatt Regency Delhi",
        "ratings": 4.4,
        "price_per_night_INR": 12000,
        "amenities": ["Spacious Rooms", "Multiple Dining Options", "Pool", "Fitness Center"],
        "location": "Bhikaji Cama Place, New Delhi",
        "image": "https://example.com/images/hyatt_regency_delhi.jpg"
      },
      {
        "name": "JW Marriott Hotel New Delhi Aerocity",
        "ratings": 4.6,
        "price_per_night_INR": 14000,
        "amenities": ["Modern Rooms", "Multiple Dining Options", "Pool", "Fitness Center"],
        "location": "Aerocity, New Delhi",
        "image": "https://example.com/images/jw_marriott_delhi.jpg"
      },
      {
        "name": "Andaz Delhi - A Concept By Hyatt",
        "ratings": 4.5,
        "price_per_night_INR": 16000,
        "amenities": ["Stylish Rooms", "Innovative Dining", "Rooftop Pool", "Spa"],
        "location": "Aerocity, New Delhi",
        "image": "https://example.com/images/andaz_delhi.jpg"
      },
      {
        "name": "Lodhi Hotel",
        "ratings": 4.7,
        "price_per_night_INR": 20000,
        "amenities": ["Luxury Suites", "Fine Dining", "Spa", "Outdoor Pool"],
        "location": "Lodhi Road, New Delhi",
        "image": "https://example.com/images/lodhi_hotel_delhi.jpg"
      },
      {
        "name": "The Imperial New Delhi",
        "ratings": 4.8,
        "price_per_night_INR": 25000,
        "amenities": ["Heritage Suites", "Award-Winning Restaurants", "Spa", "Swimming Pool"],
        "location": "Connaught Place, New Delhi",
        "image": "https://example.com/images/imperial_delhi.jpg"
      },
      {
        "name": "Roseate House New Delhi",
        "ratings": 4.4,
        "price_per_night_INR": 12000,
        "amenities": ["Contemporary Rooms", "Global Cuisine", "Outdoor Pool", "Fitness Center"],
        "location": "Aerocity, New Delhi",
        "image": "https://example.com/images/roseate_house_delhi.jpg"
      }
      // More hotels in Delhi...
    ]

      
      
    
      
      
      
}    
