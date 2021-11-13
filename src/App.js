import React from "react";
import "./App.css";
import Contact from "./components/Contact.js";
import ContactDisplay from "./components/display/ContactDisplay";

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
                
                <Contact
                    click={this.onSubmitName}
                    contact={this.state.contact}
                />
                
                  <ContactDisplay contact={this.state.contact} />
                
            </div>
        );
    }
}

export default App;
