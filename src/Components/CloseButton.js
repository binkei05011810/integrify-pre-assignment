import React from 'react';
import '../Styles/CloseButton.css'

/* 
The close component that will be use to close that address deatil pop up 
*/

function CloseButton(props) {
    const handleClick = () => {
        props.turnOffAddressDetail();
    }

    return (
        <div
            className="CloseButton"
            onClick={handleClick}>
            <i className="far fa-times-circle"></i>
        </div>
    )
}

export default CloseButton;