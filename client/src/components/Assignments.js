import React, { Component } from 'react';
import axios from "axios";

import Assignment from "./Assignment";
import CreateAssignment from './CreateAssignment';

export default class Assignments extends Component {
    constructor(props) {
        super();

        this.deleteAssignment = this.deleteAssignment.bind(this)
        this.onChangeAssignments = this.onChangeAssignments.bind(this)

        this.state = {
            assignments: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/assignments/")
            .then(res => {
                this.setState({ assignments: res.data })
            })
            .catch((err) => { console.log(err) });
    }

    onChangeAssignments() {
        console.log("changing assignment")
        axios.get("http://localhost:5000/assignments/")
            .then(res => {
                this.setState({ assignments: res.data })
            })
            .catch((err) => { console.log(err) });
    }


    deleteAssignment(id) {
        axios.delete("http://localhost:5000/assignments/" + id)
            .then(res => console.log(res.data));
        this.setState({
            // filter only returns the id not corresponding to deleted id
            assignments: this.state.assignments.filter(el => el._id !== id)
        })
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
                    <div className="EditPlaceholder"></div>
                    <div className="DeletePlaceholder"></div>
                </div>
                {this.state.assignments.map((assignment) => {
                    return (
                        <Assignment assignment={assignment} deleteAssignment={this.deleteAssignment} key={assignment._id} />
                    );
                })}
                <CreateAssignment onChangeAssignments={this.onChangeAssignments} />
            </div>
        );
    }
}