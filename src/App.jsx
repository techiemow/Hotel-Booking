import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer'
import {Grid} from '@mui/material'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingPage from './components/BookingPage';
import { useState } from 'react';
import { Appprovider } from './components/Context';
function App() {
  
  const Layout = () => {
    const [SearchHotel, setSearchHotel] = useState("")
 
    return (
      <Appprovider value={{ SearchHotel, setSearchHotel}}>
        <>
            <Navbar/>
            <BookingPage/>
            <Footer/>
            </>

      </Appprovider>
    
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
