import React from "react";

const Contact = (props) => {
    //const { tasks } = props;

    return (
        <div>
            <form onSubmit= {props.click}>
                <label htmlFor="contactInput">Name:</label>
                <input type="text" id="contactInput" />
                <button type="submit">Submit</button>
            </form>
            <p>{props.name}</p>
        </div>
    );
};

export default Contact;
