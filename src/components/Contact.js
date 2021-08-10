import React from 'react';
import './Contact.css';

function Contact() {

    return (
        <div className="Contact">
            <img className="avatar" src="https://randomuser.me/api/portraits/men/96.jpg"></img>
            <div>
                <p className="name">Dan Fields</p>
                <div className="status">
                    <div className="status-online"></div>
                    <div className="status-text">online</div>
                </div>
            </div>
        </div>
    );
}

export default Contact;