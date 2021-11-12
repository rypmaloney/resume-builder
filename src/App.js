import React from "react";
import "./App.css";
import Contact from "./components/Contact.js";

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
            <div>
                <Contact click={this.onSubmitName} contact={this.state.contact} />
                <p>The start of something</p>
            </div>
        );
    }
}

export default App;
