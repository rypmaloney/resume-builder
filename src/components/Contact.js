import React from "react";

const Contact = (props) => {
    //const { tasks } = props;

    return (
        <div>
        <h2>Contact information</h2>
            <form onSubmit={props.click}>
                <label htmlFor="nameInput">Name:</label>
                <input onChange={props.change} type="text" id="nameInput" />
                <br />
                <label htmlFor="addressInput">City:</label>
                <input type="text" id="addressInput" />
                <br />
                <label htmlFor="emailInput">Email:</label>
                <input type="text" id="emailInput" />
                <br />
                <button type="submit">Submit Contact Info</button>
                <br />
            </form>
        </div>
    );
};

export default Contact;
