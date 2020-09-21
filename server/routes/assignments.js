const router = require("express").Router();
let Assignment = require("../models/assignment.model");

// returns all assignments
router.route("/").get((req, res) => {
    Assignment.find()
        .then(assignments => res.json(assignments))
        .catch(err => res.status(400).json("Error:" + err));
});

// adding new assignment
router.route("/add").post((req, res) => {
    const subject = req.body.subject;
    const assignment = req.body.assignment;
    const weight = req.body.weight;
    const grade = req.body.grade;
    const dueDate = Date.parse(req.body.dueDate);
    const completed = req.body.completed;

    const newAssignment = new Assignment({
        subject,
        assignment,
        weight,
        grade,
        dueDate,
        completed
    });

    newAssignment.save()
        .then(() => res.json("Assignment added to database"))
        .catch(err => res.status(400).json("Error:" + err));
});

// returning specific assignment
router.route("/:id").get((req, res) => {
    Assignment.findById(req.params.id)
        .then(assignment => res.json(assignment))
        .catch(err => res.status(400).json("Error:" + err));
})

// deleting assignment
router.route("/:id").delete((req, res) => {
    Assignment.findByIdAndDelete(req.params.id)
        .then(() => res.json("Assignment deleted from database"))
        .catch(err => res.status(400).json("Error:" + err));
})

// update assignment
router.route("/update/:id").post((req, res) => {
    Assignment.findById(req.params.id)
        .then(assignment => {
            assignment.subject = req.body.subject;
            assignment.assignment = req.body.assignment;
            assignment.weight = Number(req.body.weight);
            assignment.grade = Number(req.body.grade);
            assignment.dueDate = Date.parse(req.body.dueDate);
            assignment.completed = req.body.completed;

            assignment.save()
                .then(() => res.json("Assignment updated in database"))
                .catch(err => res.status(400).json("Error:" + err));
        })
        .catch(err => res.status(400).json("Error:" + err));
})

module.exports = router;