import React from 'react';
import { Grid, Modal, Typography,  } from '@mui/material'; // Import necessary components from Material-UI
import { ModalDialog } from '@mui/joy';
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
               Check-IN Date
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    views={["year", "month", "day"]}
                   
                    label="Select Date"
                    disablePast
                  />
                </DemoContainer>
                <DemoItem componentName="TimePicker" valueType="time" >
          <TimePicker />
        </DemoItem>
                </LocalizationProvider>
           
              </Grid>
              </Grid>

      </ModalDialog>
    </Modal>
  );
};

export default HotelBookingModal;
