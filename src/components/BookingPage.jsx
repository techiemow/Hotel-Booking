import { Grid, Typography,Breadcrumbs, Autocomplete,
    TextField, 
    useMediaQuery} from '@mui/material';
import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { sortData } from './constants';
import Filter from './Filter';
import HotelCard from './HotelCard';
import Compare from './Compare';



const BookingPage = () => {
    const { location = "Delhi" } = useParams();

    const [compare , setcompare] = useState(false);
    console.log(compare);
    
    const [filteredTags, setFilteredTags] = useState([]);
    const [selectedSort, setSelectedSort] = useState("Ratings");

    console.log(filteredTags)

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

      const isMobile = useMediaQuery('(max-width:600px)'); 

  return (
    <Grid
    container
    style={{
      marginTop:"auto",
      width: 1480
    }}
    spacing={12}
    columnSpacing={1} 
     >
      {!isMobile &&
    <Grid item lg={2} md={2} sm={1.5}  >
        <Filter filteredTags={filteredTags} setFilteredTags={setFilteredTags} />
      </Grid>
}  
    
      
    <Grid item lg={9} md={5} sm={3.5} xs={4}>
      <Grid >
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
          {!isMobile &&
          <Grid item>
            <button className='btn btn-primary' onClick={()=>{
              setcompare(true);
            }}>Compare</button>
            <Compare  compare={compare} setcompare={setcompare}/>
          </Grid>}
          </Grid>

          <Grid item>
         

              <Grid item>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={sortData}
                  sx={{ width: 215 }}
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
