import React from 'react';
import { Link } from "react-router-dom";

export default (props) => {
    return (
        <div className="AssignmentRow">
            <div className="Subject">{props.assignment.subject}</div>
            <div className="Assignment">{props.assignment.assignment}</div>
            <div className="Weight">{props.assignment.weight}%</div>
            <div className="Grade">{props.assignment.grade}%</div>
            <div className="Due">{props.assignment.dueDate.substring(0, 10)}</div>
            <button className="Edit"><Link to={"/edit/" + props.assignment._id}>✎</Link></button>
            <button className="Delete" onClick={() => props.deleteAssignment(props.assignment._id)}>X</button>
            <button className={props.checkType} onClick={() => props.checkAssignment(props.assignment)}>O</button>
        </div>
    )
}
