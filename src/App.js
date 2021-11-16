import React from "react";
import "./App.css";
import Form from "./components/Form.js";
import Display from "./components/display/Display";
import Education from "./components/Education";
import Experience from "./components/Experience";

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            name: "Ryan Maloney",
            address: "Boston, MA",
            email: "rypmaloney@gmail.com",
            education:[
              {
                institution: "New University",
                year: "2013",
                details: "Lorem ipsum baby"
              },
              {
                institution: "Univeristy of Massachusetts, Amherst",
                year: "201",
                details: "Lorem ipsum baby"
              }
            ]
        };
    }

    onSubmitName = (e) => {
        e.preventDefault();
        this.setState({
            name: e.target.name.value,
            address: e.target.address.value,
            email: e.target.email.value,
        });
    };

    handleChange = (e) => {
        console.log(e.target.id);
        let field = e.target.id;
        this.setState({
            [field]: e.target.value,
        });
    };

    render() {
        return (
            <div className="App">
                <div className="form">
                    <h1>Resume Builder</h1>
                    <Form
                        change={this.handleChange}
                        click={this.onSubmitName}
                        contact={this.state.contact}
                    />
                   
                </div>
                <div className="display">
                    <Display state={this.state} />
                </div>
            </div>
        );
    }
}

export default App;
