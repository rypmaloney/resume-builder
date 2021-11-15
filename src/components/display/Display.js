import React from "react";
import "./Display.css"

const Display = (props) => {
    //const { tasks } = props;

    return (
        <div>
                <div className="contact-display">
                    <h1>{props.contact.name}</h1>
                    <div>
                        <p>{props.contact.address}</p>
                        <p>{props.contact.email}</p>
                    </div>
                </div>
                <hr />
                <div className="education-display">
                    <h2>Education</h2>
                    <div className="school">
                        <div className="ed-title">
                            <h3>School Name</h3>
                            <p>2020-2020</p>
                        </div>

                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                    
                    </div>
                </div>
                <hr />
                <div className="education-display">
                    <h2>Education</h2>
                    <div className="school">
                        <div className="edex-title">
                            <h3>School Name</h3>
                            <p>2020-2020</p>
                        </div>

                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                    
                    </div>
                    <div className="school">
                        <div className="ed-title">
                            <h3>School Name</h3>
                            <p>2020-2020</p>
                        </div>

                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                    
                    </div>
                    <div className="school">
                        <div className="ed-title">
                            <h3>School Name</h3>
                            <p>2020-2020</p>
                        </div>

                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                    
                    </div>
                </div>
        </div>
    );
};

export default Display;
