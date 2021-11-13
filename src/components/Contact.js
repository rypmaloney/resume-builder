import React from "react";

const Contact = (props) => {
    //const { tasks } = props;

    return (
        <div>
            <form onSubmit={props.click}>
                <label htmlFor="nameInput">Name:</label>
                <input type="text" id="nameInput" />
                <br />
                <label htmlFor="addressInput">Address:</label>
                <input type="text" id="addressInput" />
                <br />
                <label htmlFor="emailInput">Email</label>
                <input type="text" id="emailInput" />
                <br />
                <button type="submit">Submit</button>
                <br />
            </form>
        </div>
    );
};

export default Contact;
