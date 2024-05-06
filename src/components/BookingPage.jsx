import { Grid, Typography,Breadcrumbs, Autocomplete,
    TextField } from '@mui/material';
import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { sortData } from './constants';
import Filter from './Filter';
import HotelCard from './HotelCard';

const BookingPage = () => {
    const { location = "Delhi" } = useParams();
    
    const [filteredTags, setFilteredTags] = useState([]);
    const [selectedSort, setSelectedSort] = useState("Ratings");

    console.log(selectedSort);
    const breadcrumbs = [
        <Grid underline="hover" key="1" color="inherit" href="/" onClick={() => {}}>
          Home
        </Grid>,
        <Grid underline="hover" key="2" color="inherit" href="/" onClick={() => {}}>
         Location
        </Grid>,
        <Grid
          underline="hover"
          key="3"
          color="inherit"
          href="/material-ui/getting-started/installation/"
          onClick={() => {}}
        >
          {location} City
        </Grid>,
        <Typography key="4" color="text.primary">
          {location}
        </Typography>,
      ];



  return (
    <Grid
    container
    style={{
      marginTop:"auto",
      width: 1600
    }}
    spacing={12}
    columnSpacing={1}
     >
    <Grid item lg={2} md={2} sm={2} spacing={20}>
        <Filter filteredTags={filteredTags} setFilteredTags={setFilteredTags} />
      </Grid>

    <Grid item lg={8} md={6} sm={4} >
      <Grid item>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Grid>
      <Grid item>
        <Grid
          container
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Grid item>
            <Typography variant="h3" fontSize={30}>
              Best Hotels Near Me in {location}
            </Typography>
          </Grid>

          <Grid item>
         

              <Grid item>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={sortData}
                  sx={{ width: 150 }}
                  onChange={(event) =>{
                    setSelectedSort(event.target.innerHTML);
                  }}
                
                  renderInput={(params) => (
                    <TextField {...params} label="Sort" />
                  )}
                />
              </Grid>
            
          </Grid>
        </Grid>
        </Grid>
        <Grid item paddingTop={4}>
          <HotelCard
            location={location}
            filteredTags={filteredTags}
            selectedSort={selectedSort}
          />
        </Grid>
        </Grid>
        </Grid>
  )
}

export default BookingPage