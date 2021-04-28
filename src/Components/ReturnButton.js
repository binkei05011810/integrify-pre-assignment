import React from 'react';
import '../Styles/ReturnButton.css'
import { Link, NavLink } from 'react-router-dom';

function ReturnButton(props) {
    return (
        <Link to="/" className="ReturnButton">
            <div><i class="fas fa-arrow-left"></i></div>
        </Link>
    )
}

export default ReturnButton;