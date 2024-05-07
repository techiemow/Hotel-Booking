import React from 'react';
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

import { TimePicker } from '@mui/x-date-pickers/TimePicker';


const HotelBookingModal = ({ selectedHotelId, setselectedHotelId }) => {
  const handleClose = () => {
    setselectedHotelId(""); // Call setselectedHotelId to close the modal by setting selectedHotelId to ""
  };

  return (
    <Modal open={selectedHotelId} onClose={handleClose}>
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
                  />
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
                   
                    label="Select Date"
                    disablePast
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoItem componentName="TimePicker" valueType="time" >
          <TimePicker />
                 </DemoItem>
        </LocalizationProvider>
        </Grid>
         <Grid item style={{width:"70%"}}>
             <Typography
                textAlign={"center"}
                id="nested-modal-title"
                level="h5"
              >Rooms</Typography>

       <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <input type='Number'></input>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>

            
            
            
            
            
            
            
            </Grid>           
                
           
              
              </Grid>

      </ModalDialog>
    </Modal>
  );
};

export default HotelBookingModal;
