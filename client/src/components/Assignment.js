import React from 'react';

export default (props) => {
    return (
        <div className="AssignmentRow">
            <div className="Subject">{props.assignment.subject}</div>
            <div className="Assignment">{props.assignment.assignment}</div>
            <div className="Weight">{props.assignment.weight}</div>
            <div className="Grade">{props.assignment.grade}</div>
            <div className="Due">{props.assignment.dueDate.substring(0, 10)}</div>
            <button className="Edit" onClick={() => props.deleteAssignment(props.assignment._id)}>E</button>
            <button className="Delete" onClick={() => props.deleteAssignment(props.assignment._id)}>X</button>
        </div>
    )
}
