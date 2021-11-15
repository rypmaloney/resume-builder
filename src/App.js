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
                name: "Ryan Maloney",
                address: "Boston, MA",
                email: "rypmaloney@gmail.com",
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

    handleChange = (e) => {
      console.log(e.target.value)
      this.setState({
        contact: {
          name: e.target.value,

      },
      });

    }

    render() {
        return (
            <div className="App">
            
              <div className="form">
              <h1>Resume Builder</h1>
                <Contact
                    change={this.handleChange}
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
