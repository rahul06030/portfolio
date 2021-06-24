import './App.css';
import'bootstrap/dist/css/bootstrap.min.css';
import'./components/index.css';
import'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from "react";
import Home from './components/home';


class App extends Component {

 
  render() {
    return (
      <>
      <Home></Home>
      </>
    );
  }
}

export default App;
