import React from 'react';

export default class Loading extends React.Component {
    render() {
        return (
            <div className="loading"> 
                <h1>Loading Data</h1>
                <div className="loading-block">
                    <div className = "loading-item" />
                    <div className = "loading-item" />
                    <div className="loading-item"/>
                </div>
            </div>
        )
    }
}