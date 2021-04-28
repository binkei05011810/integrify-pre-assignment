import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Styles/UserDetail.css';
import UserInfoPiece from './UserInfoPiece.js';
import AddressMap from './AddressMap.js';
import AddressDetail from './AddressDetail.js'
import ReturnButton from './ReturnButton.js'

/* 
The component that will render that page display detail information about 
the user

*/
function UserDetail(props) {
    let { userId } = useParams();

    const [userDetail, setUserInfo] = useState({});

    //False when the data have not been fetched from the API.
    const [isLoaded, setLoad] = useState(false)

    //The state decide whether the address section is active or not. 
    const [addressDetailActive, setAddressDetail] = useState(false);

    useEffect(() => {
        async function getUserDetail() {
            const userInfo = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);

            setUserInfo(userInfo.data);
            setLoad(true);
        }
        getUserDetail();
    }, [userDetail.id]);

    const turnOnAdressDetail = () => {
        setAddressDetail(true);
    }

    const turnOffAddressDetail = () => {
        setAddressDetail(false);
    }

    const combineAddress = (address) => {
        return `${address.suite} ${address.street}, ${address.zipcode}, ${address.city}`
    }

    /* If the page is loaded then we render the page simultaneously */
    return (
        isLoaded &&
        <div className="Top-level">
            <ReturnButton />
            <div className={`UserDetail h-100 ${addressDetailActive ? "UserDetail-faded" : ""}`}>
                <div className="User-cover">
                    <div className="User-avatar-border">
                        <div className="User-avatar">
                            <h2 className="m-0">{userDetail.name[0]}</h2>
                        </div>
                    </div>
                </div>

                <div className="User-content w-100">
                    <div>
                        <div className="UserDetail-title w-100 text-center mb-5">
                            <h1>{userDetail.name}</h1>
                            <h2><i className="fas fa-user-tie"></i> {userDetail.username}</h2>
                        </div>

                        <div className="container">
                            <UserInfoPiece name="email" value={userDetail.email} />
                            <UserInfoPiece name="phone" value={userDetail.phone} />
                            <UserInfoPiece name="company" value={userDetail.company.name} />
                            <UserInfoPiece name="website" value={userDetail.website} />
                        </div>

                        <div className="container">
                            <AddressMap
                                longtitude={userDetail.address.geo.lng}
                                latitude={userDetail.address.geo.lat}
                                zoom={1.5}
                                address={combineAddress(userDetail.address)}
                                turnOnAddressDetail={turnOnAdressDetail}
                                addressDetailActive={addressDetailActive} />
                        </div>
                    </div>
                </div>
            </div>

            {/*The address detail is relative to the outer most element */}
            {addressDetailActive &&
                <AddressDetail
                    address={userDetail.address}
                    turnOffAddressDetail={turnOffAddressDetail} />}
        </div>
    )
}

export default UserDetail;