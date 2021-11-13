import React from "react";

const ContactDisplay = (props) => {
    //const { tasks } = props;

    return (
        <div>
                <div className="contact-display">
                    <p>{props.contact.name}</p>
                    <p>{props.contact.address}</p>
                    <p>{props.contact.email}</p>
                </div>
        </div>
    );
};

export default ContactDisplay;
