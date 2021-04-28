//The component that contain all the single User component
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import '../Styles/Users.css';

function Users() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        async function getUserData() {
            const data = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUserData(data.data);
        }
        getUserData();
    }, [userData.length]);

    return (
        <section className="Users">
            <div className="container">
                <div className="Users-title">
                    <h1>All Users</h1>
                    <i className="fas fa-star"></i>
                </div>

                <div className="row d-flex justify-content-center">
                    {userData.map(user => {
                        return (
                            <div className="Users-col col-lg-6 col-md-5 col-sm-7 col-12">
                                <UserCard key={user.id} userInfo={user} />
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        </section>
    )
}

export default Users;