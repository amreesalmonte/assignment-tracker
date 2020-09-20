import React, { Component } from 'react';

export default class Subjects extends Component {
    constructor(props) {
        super();

        // this in the functions won't refer to anything if you don't bind
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // initial component state
        this.state = {
            subject: "",
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const assignment = {
            subject: this.state.subject,
            assignment: this.state.assignment,
            weight: this.state.weight,
            grade: this.state.grade,
            dueDate: this.state.dueDate
        }

        // adding to database
        console.log(assignment)
    }
    onChangeSubject(e) {
        this.setState({
            subject: e.target.value
        });
    }
    render() {
        return (
            <div>
                Subjects
            </div>
        );
    }
}