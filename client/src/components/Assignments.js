import React, { Component } from 'react';

export default class Assignments extends Component {
    render() {
        return (
            <div>
                <div className="Categories">
                    <div className="Subject">SUBJECT</div>
                    <div className="Assignment">ASSIGNMENT</div>
                    <div className="Weight">WEIGHT</div>
                    <div className="Grade">GRADE</div>
                    <div className="Due">DUE</div>
                </div>
            </div>
        );
    }
}