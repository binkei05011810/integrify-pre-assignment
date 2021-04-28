/* This component is the detail information about a user address, which will pop up 
when the user click the Address button */

import React from 'react';
import '../Styles/AddressDetail.css';
import UserInfoPiece from './UserInfoPiece.js';
import CloseButton from './CloseButton.js';

function AddressDetail(props) {
    return (
        <div id="AddressDetail">
            <div className="Address-wrapper">
                <CloseButton turnOffAddressDetail={props.turnOffAddressDetail} />
                <div>
                    <UserInfoPiece name="suite" value={props.address.suite} />
                    <UserInfoPiece name="street" value={props.address.street} />
                    <UserInfoPiece name="city" value={props.address.city} />
                    <UserInfoPiece name="zip code" value={props.address.zipcode} />
                </div>
            </div>
        </div>
    )
}

export default AddressDetail;