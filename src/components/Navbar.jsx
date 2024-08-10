import React, { useContext, useState } from 'react';
import { TextField, InputAdornment, Button, AppBar } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';
import { locations } from './constants';

import Loginpage from './loginpage';
import Registration from './registration';
import { Appcontext } from './Context';
import MyBookings from './MyBookings';


const Navbar = () => {
  const [OpenType, setOpenType] = useState("");
  const [ShowMyBookingModal, setShowMyBookingModal]= useState(false);

  const navigate = useNavigate();
  const username = localStorage.getItem("login") || ""; 

  const { setSearchHotel } = useContext(Appcontext);

  const handleLogout = () => {
    localStorage.setItem("login", "");
    window.location.reload();
  };

  const handleMyBookings = () => {
    setShowMyBookingModal(true);
  
  };

  const handleNameChange = (event) => {
    setSearchHotel(event.target.value);
    console.log(event.target.value);
  };
 

  return (
   
<AppBar >
<nav className="navbar navbar-expand-md bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand mx-5" href="#">BookHaven</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
         
       <Autocomplete
             className='Item m-2 mx-5'
                    disablePortal
                    id="combo-box-demo"
                    options={locations}
                    sx={{ width: 200 }}
                    onChange={(event) => {
                      const searchedLocation = event.target.innerText;
                      searchedLocation?.length && navigate("/" + searchedLocation);
                    }}
                    renderInput={(params) => <TextField {...params} label="Locations" />}
                  />

            <TextField
             className='Item m-2 mx-5'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    sx={{ width: 300 }}
                    onChange={handleNameChange}
                    label="Search"
                    placeholder="Enter the name of Hotel"
                    fullWidth
                  />
              
              { ! username ? (
               <>
               <Button  className='Item m-2 mx-5' variant="contained" color="primary"
              onClick={()=>{
                setOpenType("Login")
              }}>
              Login
              </Button>
     
              <Button  className='Item m-2 mx-5' variant="contained" color="secondary"
              onClick={() => {
                setOpenType("Register")
              }}>
                Register
              </Button>
              </>

            ) : (
              <>
                   <Button
                  className="Item m-2 mx-5"
                  variant="outlined"
                  size="medium"
                  onClick={handleMyBookings}
                >
                  My Booking
                </Button>

                <Button
                  className="Item m-2 mx-5"
                  variant="outlined"
                  size="medium"
                  onClick={handleLogout}
                >
                  Logout
                </Button>

                    </>

            )}

    </div>
  </div>

   


      
       


        < Loginpage OpenType={OpenType} setOpenType={setOpenType} />
        < Registration OpenType={OpenType} setOpenType={setOpenType}/>


        {ShowMyBookingModal && (
        <MyBookings
        ShowMyBookingModal={ShowMyBookingModal}
          setShowMyBookingModal={setShowMyBookingModal}
        />
      )}
       
        </nav>
        </AppBar> 
      
  );
};

export default Navbar;
