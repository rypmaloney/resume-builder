import React from "react";
import Education from "../Education";
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

                <div className="institution">
                    <div className="edex-title">
                        <h3>School Name</h3>
                        <p>2020-2020</p>
                    </div>

                    <p>
                        In publishing and graphic design, Lorem ipsum is a
                        placeholder text commonly used to demonstrate the visual
                        form of a document or a typeface without relying on
                        meaningful content. Lorem ipsum may be used as a
                        placeholder before final copy is available.
                    </p>
                </div>
                <div className="institution">
                    <div className="edex-title">
                        <h3>School Name</h3>
                        <p>2020-2020</p>
                    </div>

                    <p>
                        In publishing and graphic design, Lorem ipsum is a
                        placeholder text commonly used to demonstrate the visual
                        form of a document or a typeface without relying on
                        meaningful content. Lorem ipsum may be used as a
                        placeholder before final copy is available.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Display;
