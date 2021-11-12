import React from "react";

const Contact = (props) => {
    //const { tasks } = props;

    return (
        <div>
            <form onSubmit= {props.click}>
                <label htmlFor="nameInput">Name:</label>
                <input type="text" id="nameInput" />
                <label htmlFor="addressInput">Address:</label>
                <input type="text" id="addressInput" />
                <label htmlFor="emailInput">Email</label>
                <input type="text" id="emailInput" />
                <button type="submit">Submit</button>
            </form>
            <p>{props.contact.name}</p>
            <p>{props.contact.address}</p>
            <p>{props.contact.email}</p>

        </div>
    );
};

export default Contact;
