//The button component for the card
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/CardButton.css';

function CardButton(props) {
    return (
        <div className="CardButton w-100 d-flex justify-content-center">
            <Link className="btn btn-primary btn-card" to={`/${props.userId}`}>Profile</Link>
        </div>
    )
}

export default CardButton;