export const apiurl =
  import.meta.env.VITE_LOCAL_URL === "production"
    ? "https://hotel-booking-be.onrender.com"
    : "http://localhost:4000";  

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
    "Swimming Pool",
    "theatre"
  ]

  
export const hotels = {
    "chennai": [
      {
        "id": "0d129aa4-31ad-4345-a226-1551e63c5658",
          "name": "The Park Chennai",
          "ratings": 4.2,
          "price_per_night_INR": "6000",
          "amenities": [
            "Luxurious Rooms",
            "Multiple Dining Options",
            "Pool",
            "Spa",
            "Fitness Center",
            "Free WiFi",
            "theatre"

          ],
          "location": "Anna Salai, Chennai",
          "description": "The Park Chennai is a stylish and contemporary hotel located in the heart of Chennai's business district. The hotel offers luxurious accommodations with modern amenities and facilities. Guests can enjoy a range of dining options, including fine cuisine and innovative cocktails. The hotel features a rooftop pool, spa, fitness center, and complimentary WiFi access.",
          "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/269799885.jpg?k=71dd2753c02fecbbb87860bef0d9a63dc5f56084a93952d0ec70d3272e7e908d&o=&hp=1"
        
      },
      {
        "id": "4f3b2a18-7e7c-4d20-9f1d-44d0fc15b5f1",
        "name": "Taj Coromandel",
        "ratings": 4.7,
        "price_per_night_INR": "12000",
        "amenities": ["Luxury Rooms", "Fine Dining", "Spa", "Fitness Center"],
        "location": "Nungambakkam, Chennai",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRghVBa4kg2YKQRw2OzyH7SZ3hoXMUdWynD-quF2LLPaQ&s"
      },
      {
        "id": "ab18b5e3-4e42-47d9-8588-7c85b1b08e14",
        "name": "ITC Grand Chola",
        "ratings": 4.6,
        "price_per_night_INR": "10500",
        "amenities": ["Royal Suites", "Multiple Restaurants", "Pool", "Banquet Halls"],
        "location": "Guindy, Chennai",
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/01/24/9e/exterior.jpg?w=1200&h=-1&s=1"
      },
      {
        "id": "c3d0ba0e-9a7f-489b-b49f-6a0e742e178e",
        "name": "Radisson Blu Hotel Chennai City Centre",
        "ratings": 4.3,
        "price_per_night_INR": "6500",
        "amenities": ["Free WiFi", "Restaurant", "Bar", "Fitness Center"],
        "location": "Egmore, Chennai",
        "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/248393998.jpg?k=e261f2e2f26e5614ff6865d29eee41059257cc49a7b1dc7b907946a71d455b3a&o=&hp=1"
      },
      {
        "id": "a0b45e7d-46df-4f62-81a0-85e58b5e6c47",
        "name": "Hyatt Regency Chennai",
        "ratings": 4.4,
        "price_per_night_INR": "9500",
        "amenities": ["Spacious Rooms", "Outdoor Pool", "Fitness Center", "Spa"],
        "location": "Anna Salai, Chennai",
        "image": "https://ik.imgkit.net/3vlqs5axxjf/external/http://images.ntmllc.com/v4/hotel/T57/T57772/T57772_EXT_Z9E8C1.JPG?tr=w-360%2Ch-379%2Cfo-auto"
      },
      {
        "id": "73c25472-c82a-48e2-805f-72f474150ac1",
        "name": "The Leela Palace Chennai",
        "ratings": 4.8,
        "price_per_night_INR": "14500",
        "amenities": ["Luxury Suites", "Fine Dining", "Beach Access", "Spa"],
        "location": "MRC Nagar, Chennai",
        "image": "https://www.theleela.com/prod/content/assets/styles/tl_500_621_webp/public/2024-01/The-Leela-Palace-Chennai-5-star-hotel.jpg.webp?VersionId=O4RROZrREuT.8zTUVjO21R0xej4Jmhk1&itok=FXkNyHR3"
      },
      {
        "id": "64f6ed5c-003e-4c9b-bae1-f3d5c940ebcc",
        "name": "The Raintree Hotel, Anna Salai",
        "ratings": 4.5,
        "price_per_night_INR": "8000",
        "amenities": ["Luxurious Rooms", "Rooftop Restaurant", "Fitness Center", "Spa"],
        "location": "Anna Salai, Chennai",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT86v77dxUfNddbxoBRtkvShXkDGinfOeOMB40xq77pcw&s"
      },
      {
        "id": "90291e45-4188-4b3e-a7de-358a1b61d142",
        "name": "Courtyard by Marriott Chennai",
        "ratings": 4.2,
        "price_per_night_INR": "7000",
        "amenities": ["Modern Rooms", "All-Day Dining", "Outdoor Pool", "Gym"],
        "location": "Teynampet, Chennai",
        "image": "https://magarticles.magzter.com/articles/3334/279618/5afb07b487a20/Courtyard-By-Marriott-Makes-A-Comeback-In-Chennai.jpg"
      },
      {
        "id": "da3461bb-e124-4a5b-803e-589ee6f14ec5",
        "name": "Hilton Chennai",
        "ratings": 4.4,
        "price_per_night_INR": "9000",
        "amenities": ["Spacious Suites", "Fine Dining", "Swimming Pool", "Fitness Center"],
        "location": "Guindy, Chennai",
        "image": "https://www.hilton.com/im/en/MAAHIHI/4810769/hilton-chennai-exterior-updated-2015-copy.jpg?impolicy=crop&cw=2439&ch=1365&gravity=NorthWest&xposition=0&yposition=841&rw=768&rh=430"
      },
      {
        "id": "c1fe2ac1-404e-4741-858e-f6b3d9faae7f",
        "name": "Feathers - A Radha Hotel",
        "ratings": 4.3,
        "price_per_night_INR": "6500",
        "amenities": ["Elegant Rooms", "Multi-Cuisine Restaurant", "Spa", "Banquet Halls"],
        "location": "Porur, Chennai",
        "image": "https://cf.bstatic.com/xdata/images/hotel/max500/90449362.jpg?k=f096410b8a0e379611786ea35da3f708280bfdacbd982df774689d32519c3363&o=&hp=1"
      },
      {
        "id": "2bfa4e01-6efb-4ee7-af0f-2a38ae85d456",
        "name": "Park Hyatt Chennai",
        "ratings": 4.6,
        "price_per_night_INR": "11000",
        "amenities": ["Luxury Accommodations", "Award-Winning Dining", "Spa", "Pool"],
        "location": "Velachery, Chennai",
        "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/529051800.jpg?k=d6363272319772e10fb8093bd3b6383faf49c6bf585f3059e105b268be51d509&o=&hp=1"
      }
   
    ],
    "mumbai": [
      {
        "id": "7a12e867-2b95-4864-8da4-ec86d9e2c674",
        "name": "Marine Plaza Mumbai",
        "ratings": 4.2,
        "price_per_night_INR": 8500,
        "amenities": ["Sea View Rooms", "Rooftop Restaurant", "Bar"],
        "location": "Marine Drive, Mumbai",
        "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/59516178.jpg?k=493d3d6140fd42c09f66b444fe53139e50ba7d628918bc53fecb5b7f700928c8&o=&hp=1"
      },
      {
        "id": "7df358a3-8b98-414e-bc7d-5af1a1b715c3",
        "name": "Grand Hotel Mumbai",
        "ratings": 4.0,
        "price_per_night_INR": 6500,
        "amenities": ["Free WiFi", "Spa", "Fitness Center"],
        "location": "Colaba, Mumbai",
        "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/309179823.jpg?k=53b55d5d5014e77e4629c97d3232f10512c5cdd8ec11bac91946ca4caac3dd19&o=&hp=1"
      },
      {
        "id": "5d0aa760-fa39-4a11-86ac-8057555d1589",
        "name": "The Oberoi Mumbai",
        "ratings": 4.8,
        "price_per_night_INR": 18000,
        "amenities": ["Luxury Rooms", "Fine Dining", "Spa", "Fitness Center"],
        "location": "Nariman Point, Mumbai",
        "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/28759044.jpg?k=4a3e476214895d86a0e71808d9eb5b85acaebe0cbff06bbd2ecdbb3054d98600&o=&hp=1"
      },
      {
        "id": "2a749cf5-4b26-432e-916a-312b5b2c3502",
        "name": "JW Marriott Mumbai Juhu",
        "ratings": 4.6,
        "price_per_night_INR": 14000,
        "amenities": ["Beachfront Location", "Multiple Restaurants", "Pool", "Gym"],
        "location": "Juhu Beach, Mumbai",
        "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/464597788.jpg?k=419098f724e015e920c04382b2a5bc1b95b175e29584004007969abba1adc745&o=&hp=1"
      },
      {
        "id": "d39dcb19-7da1-4756-9bfb-1001da810a75",
        "name": "The Taj Mahal Palace",
        "ratings": 4.7,
        "price_per_night_INR": 20000,
        "amenities": ["Historic Luxury", "Iconic Architecture", "Fine Dining", "Spa"],
        "location": "Colaba, Mumbai",
        "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/103705059.jpg?k=9e078265b31ad1815a573da8ed2a665f863e3925e1efd730df703421868a2ada&o=&hp=1"
      },
      {
        "id": "c7fc1e19-dc22-422a-b2de-f74b5d7f4e54",
        "name": "Trident Nariman Point",
        "ratings": 4.4,
        "price_per_night_INR": 12000,
        "amenities": ["Seaside Views", "Multiple Dining Options", "Pool", "Fitness Center"],
        "location": "Nariman Point, Mumbai",
        "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/32810813.jpg?k=7b5f861c6aad4e51ef13e55c8b68ac945cebdf77aeca84d9c2798bb9af46d24d&o=&hp=1"
      },
      {
        "id": "cd7e41a7-240b-4f45-bb18-12b73e04b479",
        "name": "ITC Maratha Mumbai",
        "ratings": 4.3,
        "price_per_night_INR": 10000,
        "amenities": ["Luxurious Rooms", "Specialty Restaurants", "Spa", "Fitness Center"],
        "location": "Sahar, Mumbai",
        "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/478603428.jpg?k=21aeb0be3cbab94368fa0c47cf297f9784cf0d3af87b608ef929ef2428b2377b&o=&hp=1"
      },
      {
        "id": "abc9d8a3-4b48-4cfc-9f2b-d12f8f6c3d97",
        "name": "Grand Hyatt Mumbai",
        "ratings": 4.5,
        "price_per_night_INR": 13000,
        "amenities": ["Spacious Rooms", "Multiple Restaurants", "Pool", "Fitness Center"],
        "location": "Santacruz, Mumbai",
        "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/466996054.jpg?k=de7113f308f41c7e89b80e7ff2f3663e93a2278e8c396b2e90bffe3fc9294900&o=&hp=1"
      },
      {
        "id": "a2b419f2-f1d5-469f-9d95-15b0379b66a5",
        "name": "The St. Regis Mumbai",
        "ratings": 4.7,
        "price_per_night_INR": 16000,
        "amenities": ["Luxury Suites", "Fine Dining", "Rooftop Pool", "Spa"],
        "location": "Lower Parel, Mumbai",
        "image": "https://cache.marriott.com/content/dam/marriott-renditions/BOMXR/bomxr-exterior-1522-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1920px:*"
      },
      {
        "id": "6c43b79c-1b65-4db7-8a2b-b6e8ef159a08",
        "name": "Sofitel Mumbai BKC",
        "ratings": 4.4,
        "price_per_night_INR": 11000,
        "amenities": ["Contemporary Rooms", "French Cuisine", "Pool", "Spa"],
        "location": "Bandra Kurla Complex, Mumbai",
        "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/531963158.jpg?k=b5116c555a2ed82053378f13df8835482ea48211f5753c16d1e2cefab39fe194&o=&hp=1"
      },
      {
        "id": "d919274f-8655-43f4-94e3-6b26c355332e",
        "name": "Novotel Mumbai Juhu Beach",
        "ratings": 4.2,
        "price_per_night_INR": 9500,
        "amenities": ["Beachfront Location", "All-Day Dining", "Pool", "Fitness Center"],
        "location": "Juhu Beach, Mumbai",
        "image": "https://www.ahstatic.com/photos/6926_ho_00_p_1024x768.jpg"
      },
      {
        "id": "7eae3a69-b3dc-44f8-9bea-2991b4063a9e",
        "name": "The Leela Mumbai",
        "ratings": 4.6,
        "price_per_night_INR": 14000,
        "amenities": ["Luxury Accommodations", "Award-Winning Dining", "Spa", "Pool"],
        "location": "Andheri East, Mumbai",
        "image": "https://promos.makemytrip.com/Hotels_product/Luxe/Hero/The%20Leela%20Mumbai%20201007121229563872.webp"
      }
      // More hotels in Mumbai...
    ],
    
    "delhi": [
      {
        "id": "b5e26c3e-d83e-405e-bce6-48a23e8d36e8",
        "name": "Sheraton New Delhi Hotel",
        "ratings": 4.5,
        "price_per_night_INR": 10000,
        "amenities": [
          "Luxurious Rooms",
          "Fine Dining Restaurants",
          "Outdoor Pool",
          "Spa",
          "Fitness Center",
          "Business Center",
          "Free WiFi"
        ],
        "location": "Saket, New Delhi",
        "description": "Sheraton New Delhi Hotel offers elegant and modern accommodations with luxurious amenities. Guests can enjoy fine dining at multiple restaurants, relax by the outdoor pool, rejuvenate at the spa, and stay active at the fitness center. The hotel also provides a business center and complimentary WiFi access.",
        "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/465561227.jpg?k=687e02385e03d55e5f7b3f94f4494d9e730429fcd66f3d42c8b4764bd4ac6a3f&o=&hp=1"
      },
      {
        "name": "Le Meridien New Delhi",
        "ratings": 4.6,
        "price_per_night_INR": 12000,
        "amenities": [
          "Luxurious Rooms",
          "Fine Dining Restaurants",
          "Rooftop Bar",
          "Outdoor Pool",
          "Spa",
          "Fitness Center",
          "Business Center",
          "Free WiFi"
        ],
        "location": "Janpath, New Delhi",
        "description": "Le Meridien New Delhi offers sophisticated and stylish accommodations with a range of luxurious amenities. Guests can indulge in fine dining experiences, unwind at the rooftop bar, relax by the outdoor pool, rejuvenate at the spa, and stay active at the fitness center. The hotel also features a business center and complimentary WiFi access.",
        "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/469178847.jpg?k=8fab2f779723532d5d04df6a2c5674e08768bbc47a33012d35a17ce2e5b1b5a0&o=&hp=1"
      },
      
      {
        "name": "The Leela Palace New Delhi",
        "ratings": 4.9,
        "price_per_night_INR": 25000,
        "amenities": ["Luxury Suites", "Fine Dining", "Spa", "Outdoor Pool"],
        "location": "Chanakyapuri, New Delhi",
        "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/5648061.jpg?k=4629f919fb92436c3e19b71734d208d8e58201df7b29773f90089639f367db6d&o=&hp=1"
      },
      {
        "name": "Taj Palace, New Delhi",
        "ratings": 4.7,
        "price_per_night_INR": 18000,
        "amenities": ["Grand Rooms", "Multiple Restaurants", "Pool", "Fitness Center"],
        "location": "Sardar Patel Marg, New Delhi",
        "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/336041746.jpg?k=81ca9e45244b4f17cb199c4ac73d2094446ebd17020c5c1425a44a23e860b562&o=&hp=1"
      },
      {
        "name": "ITC Maurya, New Delhi",
        "ratings": 4.5,
        "price_per_night_INR": 15000,
        "amenities": ["Luxurious Accommodations", "Specialty Dining", "Spa", "Fitness Center"],
        "location": "Diplomatic Enclave, New Delhi",
        "image": "https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcmaurya-new-delhi/images/overview-landing-page/headmast/desktop/exterior-night.png"
      },
      {
        "name": "The Oberoi New Delhi",
        "ratings": 4.8,
        "price_per_night_INR": 22000,
        "amenities": ["Premium Rooms", "Award-Winning Restaurants", "Spa", "Fitness Center"],
        "location": "Dr. Zakir Hussain Marg, New Delhi",
        "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/44522456.jpg?k=9947bae2627f2fc1ec561c4284d877d0cddcad32a7e4b3716a84a115b29ee8ff&o=&hp=1"
      },
      {
        "name": "Hyatt Regency Delhi",
        "ratings": 4.4,
        "price_per_night_INR": 12000,
        "amenities": ["Spacious Rooms", "Multiple Dining Options", "Pool", "Fitness Center"],
        "location": "Bhikaji Cama Place, New Delhi",
        "image": "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/01/23/0953/Hyatt-Regency-Delhi-P312-Facade.jpg/Hyatt-Regency-Delhi-P312-Facade.16x9.jpg"
      },
      {
        "name": "JW Marriott Hotel New Delhi Aerocity",
        "ratings": 4.6,
        "price_per_night_INR": 14000,
        "amenities": ["Modern Rooms", "Multiple Dining Options", "Pool", "Fitness Center"],
        "location": "Aerocity, New Delhi",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr2pMCRVvLFS18G4PaZXDvvoq7_roUqt1oUPqY39Rh2A&s"
      },
      {
        "name": "Shangri-La's - Eros Hotel, New Delhi",
        "ratings": 4.7,
        "price_per_night_INR": 14000,
        "amenities": [
          "Luxurious Rooms and Suites",
          "Multiple Fine Dining Restaurants",
          "Rooftop Bar and Lounge",
          "Outdoor Swimming Pool",
          "Spa and Wellness Center",
          "Fitness Center",
          "Business Facilities",
          "Free WiFi"
        ],
        "location": "Connaught Place, New Delhi",
        "description": "Shangri-La's - Eros Hotel, New Delhi offers luxurious accommodations and world-class amenities. Guests can enjoy exquisite dining experiences, relax at the rooftop bar with panoramic views, unwind by the outdoor swimming pool, rejuvenate at the spa, and stay fit at the fitness center. The hotel also provides excellent business facilities and complimentary WiFi access.",
        "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/295686542.jpg?k=88737ca54ca3d4c7da9aa31a9bf881c4878f96fa8b392bd3fc65dfa637679ff5&o=&hp=1"
      },
      
      {
        "name": "Lodhi Hotel",
        "ratings": 4.7,
        "price_per_night_INR": 20000,
        "amenities": ["Luxury Suites", "Fine Dining", "Spa", "Outdoor Pool"],
        "location": "Lodhi Road, New Delhi",
        "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/269476314.jpg?k=947be45d7c5867eb4513cdb7d78950694ec98a16330308ff513ef95896fd4602&o=&hp=1"
      },
      {
        "name": "The Imperial New Delhi",
        "ratings": 4.8,
        "price_per_night_INR": 25000,
        "amenities": ["Heritage Suites", "Award-Winning Restaurants", "Spa", "Swimming Pool"],
        "location": "Connaught Place, New Delhi",
        "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/64759184.jpg?k=07d74a7d896acf9ec2a97ad22b5e98dc7f3fe1a5242bf43ca2488a6606f72ef9&o=&hp=1"
      },
      {
        "name": "Roseate House New Delhi",
        "ratings": 4.4,
        "price_per_night_INR": 12000,
        "amenities": ["Contemporary Rooms", "Global Cuisine", "Outdoor Pool", "Fitness Center"],
        "location": "Aerocity, New Delhi",
        "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/106566927.jpg?k=1034d8fc55ec43d305e906e21b06ac5c63cfb4e7869c4fb09a11f754101e47b2&o=&hp=1"
      }
      // More hotels in Delhi...
    ]

      
      
    
      
      
      
}    
