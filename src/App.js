import React from "react";
import "./App.css";
import Contact from "./components/Contact.js";
import Display from "./components/display/Display";
import Education from "./components/Education";
import Experience from "./components/Experience";

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            contact: {
                name: null,
                address: null,
                email: null,
            },
        };
    }

    onSubmitName = (e) => {
        e.preventDefault();
        this.setState({
            contact: {
                name: e.target.nameInput.value,
                address: e.target.addressInput.value,
                email: e.target.emailInput.value,
            },
        });
    };

    render() {
        return (
            <div className="App">
            
              <div className="form">
              <h1>Resume Builder</h1>
                <Contact
                    click={this.onSubmitName}
                    contact={this.state.contact}
                />
                <Education />
                <Experience />
              </div>
              <div className="display">
                <Display contact={this.state.contact} />
              </div>
            </div>
        );
    }
}

export default App;
