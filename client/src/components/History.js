import React, { Component } from 'react';

import ViewList from "./ViewList";

export default class Assignments extends Component {
    render() {
        return (
            <div>
                <ViewList assignmentStatus={true} checkType="Complete" />
            </div>
        );
    }
}