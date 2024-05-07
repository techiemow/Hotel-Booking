import React, { useContext, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { hotels } from './constants';
import { Grid } from '@mui/material';
import HotelBookingModal from './HotelBookingModal';
import { Appcontext } from './Context';

const HotelCard = ({ location = "", filteredTags = [], selectedSort = "" }) => {

  const [selectedHotelId,setSelectedHotelID] = useState(false)

  const urlLocation = location ? location.toLowerCase() : "chennai";
  let hotelData = hotels[urlLocation] || []; 

  const { searchedHotel } = useContext(Appcontext);

  if (filteredTags?.length) {


   hotelData = hotelData.filter((eachHotel) => {
      let matchFound = true;
      eachHotel.amenities.forEach((tag) => {
        if (filteredTags.includes(tag)) {
          matchFound = false;
          return;
        }
      });
      return !matchFound;
    });
    
  }


  const callback = (a, b) => {
    const firstHotel = Number(a.ratings);
    const secondHotel = Number(b.ratings);
    if (firstHotel > secondHotel) {
      return -1;
    }
    if (firstHotel < secondHotel) {
      return 1;
    }
  };

  const callbackPriceHL = (a, b) => {
    const firstHotel = Number(a.price_per_night_INR);
    const secondHotel = Number(b.price_per_night_INR);

    if (firstHotel > secondHotel) {
      return -1;
    }
    return 1;
  };

  const callbackPriceLH = (a, b) => {
    const firstHotel = Number(a.price_per_night_INR);
    const secondHotel = Number(b.price_per_night_INR);

    if (firstHotel > secondHotel) {
      return 1;
    }
    return -1;
  };

  // logic for sorting
  if (selectedSort?.length) {
    if (selectedSort === "Ratings") {
      hotelData.sort((a, b) => callback(a, b));
    }
    if (selectedSort === "Price High to Low") {
      hotelData.sort((a, b) => callbackPriceHL(a, b));
    }
    if (selectedSort === "Price Low to High") {
      hotelData.sort((a, b) => callbackPriceLH(a, b));
    }
  }



  //search pending
  if (searchedHotel?.length) {
      hotelData = hotelData.filter((eachHotel) => {
      if (eachHotel.name.toLowerCase().includes(searchedHotel.toLowerCase())) {
        return true;
      }
      return false;
    });
  }


 const handleclick = function () {
  setSelectedHotelID(true)
}

  return (
    <Grid item>
    <Grid container spacing={2}>
      {hotelData.map((hotel, index) => {
        const { id, name, location, amenities, price_per_night_INR, image, ratings } = hotel;

        return (
          <Grid item 
          onClick={handleclick}
        
          key={index} xs={12} sm={6} md={4}>
          
             <Card sx={{ maxWidth: 345 }} height={100}>
                <div style={{ position: "relative" }}>
                  <CardMedia
                    sx={{ height: 275 }}
                    image={image}
                    title="green iguana"
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      backgroundColor: "#b3ca42",
                      width: 30,
                      height: 30,
                      textAlign: "center",
                    }}
                  >
                    <Typography color={"white"}>{ratings}</Typography>
                  </div>
                </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
                <br />
                <Typography variant="body2" color="text.secondary">
                 <b> {location}</b>
                </Typography>
                <br />
                <Typography variant="body2" color="text.secondary">
                  <b>Amenities: {amenities.join(", ")}</b>
                </Typography>
                <br />
              
                <Typography variant="body2" color="text.random">
                 <b> Price per night: {price_per_night_INR} INR</b> 
                </Typography>
              
              </CardContent>
              <CardActions>
                <Button size="small">share </Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
    <HotelBookingModal 
    setSelectedHotelID={setSelectedHotelID}
    selectedHotelId={selectedHotelId}
     />
    </Grid>
  );
};

export default HotelCard;
