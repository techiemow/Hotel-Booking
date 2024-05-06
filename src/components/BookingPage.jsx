import { Grid, Typography,Breadcrumbs, Autocomplete,
    TextField } from '@mui/material';
import React from 'react'
import { useParams } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const BookingPage = () => {
    const { location = "Delhi" } = useParams();


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
      margin: "auto",
      width: 1475,
    }}
    spacing={4}
  >
    {/* <Grid item lg={2}>
      <Filter filteredTags={filteredTags} setFilteredTags={setFilteredTags} />
    </Grid> */}

    <Grid item lg={9} md={6} sm={4}>
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
              Best Restaurants Near Me in {location}
            </Typography>
          </Grid>

          <Grid item>
            <Grid container alignItems={"center"} spacing={2}>
              <Grid item>
                {/* <Typography variant="h5" fontSize={20}>
                  Sort
                </Typography> */}
              </Grid>

              <Grid item>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                //   options={sortData}
                  sx={{ width: 150 }}
                
                  renderInput={(params) => (
                    <TextField {...params} label="Sort" />
                  )}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </Grid>
        </Grid>
        </Grid>
  )
}

export default BookingPage