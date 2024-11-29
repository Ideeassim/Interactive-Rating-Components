import { React, useState } from 'react'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Numbers from './numbers';
import Fab from '@mui/material/Fab';
import StarIcon from '@mui/icons-material/Star';
import Submit from './submit';

const { palette } = createTheme();
const theme = createTheme({
  palette: {
    myAwesomeColor: palette.augmentColor({
      color: {
        main: "#262E38",
        contrastText:'#7C8798'
      }
   }),
   myOrangeColor: palette.augmentColor({
      color: {
        main: '#FC7614',
        contrastText:'#FFFFFF'
      }
   }),
   myGrayColor: palette.augmentColor({
    color: {
      main: '#7C8798'
    }
  }),
  myWhiteColor: palette.augmentColor({
    color:{
      main:'#FFFFFF',
      contrastText:'#FC7614'
    }
  })
}
});

function Rating() {
    return (
        <>
        <ThemeProvider theme={theme}>
         <div className='ratingBox'>      
            
            <section>
              <div className='starBox'><Fab color='myAwesomeColor'><StarIcon color='myOrangeColor'/></Fab></div>
              <header>
                <h1>How did we do?</h1>
                </header>
                <div className='textBox'>
                    <p className='text'> Please let us know how we did with your support request. All feedback is appreciated 
                    to help us improve our offering!</p>
                </div>
            </section>
            <section className='fabBox'>         
             <Numbers 
             col= 'myAwesomeColor'
             col2 ='myOrangeColor'        
             />
           
            </section>
            <section>
              
              <Submit />
              
            </section>
         </div>
         </ThemeProvider>
        </>
      )
}

export default Rating;