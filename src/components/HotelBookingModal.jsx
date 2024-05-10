import React, { useState } from 'react';
import { Grid, Modal, Typography,  } from '@mui/material'; // Import necessary components from Material-UI
import { ModalDialog } from '@mui/joy';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { apiurl, hotels } from './constants';

import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import axios from 'axios';






const HotelBookingModal = ({location, selectedHotel, setSelectedHotel , HotelId ,   setHotelId  }) => {

  const [count,setCount] = useState(0)
  
  const urlLocation = location ? location.toLowerCase() : "delhi"||"Delhi";
  let hotelData = hotels[urlLocation] || []; 

  

  const [BookingDetails , setBookingDetails] = useState({
    selectedInDate: "",
    selectedTime: "",
    selectedOutDate: "",
    selectedRooms: 0,
    Price: 0
  
    
  })  
  const handleINDate = (value) => {
    const day = new Date(value).getDate();
    const year = new Date(value).getFullYear();
    const month = new Date(value).getMonth() + 1;
    const bookingData = `${month}-${day}-${year}`;
  
    setBookingDetails({
      ...BookingDetails,
      selectedInDate: bookingData,
      Price: calculatePrice(),
    });
  };
  
  const handleOUTDate = (value) => {
    const day = new Date(value).getDate();
    const year = new Date(value).getFullYear();
    const month = new Date(value).getMonth() + 1;
    const bookingData = `${month}-${day}-${year}`;
    
    if(bookingData === BookingDetails.selectedInDate){
      alert("Check-Out Date should be atleast one more than Check-In Date")
      
    }
    

    setBookingDetails({
      ...BookingDetails,
      selectedOutDate: bookingData,
      Price: calculatePrice(),
    });
  };
  
    
 const handleCheckINTime = async (value) => {
  setBookingDetails({
   ...BookingDetails,
    selectedTime: value.format('HH:mm:a'),

  });

}
const handleRooms = (event) => {
  const value = parseInt(event.target.value);
  setCount(value);

  setBookingDetails({
    ...BookingDetails,
    selectedRooms: value,
    Price: value * calculatePrice(), // Update price based on new room count
  });
};

const decrementCount = () => {
  if (count > 0) {
    const newCount = count - 1;
    setCount(newCount);

    setBookingDetails({
      ...BookingDetails,
      selectedRooms: newCount,
      Price: newCount * calculatePrice(),
    });
  }
};

const incrementCount = () => {
  const newCount = count + 1;
  setCount(newCount);

  setBookingDetails({
    ...BookingDetails,
    selectedRooms: newCount,
    Price: newCount * calculatePrice(),
  });
};


const calculatePrice = () => {
  const selectedHotelData = hotelData.find((hotel) => hotel.id === HotelId);
  if (selectedHotelData) {
    const pricePerNight = parseFloat(selectedHotelData.price_per_night_INR);

    // Calculate the number of days between check-in and check-out
    const checkInDate = BookingDetails.selectedInDate;
    const checkOutDate = BookingDetails.selectedOutDate;
    
    if (checkInDate && checkOutDate) {
      const checkInDateTime = new Date(checkInDate).getTime();

      
      const checkOutDateTime = new Date(checkOutDate).getTime();

       console.log(`Checking in ${checkInDateTime/(1000 * 3600 * 24)}`);
      console.log(`Checking out ${checkOutDateTime}`);
   
      const timeDifference = checkOutDateTime - checkInDateTime;
      const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)); // Convert ms to days
      console.log(daysDifference)
      return daysDifference * pricePerNight;
    }
  }
  return 0; // Return 0 if hotel data not found or dates are not selected
};

  console.log(BookingDetails);


  const username = localStorage.getItem("login")||"";
  const usertoken = localStorage.getItem("usertoken");

 const handleSubmit = async () => {
    const {selectedTime,selectedRooms, selectedOutDate, selectedInDate,Price } = BookingDetails;
    if(selectedInDate?.length ||
      selectedOutDate?.length ||
      selectedTime?.length ||
      selectedRooms &&
      username &&
      Price
    
      
    
    )
    {
      try{
      
      const apires = await axios.post(`${apiurl}/create_booking`,{
        selectedTime,
        selectedRooms,
        selectedOutDate,
        selectedInDate,
        username,
        Price,
      

       

      },
      {headers:{
        auth:usertoken,
      }})
      if(apires.data?._id){
       console.log(apires.data)
     
         setSelectedHotel(false)
        alert(`Booking successfully created`)
      }
    
    } 
    catch(err){
      console.log(err)
    }

  }else if(!username){
    // Handle case where form is incomplete
    alert('Please Register with your account before creating a new booking and login to create a new booking ');
  }else{
    alert('Please fill out all required fields.');  
  }
 
}






  const handleClose = () => {
    setBookingDetails({
      selectedInDate: "",
      selectedTime: "",
      selectedOutDate: "",
      selectedRooms: 0,
      Price: 0
    })
    setCount(0)
    setSelectedHotel(false);
  };

  return (
    <Modal open={selectedHotel} onClose={()=>handleClose()}>
      <ModalDialog
        minWidth={600}
        aria-labelledby="nested-modal-title"
        aria-describedby="nested-modal-description"
        sx={(theme) => ({
          [theme.breakpoints.only("xs")]: {
            top: "unset",
            bottom: 0,
            left: 0,
            right: 0,
            borderRadius: 0,
            transform: "none",
          },
        })}
      >
           <Typography
            style={{
              background: "#83B4DF",
              color: `white`,
              fontSize: 16,
              fontFamily: `Metropolis Bold`,
              fontWeight: 300,
              height: 50,
            }}
            textAlign={"center"}
            id="nested-modal-title"
            level="h4"
          >
            Book Soon Only 5 Rooms available 
          </Typography>

          <Grid
            container
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
            spacing={4}
            paddingBottom={8}
          >
            <Grid
              item  style={{
                width: "70%",
              }}
            >
              <Typography
                textAlign={"center"}
                id="nested-modal-title"
                level="h5"
              >
               Check-IN Date
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoItem components={["DatePicker"]}>
                  <DatePicker
                    views={["year", "month", "day"]}
                    label="Select Date"
                    disablePast
                    onChange={handleINDate}
                  />
                </DemoItem>
                
                
                </LocalizationProvider>
                </Grid>
                <Grid
              item
              style={{
                width: "70%",
              }}
            >
                 <Typography
                textAlign={"center"}
                id="nested-modal-title"
                level="h5"
              >
                  Time
              </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DemoItem componentName="TimePicker" valueType="time"  >
          <TimePicker onChange={handleCheckINTime}/>
                 </DemoItem>
        </LocalizationProvider>
        </Grid>

                <Grid
              item  style={{
                width: "70%",
              }}
            >
              <Typography
                textAlign={"center"}
                id="nested-modal-title"
                level="h5"
              >
               Check-OUT Date
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoItem components={["DatePicker"]}>
                  <DatePicker
                    views={["year", "month", "day"]}
                    onChange={handleOUTDate} 
                    label="Select Date"
                    disablePast
                  />
                </DemoItem>
                
                
                </LocalizationProvider>
                </Grid>
             


            
         <Grid item style={{width:"70%" , }}>
             <Typography
                textAlign={"center"}
                id="nested-modal-title"
                level="h5"
              >Rooms</Typography>

<ButtonGroup style={{ marginTop: '10px' }}>
        <Button aria-label="reduce" onClick={decrementCount}>
          <RemoveIcon fontSize="small" />
        </Button>
        <input
          type="number"
          value={count}
          min={0}
          className="Input"
          onChange={handleRooms}
        
        />
        <Button aria-label="increase" onClick={incrementCount}>
          <AddIcon fontSize="small" />
        </Button>
      </ButtonGroup>


        <Grid item className='m-2'>
              <Typography
                textAlign={"center"}
                id="nested-modal-title"
                level="h5"
              >Price:INR {BookingDetails.Price}</Typography>
                

                </Grid>  

            
            
            
            
            
            
            
            </Grid>     
          <Grid item style={{width:"70px",height:"30px"}} className='d-flex justify-content-center m-3' >
           
            <Button
                 direction={'row'} 
                  onClick={() => handleSubmit()}
                  className='mx-5'
                 >
                  Make A Booking and Pay
                </Button>
                <Button
                 direction={'row'} 
                 onClick={()=>handleClose()}
               >
                 Cancel
               </Button>


              </Grid>  
           
              
                
           
              
              </Grid>

      </ModalDialog>
    </Modal>
  );
};

export default HotelBookingModal;
