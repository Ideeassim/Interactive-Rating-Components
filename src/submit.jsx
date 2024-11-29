import React from "react";


function Submit(props) {
   return  <button type='submit' className='submitButton' onClick={props.submitHandler}
    style={{'backgroundColor': props.submitClicked? '#FFFFFF' : '#FC7614','color': props.submitClicked? '#FC7614': '#FFFFFF'}}>
                SUBMIT
            </button>
}

export default Submit;