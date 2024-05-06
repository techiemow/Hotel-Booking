import React, { useState } from 'react';
import { TextField, InputAdornment, Button, AppBar } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';
import { locations } from './constants';
import "./Navbar.css"
import Loginpage from './loginpage';
import Registration from './registration';


const Navbar = () => {
  const [openType, setOpenType] = useState("");

  const navigate = useNavigate();


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
                    label="Search"
                    placeholder="Enter the name of Hotel"
                    fullWidth
                  />

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


    </div>
  </div>

   


      


        < Loginpage openType={openType} setopenType={setOpenType} />
        < Registration openType={openType} setopenType={setOpenType}/>

        </nav>
        </AppBar> 
  );
};

export default Navbar;
