import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Navigation extends Component {
    render() {
        return (
            <div className="Navigation">
                <div className="LinkContainer"><NavLink exact to="/" activeStyle={{ color: "#3B9EE5" }}>ASSIGNMENTS</NavLink></div>
                <div className="LinkContainer"><NavLink to="/create" activeStyle={{ color: "#3B9EE5" }}>ADD ASSIGNMENT</NavLink></div>
                <div className="LinkContainer"><NavLink to="/subject" activeStyle={{ color: "#3B9EE5" }}>SUBJECTS</NavLink></div>
            </div>
        );
    }
}