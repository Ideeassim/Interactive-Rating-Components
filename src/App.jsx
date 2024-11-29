import { React, useState } from 'react'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Numbers from './numbers';
import Rating from './rating';
import Submit from './submit';
import ThankYou from './ThankYou';
import Fab from '@mui/material/Fab';
import './App.css'

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

function App() {
  const[clickId, setClickId] = useState(9);
  const[isClicked, setIsClicked]= useState(false)
  const[clickedNum, setClickedNum]=useState('')

  
function userClicked(event) {
 return (setClickId(event.target.id),
  setClickedNum(event.target.innerText), 
  setIsClicked(true))
}

const[submitClicked, setSubmitClicked] = useState(false);

function submitHandler() {
    return setSubmitClicked(isClicked? true : false)
}
  return( <div>
    <ThemeProvider theme={theme}>
      <section className='ratingBox'>
       { submitClicked ? <ThankYou  num={clickedNum} />  : <div className='inner-rating-box'>
         <Rating />
        <section className='fabBox'>         
             <Numbers 
             col= 'myAwesomeColor'
             col2 ='myOrangeColor'  
             isClicked={isClicked} 
             clickId={clickId}  
             userClicked={userClicked}   
             />
           
            </section>

            <section>
              
              <Submit 
              submitHandler={submitHandler}
              submitClicked={submitClicked}
              />
              
            </section> </div>}
       {/* <Fab   sx={{ backgroundColor: { xs: 'myOrangeColor', md: "green", lg: "blue" }, }}></Fab> */}
      </section>
      
    </ThemeProvider>
  </div>)
}

export default App;
