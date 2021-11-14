import React from "react";

const Education = (props) => {
    //const { tasks } = props;

    return (
        <div>
        <h2>Education</h2>
            <form onSubmit={props.click}>
                <label htmlFor="nameInput">Name:</label>
                <input type="text" id="nameInput" />
                <br />
                <label htmlFor="addressInput">City:</label>
                <input type="text" id="addressInput" />
                <br />
                <label htmlFor="emailInput">Email:</label>
                <input type="text" id="emailInput" />
                <br />
                <button type="submit">Submit Ed Info</button>
                <button>Add Another Institution</button>
                <br />
            </form>
        </div>
    );
};

export default Education;
