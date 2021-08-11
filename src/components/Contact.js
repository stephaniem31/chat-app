import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';



function Contact(props) {

    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar}></img>
            <div>
                <p className="name">{props.name}</p>
                <div className="status">
                    <div className={props.online ? 'status-online' : 'status-offline'}></div>
                    <div className="status-text">{props.online ? 'Online' : "Offline"}</div>
                </div>
            </div>
        </div>
    );
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};


export default Contact;