import React, {useEffect, useState} from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import {Route, Routes} from "react-router-dom";
import {Box, Grid, Stack} from "@mui/material";

export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(true);

   function handleToggleDarkMode() {
      let oppositeOfCurrentDarkMode = !darkMode
      localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`)
      setDarkMode(oppositeOfCurrentDarkMode)
   }

   useEffect(() => {
      let detectedDarkMode = eval(localStorage.getItem('darkMode'));

      if (detectedDarkMode) {
         setDarkMode(detectedDarkMode)
      } else {
         localStorage.setItem('darkMode', 'false')
      }
   }, [])
   
   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Stack container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
               <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode}/>
               <Home darkMode={darkMode}/>
               <About/>
         </Stack>
      </Box>
   )
}

