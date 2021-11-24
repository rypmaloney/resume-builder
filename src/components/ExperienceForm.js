import React, { Component } from "react";

class ExperienceForm extends React.Component {
    render() {
        const { thisXP, index, updateXP, changeXP } = this.props;

        return (
            <div>
                <form onSubmit={(e) => updateXP(e, index)}>
                    <label htmlFor="nameInput">Institution:</label>
                    <input
                        onChange={(e) => changeXP(e, index)}
                        type="text"
                        id="institution"
                        value={thisXP.institution}
                    />
                    <br />
                    <label htmlFor="address">Date:</label>
                    <input
                        onChange={(e) => changeXP(e, index)}
                        type="text"
                        id="year"
                        value={thisXP.year}
                    />
                    <br />

                    <textarea
                     placeholder="Description" 
                        rows="5"
                        onChange={(e) => changeXP(e, index)}
                        type="text"
                        id="details"
                        value={thisXP.details}
                    />
                    <br />
                    {/* Use props.index - create a function that updates education[index] */}

                    <br />
                </form>
            </div>
        );
    }
}

export default ExperienceForm;
