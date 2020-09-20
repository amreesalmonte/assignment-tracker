const router = require("express").Router();
let Assignment = require("../models/assignment.model");

// returns all assignments
router.route("/").get((req, res) => {
    Assignment.find() // returns a promise
        .then(assignments => res.json(assignments))
        .catch(err => res.status(400).json("Error:" + err));
});

// adding new assignment
router.route("/add").post((req, res) => {
    const subject = req.body.subject;
    const assignment = req.body.assignment;
    const weight = req.body.weight;
    const grade = req.body.grade;
    const date = Date.parse(req.body.date);

    const newAssignment = new Assignment({
        subject,
        assignment,
        weight,
        grade,
        date
    });

    newAssignment.save()
        .then(() => res.json("Assignment added to database"))
        .catch(err => res.status(400).json("Error:" + err));
});

module.exports = router;