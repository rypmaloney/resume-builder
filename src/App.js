import React from "react";
import "./App.css";
import Form from "./components/Form.js";
import Display from "./components/display/Display";


class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            name: "",
            address: "",
            email: "",
            education: [],
            experience:[],
        };
    }

    onSubmitContact = (e) => {
        e.preventDefault();
        this.setState({
            name: e.target.name.value,
            address: e.target.address.value,
            email: e.target.email.value,
        });
    };

    updateEd = (e, index) => {
        e.preventDefault();

        const eduCopy = this.state.education.slice();
        eduCopy[index] = {
            institution: e.target.institution.value,
            year: e.target.year.value,
            details: e.target.desc.value,
            id: "",
        };
        this.setState({
            education: eduCopy,
        });
    };
    updateXP = (e, index) => {
      e.preventDefault();

      const xpCopy = this.state.experience.slice();
      xpCopy[index] = {
          institution: e.target.institution.value,
          year: e.target.year.value,
          details: e.target.desc.value,
          id: "",
      };
      this.setState({
          experience: xpCopy,
      });
  };

    handleEdChange = (e, index) => {
        let field = e.target.id;
        const eduCopy = this.state.education.slice();
        eduCopy[index][field] = e.target.value;

        this.setState({
            education: eduCopy,
        });
    };
    handleXPChange = (e, index) => {
      let field = e.target.id;
      const xpCopy = this.state.experience.slice();
      xpCopy[index][field] = e.target.value;

      this.setState({
          experience: xpCopy,
      });
  };

    handleChange = (e) => {
        let field = e.target.id;
        this.setState({
            [field]: e.target.value,
        });
    };
    addEd = () => {
        let curEd = this.state.education.slice()
        curEd.push({
            institution: "",
            year: "",
            details: "",
        });

        this.setState({ education: curEd });
    };
    addXP = () => {
      let curXP = this.state.experience.slice()
      curXP.push({
          institution: "",
          year: "",
          details: "",
      });

      this.setState({ experience: curXP });
  };

    render() {
        return (
            <div className="App">
                <div className="form">
                    <h1>Resume Builder</h1>
                    <Form
                        change={this.handleChange}
                        click={this.onSubmit}
                        education={this.state.education}
                        changeEd={this.handleEdChange}
                        updateEd={this.updateEd}
                        addEd = {this.addEd}
                        experience={this.state.experience}
                        changeXP={this.handleXPChange}
                        updateXP={this.updateXP}
                        addXP={this.addXP}
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
