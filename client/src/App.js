import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {MeasureComponent} from './components/MeasureComponent'

// {
//   "$id": "1",
//   "canOrderBy": false,
//   "caption": "Calculation",
//   "cells": [{
//     "$id": "2",
//     "value": "Real Value",
//     "type": "string",
//     "formattedValue": "Real Value",
//     "rawValue": "Real Value",
//     "formatString": null
//   }],
//   "formattedCaption": "Calculation",
//   "levelCaption": null,
//   "formattedLevelCaption": null,
//   "columnType": "DimensionMember"
// },
class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    fetched: []
  };
}

  componentDidMount() {
    fetch('http://127.0.0.1:3001/measures?shoppingChannel=instore')
    .then((response) => {
      response.json().then((data) => {
        console.log(data)
          this.setState({
          fetched: data
        })
      }) 
      });
  }
  render() {
    return (
      <div className="App">
      <MeasureComponent measures={this.state.fetched} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
