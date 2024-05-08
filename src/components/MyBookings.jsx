import React, { useState, useEffect } from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { apiurl } from "./constants";


const MyBookings = ({ShowMyBookingModal, setShowMyBookingModal}) => {
  
    const [bookingresponse, setBookingResponse] = useState([]);

    const username = localStorage.getItem("login")||"";


    useEffect(() => {
        if (username) {
          axios.get(`${apiurl}/mybookings/${username}`).then((response) => {
            if (response.data?.length) {
              console.log(response.data, "response.data");
    
              const totalBookings = response?.data?.filter(
                (ele) => ele.isCancelled == false
              );
              setBookingResponse(totalBookings);
            }
          });
        }
      }, []);

      const handleCancelBooking = (bookingId) => {
        axios
          .put(`${apiurl}/cancelBooking/${username}/${bookingId}`)
          .then((response) => {
            if (response.data) {
              console.log(response.data);
              if (response.data === "Cancelled Success") {
                alert("Cancelled Success");
                setShowMyBookingModal(false);
              }
            }
          });
      };



  return (
    <>
    <Modal
    open={ShowMyBookingModal}
    onClose={() => setShowMyBookingModal(false)}
  >
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
      <Typography textAlign={"center"} id="nested-modal-title" level="h2">
        {"Your Bookings"}
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
             <TableCell align="right">Booking ID</TableCell>
              <TableCell align="right">username</TableCell>
              <TableCell align="right">Check-IN Time</TableCell>
              <TableCell align="right">Rooms</TableCell>
              <TableCell align="right">Check-IN Date</TableCell>
              <TableCell align="right">Check-Out Date</TableCell>
         
              <TableCell align="right">Price</TableCell>

            </TableRow>
          </TableHead>


          




          <TableBody>
            {bookingresponse.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row._id}
                </TableCell>
                <TableCell align="right">{row.username}</TableCell>
                <TableCell align="right">{row.selectedTime}</TableCell>
                <TableCell align="right">{row.selectedRooms}</TableCell>
                <TableCell align="right">{row.selectedInDate}</TableCell>
                <TableCell align="right">{row.selectedOutDate}</TableCell>
                <TableCell align="right">{row.Price}</TableCell>

                <TableCell align="right">
                  <Button
                    type="reset"
                    color="danger"
                    onClick={() => handleCancelBooking(row._id)}
                  >
                    Cancel
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ModalDialog>
  </Modal>
  </>
  )
}

export default MyBookings