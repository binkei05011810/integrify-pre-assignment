//Component for key-value pair user data. For example {email: nmk@gmail.com}

import React from 'react';
import '../Styles/UserInfoPiece.css';

function UserInfoPiece(props) {
    return (
        <div className="UserInfoPiece row p-0">
            <div className="col-3 Piece-name-wrapper">
                <div className="Piece-name">
                    {props.name}
                </div>
            </div>
            <div className="col-9 Piece-value-wrapper">
                {props.name === "website"
                    ?
                    <a className="Piece-value link" href={props.value}>{props.value}</a>
                    :
                    <div className="Piece-value">
                        {props.value}
                    </div>
                }
            </div>
        </div>
    )
}

export default UserInfoPiece;