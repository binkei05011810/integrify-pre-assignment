import React from 'react';
import '../Styles/ReturnButton.css'
import { Link } from 'react-router-dom';

//A return button component allow users to return to the home page
function ReturnButton(props) {
    return (
        <Link to="/" className="ReturnButton">
            <div><i className="fas fa-arrow-left"></i></div>
        </Link>
    )
}

export default ReturnButton;