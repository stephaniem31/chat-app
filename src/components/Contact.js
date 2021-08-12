import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';



class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: props.online
        };
    }

    render() {
        return (
            <div className="Contact">
                <img className="avatar" src={this.props.avatar}></img>
                <div>
                    <p className="name">{this.props.name}</p>
                    <div
                        className="status"
                        onClick={event => {
                            const newOnline = !this.state.online;
                            this.setState({ online: newOnline });
                        }}>
                        <div className={this.state.online ? 'status-online' : 'status-offline'}></div>
                        <div className="status-text">{this.state.online ? 'Online' : "Offline"}</div>
                    </div>
                </div>
            </div>
        );
    }
};

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};


export default Contact;