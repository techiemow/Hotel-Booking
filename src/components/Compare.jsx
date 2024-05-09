import React, { useState } from 'react';
import { Modal, TextField, InputAdornment, Typography, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ModalDialog } from '@mui/joy';
import { hotels } from './constants';

const Compare = ({ compare, setcompare }) => {
  const [searchHotel1, setSearchHotel1] = useState('');
  const [searchHotel2, setSearchHotel2] = useState('');
  const [hotelDetails1, setHotelDetails1] = useState(null);
  const [hotelDetails2, setHotelDetails2] = useState(null);

  const handleSearch = (e) => {
    
    const { name, value } = e.target;
    if (name === 'hotel_1') {
      setSearchHotel1(value);
      console.log(value)
      setHotelDetails1(null);
    } else if (name === 'hotel_2') {
      setSearchHotel2(value);
      console.log(value)
      setHotelDetails2(null);
    }
  };

  const searchHotel = (city, hotelName) => {
    const cityHotels = hotels[city];
    if (cityHotels) {
      const hotel = cityHotels.find((hotel) => hotel.name.toLowerCase() === hotelName.toLowerCase());
      return hotel || null;
    }
    return null;
  };

  const getCity = (hotelName) => {
    for (const city in hotels) {
      if (hotels.hasOwnProperty(city)) {
        if (hotels[city].some((hotel) => hotel.name.toLowerCase() === hotelName.toLowerCase())) {
          return city;
        }
      }
    }
    return null;
  };
  const handleSearchSubmit = () => {
    const hotel1 = searchHotel(getCity(searchHotel1), searchHotel1);
    const hotel2 = searchHotel(getCity(searchHotel2), searchHotel2);
    setHotelDetails1(hotel1);
    setHotelDetails2(hotel2);
  };

  return (
    <Modal open={compare} onClose={() => setcompare(false)}>
    <ModalDialog minWidth={600}>
      <div className="Comparison d-flex justify-content-center align-items-center">
        <TextField
          className='Item m-2 mx-2'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          name='hotel_1'
          value={searchHotel1}
          onChange={handleSearch}
          sx={{ width: 300 }}
          label="Search"
          placeholder="Enter the name of first Hotel"
          fullWidth
        />

        <Typography className="m-2">Vs</Typography>

        <TextField
          className='Item mx-2 m-2'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          name='hotel_2'
          value={searchHotel2}
          onChange={handleSearch}
          sx={{ width: 300 }}
          label="Search"
          placeholder="Enter the name of second Hotel"
          fullWidth
        />

        <button className="btn btn-primary" onClick={handleSearchSubmit}>
          Search
        </button>
      </div>

      <Grid container spacing={3} justifyContent="center">
        {hotelDetails1 && (
          <Grid item xs={12} sm={6}>
            <div>
            <Typography variant="h6">{hotelDetails1.name}</Typography>
            <hr /> 
              <Typography variant="subtitle1">Amenities:{hotelDetails1.amenities.join(", ")}</Typography>
               <br />
              <Typography variant="subtitle1">Location: {hotelDetails1.location}</Typography>
              <br />
              <Typography variant="subtitle1">Price: {hotelDetails1.price_per_night_INR}</Typography>
            </div>
          </Grid>
        )}
  
        {hotelDetails2 && (
          <Grid item xs={12} sm={6}>
            <div>
              <Typography variant="h6">{hotelDetails2.name}</Typography>
              <hr /> 
              <Typography variant="subtitle1">Amenities: {hotelDetails2.amenities.join(", ")}</Typography>
              <br />
              <Typography variant="subtitle1">Location: {hotelDetails2.location}</Typography>
              <br />
              <Typography variant="subtitle1">Price: {hotelDetails2.price_per_night_INR}</Typography>
            </div>
          </Grid>
        )}
      </Grid>
    </ModalDialog>
  </Modal>
  );
};

export default Compare;
