import {React, useState} from "react";
import Fab from '@mui/material/Fab';


function Numbers(props) {
const[isClicked, setIsClicked] = useState(9);
const[clickedNum, setClickedNum]=useState('')



function userClicked(event) {
   // console.log(event.target.innerText);
   
   return (setIsClicked(event.target.id), setClickedNum(event.target.innerText))
}

    const num =[{id:0, value:1},{id:1, value:2},{id:2, value:3},{id:3, value:4},{id:4, value:5}
      
   ]
    return num.map((x, index) =>{
       return <Fab color={isClicked == x.id? props.col2: props.col} sx={{fontSize: 18, fontFamily:'OverPass',  '&:hover': {color: '#FFFFFF', backgroundColor: '#7C8798'} }} key={index} id={index} onClick={userClicked}>{x.value}</Fab>
         
         
      }) 
     
};

export default Numbers;