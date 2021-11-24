import React from "react";
import Education from "../Education";
import Experience from "../Experience";
import "./Display.css";

const Display = (props) => {
    //const { tasks } = props;

    return (
        <div>
            <div className="contact-display">
                <h1>{props.state.name}</h1>
                <div>
                    <p>{props.state.address}</p>
                    <p>{props.state.email}</p>
                </div>
            </div>
            <hr />
            <div className="edex-display">
                <h2>Education</h2>
                {props.state.education.map((edu) => {
                    return <Education school={edu} />
                })}

            </div>
            <hr />
            <div className="edex-display">
                <h2>Experience</h2>

                {props.state.experience.map((edu) => {
                    return <Experience experience={edu} />
                })}

            </div>
        </div>
    );
};

export default Display;
