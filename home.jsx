import React, { Component,useState } from "react";
import './home.css';
import axios from 'axios';
var data;
export default class Home extends Component {

  state = {
    details:[],
    email: '',
    city: ''
  }

  click=()=>{
  
    let data ;

    axios.get('http://localhost:8000/')
    .then(res => {
        data = res.data;
        this.setState({
            details : data    
        });
        console.log(data)
    })
    .catch(err => {})
}


  handleChange = event => {
    this.setState({ email: event.target.value });
  }

  handleChange1 = event => {
    this.setState({ city: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    
    axios.post(`http://localhost:8000/`,{
    email: this.state.email,
    city: this.state.city})
      .then(res => {
        console.log("hi");
        console.log(res);
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
        console.error(err.response);
      });
  }

  render() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;
    const city=this.state.city;
    const details= this.state.details;
    return (<div className="Main1">
      <div className="homeMainDiv p-3">
        <form className="" onSubmit={this.handleSubmit}>
          <h1 className="p-3">WEATHER</h1>
          <div className="form-group w-75">
            <label htmlFor="exampleInputEmail1"><h4>Enter your email</h4></label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" onChange={this.handleChange} />
          </div>
          <div className="form-group w-75">
            <label htmlFor="exampleInputPassword1"><h4>Enter your city</h4></label>
            <input type="text" className="form-control" id="exampleInputCity1" placeholder="Mumbai" onChange={this.handleChange1} />
          </div>
          <button className="btn btn-primary" type="submit" onClick={this.click}>Submit</button>
        </form>
        </div>

        <div class="main1">    
      <div class="weather-panel1">
        <div class="p-4">
          <h1>{city}</h1><h2><small>{formattedDate}</small></h2>
          <p class="h3"><i class="mi mi-fw mi-lg mi-rain-heavy"></i>{details['description']}</p>
        </div>
        <div class="temp text-center">
          <div class="temperature">
            <span>{details['temp']}</span>
            <br />
            <small>Pressure: {details['pressure']}</small>
          </div>
    </div>
  </div>
</div>

   
</div>
    )
  }
}

