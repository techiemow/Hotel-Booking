import React, { useState } from 'react';
import { AppBar, Grid, IconButton, TextField, InputAdornment, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';
import { locations } from './constants';
import "./Navbar.css"
import Loginpage from './loginpage';


const Navbar = () => {
  const [openType, setOpenType] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(true);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(!isSearchOpen);
    console.log("setIsMenuOpen called with menu open state changed to " + isMenuOpen);
  };

  return (
   <AppBar color="transparent" position='static'>


          <Grid
            container
            style={{
              width: "1500",
              margin: "20px",
              paddingBottom: "10px"
            }}
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            columnSpacing={16}
           
          >
            <Grid item>
              <a className='Navbar-brand' href="#">BookHaven</a>
            </Grid>
            
            
            
            {isSearchOpen && (
            <>
            
            <Grid item>
           
            <Autocomplete
            className='Item'
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
                
            </Grid>
            <Grid item>
            <TextField
             className='Item'
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
            </Grid>
            <Grid item>
              <Button  className='Item' variant="contained" color="primary"
              onClick={()=>{
                setOpenType("Login")
              }}>
              Login
              </Button>
            </Grid>
            <Grid item>
              <Button  className='Item' variant="contained" color="secondary"
              onClick={()=>{
                setOpenType("Register")
              }}>
                Register
              </Button>
            </Grid>

            <Grid item>
              <IconButton className="navbar-toggler icon" onClick={handleMenuToggle}>
                <MenuIcon />
              </IconButton>
            </Grid>
            </>
             )}
          </Grid>
                 

          {isMenuOpen && (
            <div className="menu-content">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <Grid item>
                <li className="nav-item mb-4">
                  <Autocomplete
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
                </li>
                </Grid>
                <Grid item>
                <li className="nav-item mb-4">
                  <TextField
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
                </li>
                </Grid>
                <li className="nav-item mb-4">
                  <Button variant="contained">Login</Button>
                </li>
                <li className="nav-item mb-2">
                  <Button variant="contained">Register</Button>
                </li>
              </ul>
            </div>
          )}
  
   


        <Grid container justifyContent={'center'} alignItems={'center'}>
          <Grid item>
            <Button variant="text">Home</Button>
          </Grid>
          <Grid item>
            <Button variant="text">Book a table</Button>
          </Grid>
          <Grid item>
            <Button variant="text">Blog</Button>
          </Grid>
        </Grid>


        < Loginpage/>
    </AppBar>

    
  );
};

export default Navbar;
