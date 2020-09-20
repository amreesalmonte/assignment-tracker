import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Navigation extends Component {
    render() {
        return (
            <div className="NavigationBar">
                <h1>ASSIGNMENT TRACKER</h1>
                <div className="LinksContainer">
                    <div className="LinkContainer"><NavLink exact to="/" activeStyle={{ color: "#3B9EE5" }}>ASSIGNMENTS</NavLink></div>
                    <div className="LinkContainer"><NavLink to="/subjects" activeStyle={{ color: "#3B9EE5" }}>SUBJECTS</NavLink></div>
                </div>
            </div>
        );
    }
}