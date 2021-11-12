import React from "react";
import "./App.css";
import Contact from "./components/Contact.js";

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            contact: {
                name: null,
            },
        };
    }

    onSubmitName = (e) => {
      e.preventDefault();
      this.setState({
        contact: {
          name: e.target.value,
      },
      });
    };


    render() {
        return (
            <div>
                <Contact click={this.onSubmitName} name={this.state.contact.name} />
                <p>The start of something</p>
            </div>
        );
    }
}

export default App;
