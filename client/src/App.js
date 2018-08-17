import React, { Component } from 'react';
import './App.css';
import {MeasureComponent} from './components/MeasureComponent'
import Header from './components/Header';
import Footer from './components/Footer';
class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    measuresData: []
  };
}

  componentDidMount() {
    fetch('http://127.0.0.1:3001/measures?shoppingChannel=instore')
    .then((response) => {
      response.json().then((data) => {
        console.log(data)
        // remove calculation as it's not a real measure
        data.splice(0,1);
          this.setState({
          measuresData: data
        })
      }) 
      });
  }
  render() {
    return (
      <div className="App">
      <Header />
      <MeasureComponent measures={this.state.measuresData} />
      <Footer />
      </div>
    );
  }
}

export default App;
