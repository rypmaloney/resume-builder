import React from "react";

const Experience = (props) => {
    //const { tasks } = props;

    return (
        <div>
            <div className="institution">
                <div className="edex-title">
                    <h3>{props.work.institution}</h3>
                    <p>{props.work.year}</p>
                </div>

                <p>{props.work.details}</p>
            </div>
        </div>
    );
};

export default Experience;
