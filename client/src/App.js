import React, { Component } from 'react';
import './App.css';
import MeasureComponent from './components/MeasureComponent'
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from "./components/Loading";
import Service from './components/service';
class App extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      measuresData: [],
      loadingData: false,
      isOnlineData: true
    };
    this.service = new Service()
  }

  //update the state once the API call is complete
  updateState = (data) => this.setState({
    measuresData: data,
    loadingData: false,
    isOnlineData: !this.state.isOnlineData
  })
  
  componentDidMount() {
  this.requestData()
  }

  // call the API, once the promise is complete update the state
  requestData() {
    this.setState({
      loadingData: true
    })
    this.service.dataRequest(this.state.isOnlineData, this.updateState)
  }

  //switch between Loading and Data to show
  dataRender() {
    if(this.state.loadingData){
      return <Loading />
    } else {
      return (
        <div>
          {this.renderButton()}
          <MeasureComponent measures = { this.state.measuresData } />
        </div>
        )
    }
  }
  renderButton() {
   return( 
    <div className="data-info">
      These are { this.toggle(this.state.isOnlineData)} measures  
      < button className="button" onClick = {() => this.requestData()} >
         Switch to { this.toggle(!this.state.isOnlineData) }
      </button>
    </div>
    )}

  toggle (isOnlineData) {
    return isOnlineData ? "Online" : "In store";
  }
  render() {
    return ( 
      <div className = "App" >
        <Header />
        {this.dataRender()} 
        <Footer />
      </div>
    );
  }
}

export default App;