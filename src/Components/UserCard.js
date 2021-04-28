import React from 'react';
import CardButton from './CardButton';
import '../Styles/UserCard.css';

//The user card component that display simple information about a user
/* The props of UserCard has:
- id
- name
- useranme
- website */

function UserCard(props) {
    let { id, name, username, website } = props.userInfo;
    return (
        <div className="UserCard">
            <div className="UserCard-wrapper">
                <div className="UserCard-avatar-border">
                    <div className="UserCard-avatar">
                        <h2 className="m-0">{name[0]}</h2>
                    </div>
                </div>

                <div className="UserCard-body">
                    <div className="text-center">
                        <div className="body-title">
                            <h3>{name}</h3>
                        </div>
                        <div className="body-content">
                            <p className="m-0 mb-2"><i className="fas fa-user mr-2"></i>{username}</p>
                            <a href={website}><i className="fas fa-heart mr-2"></i>{website}</a>
                        </div>
                    </div>
                </div>

                <CardButton userId={id} />
            </div>
        </div>
    )
}

export default UserCard;