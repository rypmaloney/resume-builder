import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";

const Form = (props) => {
    const {
        click,
        updateEd,
        change,
        education,
        changeEd,
        addEd,
        experience,
        changeXP,
        updateXP,
        addXP,
    } = props;
    return (
        <div>
            <h2>Contact information</h2>
            <form onSubmit={click}>
                <label htmlFor="name">Name:</label>
                <input onChange={change} type="text" id="name" />
                <br />
                <label htmlFor="address">City:</label>
                <input onChange={change} type="text" id="address" />
                <br />
                <label htmlFor="email">Email:</label>
                <input onChange={change} type="text" id="email" />
            </form>
            <h2>Education</h2>
            {/* iterate through number of educations to determine forms and input - Uniqid???    */}
            {education.map((edu, index) => {
                return (
                    <EducationForm
                        key={edu.id}
                        changeEd={changeEd}
                        thisEd={education[index]}
                        index={index}
                        updateEd={updateEd}
                    />
                );
            })}

            {/* USE THIS TO PUT THE CORRECT EDUCATION AS THE FORM VALUE */}

            <button onClick={addEd}>Add Another Institution</button>
            <h2>Experience</h2>
            {experience.map((XP, index) => {
                return (
                    <ExperienceForm
                        key={XP.id}
                        changeXP={changeXP}
                        thisXP={experience[index]}
                        index={index}
                        updateXP={updateXP}
                    />
                );
            })}

            {/* USE THIS TO PUT THE CORRECT EDUCATION AS THE FORM VALUE */}

            <button onClick={addXP}>Add Another Institution</button>
        </div>
    );
};

export default Form;
