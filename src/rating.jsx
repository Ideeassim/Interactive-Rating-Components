import  React from 'react'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Fab from '@mui/material/Fab';
import StarIcon from '@mui/icons-material/Star';


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
         <div>      
            
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
            
         </div>
         </ThemeProvider>
        </>
      )
}

export default Rating;