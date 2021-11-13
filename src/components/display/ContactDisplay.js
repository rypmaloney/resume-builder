import React from "react";
import "./ContactDisplay.css"

const ContactDisplay = (props) => {
    //const { tasks } = props;

    return (
        <div>
                <div className="contact-display">
                    <h1>{props.contact.name}</h1>
                    <div>
                        <p>{props.contact.address}</p>
                        <p>{props.contact.email}</p>
                    </div>
                </div>
        </div>
    );
};

export default ContactDisplay;
