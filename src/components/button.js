import React from "react";

function SingleButton(props) {
    return (
        <button className='button'
                onClick={props.onClick}>
            {props.value}
        </button>
    );
}



export default SingleButton;