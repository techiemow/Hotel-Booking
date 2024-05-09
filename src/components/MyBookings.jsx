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
import Review from "./Review";

const MyBookings = ({ ShowMyBookingModal, setShowMyBookingModal }) => {
  const [bookingresponse, setBookingResponse] = useState([]);
  const [order, setOrder] = useState(null);
  const[Reviewpage, setReviewPage] = useState(false);

  const username = localStorage.getItem("login") || "";
  const usertoken = localStorage.getItem("usertoken");

  console.log(usertoken)

  useEffect(() => {
    if (username) {
      axios.get(`${apiurl}/mybookings/${username}`,
      {headers:{
        auth:usertoken

        }}).then((response) => {
        if (response.data?.length) {
          console.log(response.data, "response.data");

          const totalBookings = response?.data?.filter(
            (ele) => ele.isCancelled === false
          );
          setBookingResponse(totalBookings);
        }
      });
    }
  }, [username]);

  const handleCancelBooking = (bookingId) => {
    axios
      .put(`${apiurl}/cancelBooking/${username}/${bookingId}`,)
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

  const handleCreateOrder = async (price) => {
    try {
      const response = await axios.post(`${apiurl}/payment`, {
        amount: price * 100, // Convert price to cents (assuming price is in rupees)
        currency: "INR",
      },{
        headers:{
        auth:usertoken
      }});

      const { data } = response;
      setOrder(data);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const handlePayment = async () => {
    if (!order) return;

    const options = {
      key: "rzp_test_DClMygpDU9TijX",
      amount: order.amount,
      currency: order.currency,
      name: "BookHaven",
      description: "Payment for Your Hotel-Booking",
      order_id: order.id,
      handler: async (response) => {
        console.log(response);
        // Handle success callback
        setOrder(null); 
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9876543210",
      },
      notes: {
        address: "Customer Address",
      },
      theme: {
        color: "#F37254",
      },
    };

    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();
  };

  return (
    <>
      <Modal open={ShowMyBookingModal} onClose={() => setShowMyBookingModal(false)}>
        <ModalDialog minWidth={600}>
          <Typography textAlign={"center"} variant="h2">
            Your Bookings
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Booking ID</TableCell>
                  <TableCell align="right">Username</TableCell>
                  <TableCell align="right">Check-IN Time</TableCell>
                  <TableCell align="right">Rooms</TableCell>
                  <TableCell align="right">Check-IN Date</TableCell>
                  <TableCell align="right">Check-Out Date</TableCell>
                  <TableCell align="right">Price (INR)</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bookingresponse.map((row) => (
                  <TableRow key={row._id}>
                    <TableCell align="right">{row._id}</TableCell>
                    <TableCell align="right">{row.username}</TableCell>
                    <TableCell align="right">{row.selectedTime}</TableCell>
                    <TableCell align="right">{row.selectedRooms}</TableCell>
                    <TableCell align="right">{row.selectedInDate}</TableCell>
                    <TableCell align="right">{row.selectedOutDate}</TableCell>
                    <TableCell align="right">{row.Price}</TableCell>
                    <TableCell align="right">
                      <Button color="danger" onClick={() => handleCancelBooking(row._id)}>
                        Cancel
                      </Button>
                      </TableCell>
                      <TableCell align="right">
                      <Button color="success" onClick={() => handleCreateOrder(row.Price)}>
                        Online Payment
                      </Button>
                      </TableCell>
                      <TableCell align="right">
<Button color="blue" onClick={()=>setReviewPage(true)} >
                        Review
                        
                      </Button>
                      </TableCell>
       
                   
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {order && (
            <Button onClick={handlePayment}>
              Pay ₹{order.amount / 100}
            </Button>
          )}

                     {Reviewpage && (
                      <Review setReviewPage={setReviewPage} Reviewpage={Reviewpage}/>
                     )
                     }
            
         
        </ModalDialog>
      </Modal>
    </>
  );
};

export default MyBookings;
