import React from "react";

const EducationForm = (props) => {


    return (
        
        <div>
            <form onSubmit={props.clickEd}>
                <label htmlFor="nameInput">Institution:</label>
                <input onChange={props.changeEd} type="text" id="institution" /*value={props.institution} *//>
                <br />
                <label htmlFor="address">Date:</label>
                <input onChange={props.changeEd} type="text" id="year"  />
                <br />
                <label htmlFor="emailInput">description:</label>
                <input onChange={props.changeEd} type="text" id="desc" />
                <br />
                <button type="submit">Submit Ed Info</button>
                {/* Use props.index - create a function that updates education[index] */}
                
                <br />
            </form>
        </div>
    );
};

export default EducationForm;
