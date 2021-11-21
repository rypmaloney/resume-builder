import React from "react";
import Education from "./Education";
import EducationForm from "./EducationForm";

const Form = (props) => {
    //const { tasks } = props;

    return (
        <div>
            <h2>Contact information</h2>
            <form onSubmit={props.click}>
                <label htmlFor="name">Name:</label>
                <input onChange={props.change} type="text" id="name" />
                <br />
                <label htmlFor="address">City:</label>
                <input onChange={props.change} type="text" id="address" />
                <br />
                <label htmlFor="email">Email:</label>
                <input onChange={props.change} type="text" id="email" />
                <br />
                <button type="submit">Submit Contact Info</button>
                <br />
            </form>
            <h2>Education</h2>
            {/* iterate through number of educations to determine forms and input - Uniqid???    */}
            {props.education.map((edu,index) => {
                console.log(props.education[index])
                return (
                    <EducationForm
                        clickEd={props.clickEd}
                        changeEd={props.changeEd}
                        state={props.state}
                        institution={props.education[index].institution}
                        year={props.education[index].year}
                        desc={props.education[index].details}
                        index={index}
                    />
                )
                index+=1;
                
            })}

            <button>Add Another Institution</button>
            <h2>Experience</h2>
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
                <button type="submit">Submit XP Info</button>
                <button>Add Another Job</button>
                <br />
            </form>
        </div>
    );
};

export default Form;
