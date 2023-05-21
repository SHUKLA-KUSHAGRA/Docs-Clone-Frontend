import { Box, Typography } from '@mui/material';
import React from 'react';
import Cards from './Cards';
import img from "../assets/blank.png";
import filler from "../assets/filler.png";

function Banner() {
  return (
    <>
    <div style={{marginTop: '70px',backgroundColor : '#f1f3f4'}}>
        <Box sx={{display : 'flex',paddingX : '15vw',paddingY : '3vh'}}>
            <Typography>Start a new document</Typography>
        </Box>
        <Box sx={{display : 'flex',paddingX : '15vw',paddingY : '3vh',}}>
            <Cards src={img}/>
        </Box>
    </div>
    <div>
        <Box sx={{display : 'flex',paddingX : '15vw',paddingY : '3vh'}}>
            <Typography>Recent document</Typography>
        </Box>
        <Box sx={{display : 'flex',paddingX : '15vw',paddingY : '3vh',}}>
            <Cards src={filler}/>
            <Cards src={filler}/>
            <Cards src={filler}/>
            <Cards src={filler}/>
        </Box>
    </div>
    </>
  );
}

export default Banner;