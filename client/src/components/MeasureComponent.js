import React from 'react';
import { Line } from 'rc-progress';

export class MeasureComponent extends React.Component {

  colorTitle(title) {
    let className = "title "
    switch (title) {
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
        case "Value":
          className += "valueColor";
          break;
      default: 
        break;
    }
    return className;
  }
barColor(rate) {
  let num = parseFloat(rate);
if(num < 6) {
  return "#FF5C5C"
} else if( num < 7 ){
  return "#F5B31F"
} else 
  return "#62DDA9"
}
barPercentage(rate) {
  let percentageValue= rate*100/9;
  return percentageValue
}
  render() {
    return (
      <div className="measure-body">
        {this.props.measures.map(measure => (
          <div className="measureCard" key={measure.$id}>
            <div className= {this.colorTitle(measure.caption)} >
              {measure.caption}
            </div>
           < Line percent = { this.barPercentage(measure.cells["0"].formattedValue) }
              strokeWidth = "1"
              strokeColor = {this.barColor(measure.cells["0"].formattedValue)}
            />
            <div className="rate"> 
              {measure.cells["0"].formattedValue} out of 9
            </div>
          </div>
        ))} 
      </div>
    );
  }
};