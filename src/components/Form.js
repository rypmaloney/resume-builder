import React from "react";
import Education from "./Education";
import EducationForm from "./EducationForm";

class Form extends React.Component {
    //const { tasks } = props;
    render() {
        const { updateEd } = this.props
        return (
            <div>
                <h2>Contact information</h2>
                <form onSubmit={this.props.click}>
                    <label htmlFor="name">Name:</label>
                    <input onChange={this.props.change} type="text" id="name" />
                    <br />
                    <label htmlFor="address">City:</label>
                    <input onChange={this.props.change} type="text" id="address" />
                    <br />
                    <label htmlFor="email">Email:</label>
                    <input onChange={this.props.change} type="text" id="email" />
                    <br />
                    <button type="submit">Submit Contact Info</button>
                    <br />
                </form>
                <h2>Education</h2>
                {/* iterate through number of educations to determine forms and input - Uniqid???    */}
                <EducationForm
                    clickEd={this.props.clickEd}
                    changeEd={this.props.changeEd}
                />
                {this.props.education.map((edu,index) => {
                    return <button onClick= {()=>updateEd(index)}>Edit {edu.institution}</button>;
                    
                })}

                <button>Add Another Institution</button>
                <h2>Experience</h2>
                <form onSubmit={this.props.click}>
                    <label htmlFor="nameInput">Name:</label>
                    <input type="text" id="nameInput" />
                    <br />
                    <label htmlFor="addressInput">City:</label>
                    <input type="text" id="addressInput" />
                    <br />
                    <label htmlFor="emailInput">Email:</label>
                    <input type="text" id="emailInput" />
                    <br />
                    <button type="submit">Submit XP Info</button>
                    <button>Add Another Job</button>
                    <br />
                </form>
            </div>
        );
    }
}

export default Form;
