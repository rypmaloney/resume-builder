import React from "react";

const EducationForm = (props) => {
    //const { tasks } = props;

    return (
        <div>
            <form onSubmit={props.clickEd}>
                <label htmlFor="nameInput">Institution:</label>
                <input onChange={props.changeEd} type="text" id="institution" />
                <br />
                <label htmlFor="address">Date:</label>
                <input onChange={props.changeEd} type="text" id="year" />
                <br />
                <label htmlFor="emailInput">description:</label>
                <input onChange={props.changeEd} type="text" id="desc" />
                <br />
                <button type="submit">Submit Ed Info</button>
                
                <br />
            </form>
        </div>
    );
};

export default EducationForm;
