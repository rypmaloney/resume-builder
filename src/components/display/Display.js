import React from "react";
import Education from "../Education";
import Experience from "../Experience";
import "./Display.css";

const Display = (props) => {
    const { state } = props;

    return (
        <div>
            <div className="contact-display">
                <h1>{state.name}</h1>
                <div>
                    <p>{state.address}</p>
                    <p>{state.email}</p>
                </div>
            </div>
            <hr />
            <div className="edex-display">
                <h2>Education</h2>
                {state.education.map((edu) => {
                    return <Education key={edu.id} school={edu} />
                })}

            </div>
            <hr />
            <div className="edex-display">
                <h2>Experience</h2>

                {state.experience.map((edu) => {
                    return <Experience key={edu.id}experience={edu} />
                })}

            </div>
        </div>
    );
};

export default Display;
