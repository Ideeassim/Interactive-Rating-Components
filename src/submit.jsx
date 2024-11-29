import { React, useState } from "react";


function Submit(props) {
    const[submitClicked, setSubmitClicked] = useState(false);

    function submitHandler() {
        return setSubmitClicked(true)
    }

    return  <button type='submit' className='submitButton' onClick={submitHandler}
    style={{'backgroundColor': submitClicked? '#FFFFFF' : '#FC7614','color': submitClicked? '#FC7614': '#FFFFFF'}}>
                SUBMIT
            </button>
}

export default Submit;