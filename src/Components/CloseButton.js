import React from 'react';
import '../Styles/CloseButton.css'

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