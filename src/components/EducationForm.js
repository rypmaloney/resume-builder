import React, { Component } from "react";

class EducationForm extends React.Component {

    
render(){
    const{ clickEd } = this.props.clickEd

    return (
        <div>
            <form onSubmit={clickEd}>
                <label htmlFor="nameInput">Institution:</label>
                <input onChange={this.props.changeEd} type="text" id="institution" /*value={props.institution} *//>
                <br />
                <label htmlFor="address">Date:</label>
                <input onChange={this.props.changeEd} type="text" id="year"  />
                <br />
                <label htmlFor="emailInput">description:</label>
                <input onChange={this.props.changeEd} type="text" id="desc" />
                <br />
                <button type="submit">Submit Ed Info</button>
                {/* Use props.index - create a function that updates education[index] */}
                
                <br />
            </form>
        </div>
    );}
};

export default EducationForm;
