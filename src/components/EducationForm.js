import React from "react";

const EducationForm = (props) => {
    //const { tasks } = props;

    return (
        <div>
            <form onSubmit={props.click}>
                <label htmlFor="nameInput">Institution:</label>
                <input type="text" id="institution" />
                <br />
                <label htmlFor="address">Date:</label>
                <input type="text" id="date" />
                <br />
                <label htmlFor="emailInput">description:</label>
                <input type="text" id="desc" />
                <br />
                <button type="submit">Submit Ed Info</button>
                
                <br />
            </form>
        </div>
    );
};

export default EducationForm;
