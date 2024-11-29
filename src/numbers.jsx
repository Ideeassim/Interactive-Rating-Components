import React from "react";
import Fab from '@mui/material/Fab';


function Numbers(props) {
 const num =[
   {id:0, value:1},
   {id:1, value:2},
   {id:2, value:3},
   {id:3, value:4},
   {id:4, value:5}      
   ]

    return num.map((x, index) =>{
       return <Fab color={props.clickId == x.id? props.col2: props.col}
        sx={{fontSize: 18, fontFamily:'OverPass', height:{xs:'1rem', md:'3rem', lg:'3rem'}, '&:hover': {color: '#FFFFFF', backgroundColor: '#7C8798'}} } key={index} id={index} 
        onClick={props.userClicked}>{x.value}</Fab>         
         
      }) 
     
};

export default Numbers;