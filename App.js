import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';
import InputField from './Component/InputFields'
import Button from './Component/SubmitButton'
import Paginate from './Component/Table'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ResData: []
    }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
 
  }
  SubmitData = (e) => {
    alert("SubmitData");
  }
  render() {
    return (
      <div className="container">
        <form>
          <InputField label="Name" inputtype="text" name="name" onChange={this.handleChange} id="fields" />
          <InputField label="password" inputtype="password" name="name" onChange={this.handleChange} id="fields" />
          <InputField label="Pancard" inputtype="pan" name="name" onChange={this.handleChange} id="fields" />
          <InputField label="Name" className="ml-4" inputtype="radio" name="gender" value="male" label="male" />
          <InputField label="Name" inputtype="radio" name="gender" value="female" label="female" />
          <InputField label="Mobile No " inputtype="number" id="fields" />
          <InputField label="Green" inputtype="checkbox" field="color" value="Green" />
          
          <Button
            className="btn-success"
            onSubmit={this.SubmitData}
            label="submit"
          />

        </form>
      </div>
    );
  }
}
export default App;