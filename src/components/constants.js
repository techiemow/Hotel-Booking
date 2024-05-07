export const apiurl =
  import.meta.env.VITE_LOCAL_URL === "production"
    ? "http://localhost:4000`"
    : `http://localhost:4000`;  

    export const sortData = [
      { label: "Ratings", key: 1994 },
      { label: "Price High to Low", key: 1972 },
      { label: "Price Low to High", key: 1974 },
    ];


export const locations = [
    { label: "Delhi", id: 54343 },
    { label: "Chennai", id: 8923 },
    { label: "Mumbai", id: 3456 },
  ];

  export const amenities = [
    "Luxurious Rooms",
    "Multiple Dining Options",
    "Pool",
    "Spa",
    "Fitness Center",
    "Free WiFi", 
    "Free Parking",
    "Air Conditioning", 
    "Breakfast", 
    "Gym",
    "Indoor Games",
    "Outdoor Games",
    "Swimming Pool"
  ]

  
export const hotels = {
    "chennai": [
      {
        
          "name": "The Park Chennai",
          "ratings": 4.2,
          "price_per_night_INR": 6000,
          "amenities": [
            "Luxurious Rooms",
            "Multiple Dining Options",
            "Pool",
            "Spa",
            "Fitness Center",
            "Free WiFi"
          ],
          "location": "Anna Salai, Chennai",
          "description": "The Park Chennai is a stylish and contemporary hotel located in the heart of Chennai's business district. The hotel offers luxurious accommodations with modern amenities and facilities. Guests can enjoy a range of dining options, including fine cuisine and innovative cocktails. The hotel features a rooftop pool, spa, fitness center, and complimentary WiFi access.",
          "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/269799885.jpg?k=71dd2753c02fecbbb87860bef0d9a63dc5f56084a93952d0ec70d3272e7e908d&o=&hp=1"
        
      },
      {
        "name": "Taj Coromandel",
        "ratings": 4.7,
        "price_per_night_INR": 12000,
        "amenities": ["Luxury Rooms", "Fine Dining", "Spa", "Fitness Center"],
        "location": "Nungambakkam, Chennai",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRghVBa4kg2YKQRw2OzyH7SZ3hoXMUdWynD-quF2LLPaQ&s"
      },
      {
        "name": "ITC Grand Chola",
        "ratings": 4.6,
        "price_per_night_INR": 10500,
        "amenities": ["Royal Suites", "Multiple Restaurants", "Pool", "Banquet Halls"],
        "location": "Guindy, Chennai",
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/01/24/9e/exterior.jpg?w=1200&h=-1&s=1"
      },
      {
        "name": "Radisson Blu Hotel Chennai City Centre",
        "ratings": 4.3,
        "price_per_night_INR": 6500,
        "amenities": ["Free WiFi", "Restaurant", "Bar", "Fitness Center"],
        "location": "Egmore, Chennai",
        "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/248393998.jpg?k=e261f2e2f26e5614ff6865d29eee41059257cc49a7b1dc7b907946a71d455b3a&o=&hp=1"
      },
      {
        "name": "Hyatt Regency Chennai",
        "ratings": 4.4,
        "price_per_night_INR": 9500,
        "amenities": ["Spacious Rooms", "Outdoor Pool", "Fitness Center", "Spa"],
        "location": "Anna Salai, Chennai",
        "image": "https://ik.imgkit.net/3vlqs5axxjf/external/http://images.ntmllc.com/v4/hotel/T57/T57772/T57772_EXT_Z9E8C1.JPG?tr=w-360%2Ch-379%2Cfo-auto"
      },
      {
        "name": "The Leela Palace Chennai",
        "ratings": 4.8,
        "price_per_night_INR": 14500,
        "amenities": ["Luxury Suites", "Fine Dining", "Beach Access", "Spa"],
        "location": "MRC Nagar, Chennai",
        "image": "https://www.theleela.com/prod/content/assets/styles/tl_500_621_webp/public/2024-01/The-Leela-Palace-Chennai-5-star-hotel.jpg.webp?VersionId=O4RROZrREuT.8zTUVjO21R0xej4Jmhk1&itok=FXkNyHR3"
      },
      {
        "name": "The Raintree Hotel, Anna Salai",
        "ratings": 4.5,
        "price_per_night_INR": 8000,
        "amenities": ["Luxurious Rooms", "Rooftop Restaurant", "Fitness Center", "Spa"],
        "location": "Anna Salai, Chennai",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT86v77dxUfNddbxoBRtkvShXkDGinfOeOMB40xq77pcw&s"
      },
      {
        "name": "Courtyard by Marriott Chennai",
        "ratings": 4.2,
        "price_per_night_INR": 7000,
        "amenities": ["Modern Rooms", "All-Day Dining", "Outdoor Pool", "Gym"],
        "location": "Teynampet, Chennai",
        "image": "https://magarticles.magzter.com/articles/3334/279618/5afb07b487a20/Courtyard-By-Marriott-Makes-A-Comeback-In-Chennai.jpg"
      },
      {
        "name": "Hilton Chennai",
        "ratings": 4.4,
        "price_per_night_INR": 9000,
        "amenities": ["Spacious Suites", "Fine Dining", "Swimming Pool", "Fitness Center"],
        "location": "Guindy, Chennai",
        "image": "https://www.hilton.com/im/en/MAAHIHI/4810769/hilton-chennai-exterior-updated-2015-copy.jpg?impolicy=crop&cw=2439&ch=1365&gravity=NorthWest&xposition=0&yposition=841&rw=768&rh=430"
      },
      {
        "name": "Feathers - A Radha Hotel",
        "ratings": 4.3,
        "price_per_night_INR": 6500,
        "amenities": ["Elegant Rooms", "Multi-Cuisine Restaurant", "Spa", "Banquet Halls"],
        "location": "Porur, Chennai",
        "image": "https://cf.bstatic.com/xdata/images/hotel/max500/90449362.jpg?k=f096410b8a0e379611786ea35da3f708280bfdacbd982df774689d32519c3363&o=&hp=1"
      },
      {
        "name": "Park Hyatt Chennai",
        "ratings": 4.6,
        "price_per_night_INR": 11000,
        "amenities": ["Luxury Accommodations", "Award-Winning Dining", "Spa", "Pool"],
        "location": "Velachery, Chennai",
        "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/529051800.jpg?k=d6363272319772e10fb8093bd3b6383faf49c6bf585f3059e105b268be51d509&o=&hp=1"
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
