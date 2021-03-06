import React, { Component } from 'react';
import axios from "axios";

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

        const subject = {
            subject: this.state.subject,
        }

        console.log(subject)

        // adding to database
        axios.post('http://localhost:5000/subjects/add', subject)
            .then(res => console.log(res.data))
            .catch((err) => { console.log(err) })

        // makes input fields empty again
        this.setState({
            subject: ""
        })
    }

    onChangeSubject(e) {
        this.setState({
            subject: e.target.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="FormContent">
                        <input required
                            className="SubjectForm"
                            type="text"
                            value={this.state.subject}
                            onChange={this.onChangeSubject}
                            maxLength="12"
                            placeholder="SUBJECT" />
                    </div>
                    <div className="subjectSubmit">
                        <input type="submit"
                            value="ADD SUBJECT"
                            className="Button" />
                    </div>
                </form>
            </div>
        );
    }
}