import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

    // before application loads
    componentDidMount() {
        this.setState({
            subjects: ["testing12345", "test2"],
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
            <div className="CreateAssignment">
                <div className="Categories">
                    <div className="Subject">SUBJECT</div>
                    <div className="Assignment">ASSIGNMENT</div>
                    <div className="Weight">WEIGHT</div>
                    <div className="Grade">GRADE</div>
                    <div className="Due">DUE</div>
                </div>
                <form onSubmit={this.onSubmit}>
                    <div className="FormContent">
                        <select required
                            className="Subject"
                            value={this.state.subject}
                            onChange={this.onChangeSubject}>
                            {
                                this.state.subjects.map((subject) => {
                                    return <option key={subject} value={subject}>{subject}</option>;
                                })
                            }
                        </select>
                        <input required
                            className="Assignment"
                            type="text"
                            value={this.state.assignment}
                            onChange={this.onChangeAssignment} />
                        <input required
                            className="Weight"
                            type="text"
                            value={this.state.weight}
                            onChange={this.onChangeWeight} />
                        <input required
                            className="Grade"
                            type="text"
                            value={this.state.grade}
                            onChange={this.onChangeGrade} />
                        <DatePicker
                            selected={this.state.dueDate}
                            onChange={this.onChangeDueDate} />
                    </div>
                    <div>
                        <input type="submit"
                            value="ADD ASSIGNMENT"
                            className="Button" />
                    </div>
                </form>
            </div>
        );
    }
}