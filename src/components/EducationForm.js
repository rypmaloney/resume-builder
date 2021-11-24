import React, { Component } from "react";

class EducationForm extends React.Component {
    render() {
        const { clickEd, thisEd, index, updateEd, changeEd } = this.props;

        return (
            <div>
                <form onSubmit={(e) => updateEd(e, index)}>
                    <label htmlFor="nameInput">Institution:</label>
                    <input
                        onChange={(e) => changeEd(e,index)}
                        type="text"
                        id="institution"
                        value={thisEd.institution}
                    />
                    <br />
                    <label htmlFor="address">Date:</label>
                    <input
                        onChange={(e) => changeEd(e,index)}
                        type="text"
                        id="year"
                        value={thisEd.year}
                    />
                    <br />
                    <label htmlFor="emailInput">description:</label>
                    <input
                        onChange={(e) => changeEd(e,index)}
                        type="text"
                        id="details"
                        value={thisEd.details}
                    />
                    <br />
                    <button type="submit">Submit Ed Info</button>
                    {/* Use props.index - create a function that updates education[index] */}

                    <br />
                </form>
            </div>
        );
    }
}

export default EducationForm;
