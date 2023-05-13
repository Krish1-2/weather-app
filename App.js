import './App.css';
import axios from 'axios';
import Home from './home/home'
import React from 'react';
class App extends React.Component {


  render() { 
  return (
    <div className="App ">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>
  <Home/>
    </div>
  );
  }
}

export default App;
