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
            education: [
                {
                    institution: "New University",
                    year: "2013",
                    details:
                        "Lorem ipsum baby Lorem ipsum baby Lorem ipsum babyLorem ipsum baby Lorem ipsum baby Lorem ipsum baby Lorem ipsum baby Lorem ipsum baby",
                },
                {
                    institution: "Univeristy of Massachusetts, Amherst",
                    year: "2016",
                    details:
                        "Lorem ipsum baby Lorem ipsum baby Lorem ipsum baby Lorem ipsum baby v Lorem ipsum baby Lorem ipsum baby v v Lorem ipsum baby",
                },
            ],
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
    onSubmitEd = (e, index) => {
        e.preventDefault();
        let educopy = this.state.education
        educopy = {
          institution: e.target.institution.value,
          year: e.target.year.value,
          details: e.target.desc.value,
          id: '',

          }

          console.log(index, educopy)
        // this.setState({
        //   education: educopy,
        
        // });
       

    };
      updateEd = (index) => {
  
        console.log(index)
      // this.setState({
      //   education: educopy,
      
      // });
     

  };

    handleEdChange = (e) => {
        let field = e.target.id;
        let curEd = `education`

        this.setState({
            curEd: [
                {
                    [field]: e.target.value,
                },
            ],
        });

    };

    handleChange = (e) => {
        let field = e.target.id;
        this.setState({
            [field]: e.target.value,
        });
    }


    render() {
        return (
            <div className="App">
                <div className="form">
                    <h1>Resume Builder</h1>
                    <Form
                        change={this.handleChange}
                        click={this.onSubmit}
                        education={this.state.education}
                        clickEd={this.onSubmitEd}
                        changeEd={this.handleEdChange}
                        updateEd={this.updateEd}
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
