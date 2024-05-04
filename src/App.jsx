import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer'
import {Grid} from '@mui/material'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  
  const Layout = () => {


    return (
        <Grid item>
            <Navbar/>

            <Footer/>
        </Grid>
    );
  };







  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route path="/:location" element={<Layout/>}></Route>
        <Route path="*" element={<Layout/>}></Route>
      </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
