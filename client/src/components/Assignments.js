import React, { Component } from 'react';
import axios from "axios";

export default class Assignments extends Component {
    constructor(props) {
        super();
    }

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