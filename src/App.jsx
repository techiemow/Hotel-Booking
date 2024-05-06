import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer'
import {Grid} from '@mui/material'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingPage from './components/BookingPage';
function App() {
  
  const Layout = () => {


    return (
        <>
            <Navbar/>
            <BookingPage/>
            <Footer/>
            </>
    
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
