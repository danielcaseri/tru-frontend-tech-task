import React from 'react';
import { Line } from 'rc-progress';

export default class MeasureComponent extends React.Component {

  backgroundColor(specColor) {
    let className = "measureCard "
    switch (specColor) {
      case "Experience":  
      className += "experienceColor";
       break;
      case "Product":
        className += "productColor";
        break;
      case "Recommend":
        className += "recommendColor";
        break;
      case "Service":
        className += "serviceColor";
        break;
      case "Ease of Use":
        className += "serviceColor";
        break;
        case "Value":
          className += "valueColor";
          break;
      default: 
        break;
    }
    return className;
  }

  barColor(num) {
    if(num < 6) {
      return "#FF5C5C"
    } else if( num < 7 ){
      return "#F5B31F"
    } else 
      return "#62DDA9"
  }

  barPercentage(rate) {
    let percentageValue= rate*100/9;
    return percentageValue>100 ? 100 : percentageValue
  }
  renderBar(rate) {
    return (
      < Line percent = { this.barPercentage(rate) }
        strokeWidth = "3"
        trailWidth = "3"
        strokeColor = {this.barColor(rate)}
      />
    )
  }
renderRateValue(rate, name) {
  rate = rate >9 ? 9 : rate
  if(rate) {
    return (
      <div className="rate">  
        <span className="rate-number">{rate} </span> out of 9
      </div>
    )
  } 
  else {
    return (
      <div className="rate">  
      <span> No data for {name} yet </span>
      </div>
    )
  }

}
  render() {
    return (
      <div className="measure-body">
        {this.props.measures.map(measure => (
          <div className= {this.backgroundColor(measure.caption)} key={measure.$id}>
            <div className= "title" >
              {measure.caption}
            </div>
            {this.renderBar(measure.cells["0"].value)}
            {this.renderRateValue(measure.cells["0"].value, measure.caption)}
          </div>
        ))} 
      </div>
    );
  }
};