import React from "react";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";


class Form extends React.Component {
    //const { tasks } = props;
    render() {
        const { updateEd } = this.props;
        return (
            <div>
                <h2>Contact information</h2>
                <form onSubmit={this.props.click}>
                    <label htmlFor="name">Name:</label>
                    <input onChange={this.props.change} type="text" id="name" />
                    <br />
                    <label htmlFor="address">City:</label>
                    <input
                        onChange={this.props.change}
                        type="text"
                        id="address"
                    />
                    <br />
                    <label htmlFor="email">Email:</label>
                    <input
                        onChange={this.props.change}
                        type="text"
                        id="email"
                    />

                </form>
                <h2>Education</h2>
                {/* iterate through number of educations to determine forms and input - Uniqid???    */}
                {this.props.education.map((edu, index) => {
                 
                    return (
                        <EducationForm
                            key={edu.id} 
                            clickEd={this.props.clickEd}
                            changeEd={this.props.changeEd}
                            thisEd={this.props.education[index]}
                            index = {index}
                            updateEd= {updateEd}

                        />
                    );
                })}

                {/* USE THIS TO PUT THE CORRECT EDUCATION AS THE FORM VALUE */}

                <button onClick={this.props.addEd}>Add Another Institution</button>
                <h2>Experience</h2>
                {this.props.experience.map((XP, index) => {
                 
                 return (
                     <ExperienceForm
                         key={XP.id} 
                         clickXP={this.props.clickXP}
                         changeXP={this.props.changeXP}
                         thisXP={this.props.experience[index]}
                         index = {index}
                         updateXP= {this.props.updateXP}

                     />
                 );
             })}

             {/* USE THIS TO PUT THE CORRECT EDUCATION AS THE FORM VALUE */}

             <button onClick={this.props.addXP}>Add Another Institution</button>
            </div>
        );
    }
}

export default Form;
