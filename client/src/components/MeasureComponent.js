import React from 'react';
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
export class MeasureComponent extends React.Component {
  
  
  render() {
    return (
      <div>
    {this.props.measures.map(measure => (
      <div className="station" key={measure.id}>{measure.caption}</div>
    ))} 
      <div>{this.props.measures.caption}</div>
        hey tu sei un component!!!
      </div>
    );
  }
};