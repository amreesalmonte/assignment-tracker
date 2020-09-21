import React, { Component } from 'react';
import axios from "axios";

import Assignment from "./Assignment";
import CreateAssignment from "./CreateAssignment";

export default class ViewList extends Component {
    constructor(props) {
        super();

        this.onChangeAssignments = this.onChangeAssignments.bind(this)
        this.deleteAssignment = this.deleteAssignment.bind(this)
        this.checkAssignment = this.checkAssignment.bind(this)

        this.state = {
            assignments: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/assignments/")
            .then(res => {
                this.setState({
                    assignments: res.data.sort((a, b) => {
                        return new Date(a.dueDate).getTime() -
                            new Date(b.dueDate).getTime()
                    }).filter(el => el.completed === this.props.assignmentStatus)
                })
            })
            .catch((err) => { console.log(err) });
    }

    onChangeAssignments() {
        // new assignments array
        axios.get("http://localhost:5000/assignments/")
            .then(res => {
                this.setState({
                    // sorting by date and filtering to only show unfinished assignments
                    assignments: res.data.sort((a, b) => {
                        return new Date(a.dueDate).getTime() -
                            new Date(b.dueDate).getTime()
                    }).filter(el => el.completed === this.props.assignmentStatus)
                })
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

    checkAssignment(assignment) {
        const newAssignment = {
            subject: assignment.subject,
            assignment: assignment.assignment,
            weight: Number(assignment.weight),
            grade: Number(assignment.grade),
            dueDate: assignment.dueDate,
            completed: !assignment.completed
        }

        console.log(assignment)

        // updating database
        axios.post('http://localhost:5000/assignments/update/' + assignment._id, newAssignment)
            .then(res => {
                console.log(res.data)
                this.onChangeAssignments() // call to trigger state change in assigments
            })
            .catch((err) => { console.log(err) })
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
                    <div className="CheckPlaceholder"></div>
                </div>
                <div className="AssignmentList">
                    {this.state.assignments.map((assignment) => {
                        return (
                            <Assignment assignment={assignment} deleteAssignment={this.deleteAssignment} checkAssignment={this.checkAssignment} key={assignment._id} checkType={this.props.checkType} />
                        );
                    })}
                </div>
                <CreateAssignment onChangeAssignments={this.onChangeAssignments} />
            </div>
        );
    }
}