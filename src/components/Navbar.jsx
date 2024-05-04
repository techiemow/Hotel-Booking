import "./Navbar.css";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Grid, InputAdornment, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { locations } from "./constants";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("setIsMenuOpen called with menu open state changed to " + isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          style={{
            width: "100%",
            padding: "30px",
          }}
        >
            <Grid item>
              <li className="nav-item">
              <a className="navbar-brand" href="#">BookHaven</a>
              </li>
              </Grid>
          <Grid item>
          <IconButton
            className="navbar-toggler"
            onClick={handleMenuToggle}
          >
            <MenuIcon />
          </IconButton>
        </Grid>
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
                  id="demo-helper-text-misaligned-no-helper"
                  label="Search"
                  placeholder="Enter the name of Hotel"
                  fullWidth
                />
              </li>
              </Grid>
              <Grid item>
                <li className="nav-item mb-4">
                <Button variant="contained">Login</Button>
                </li>
              </Grid>
              <Grid item>
                <li className="nav-item mb-2">
                <Button variant="contained">Register</Button>
                </li>
              </Grid>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

