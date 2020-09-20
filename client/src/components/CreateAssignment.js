import React, { Component } from 'react';

export default class CreateAssignment extends Component {
    constructor(props) {
        super();

        // this in the functions won't refer to anything if you don't bind
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangeAssignment = this.onChangeAssignment.bind(this);
        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onChangeGrade = this.onChangeGrade.bind(this);
        this.onChangeDueDate = this.onChangeDueDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // initial component state
        this.state = {
            subject: "",
            assignment: "",
            weight: 0,
            grade: 0,
            dueDate: new Date(),
            subjects: []
        }
    }

    componentDidMount() {
        this.setState({
            subjects: ["test1", "test2"],
            subject: "test"
        })
    }

    onChangeSubject(e) {
        this.setState({
            subject: e.target.value
        });
    }

    onChangeAssignment(e) {
        this.setState({
            assignment: e.target.value
        });
    }

    onChangeWeight(e) {
        this.setState({
            weight: e.target.value
        });
    }

    onChangeGrade(e) {
        this.setState({
            grade: e.target.value
        });
    }

    onChangeDueDate(date) {
        this.setState({
            dueDate: date
        });
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

    render() {
        return (
            <div>
                CreateAssignments
            </div>
        );
    }
}