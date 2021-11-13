import React from "react";
import "./App.css";
import Contact from "./components/Contact.js";
import ContactDisplay from "./components/display/ContactDisplay";
import Education from "./components/Education";

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
              </div>
              <div className="display">
                <ContactDisplay contact={this.state.contact} />
                <hr></hr>
              </div>
            </div>
        );
    }
}

export default App;
