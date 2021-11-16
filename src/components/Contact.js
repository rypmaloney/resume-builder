import React from "react";

const Contact = (props) => {
    //const { tasks } = props;

    return (
        <div>
        <h2>Contact information</h2>
            <form onSubmit={props.click}>
                <label htmlFor="name">Name:</label>
                <input onChange={props.change} type="text" id="name" />
                <br />
                <label htmlFor="address">City:</label>
                <input onChange={props.change}type="text" id="address" />
                <br />
                <label htmlFor="email">Email:</label>
                <input onChange={props.change} type="text" id="email" />
                <br />
                <button type="submit">Submit Contact Info</button>
                <br />
            </form>
        </div>
    );
};

export default Contact;
