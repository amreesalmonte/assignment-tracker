const router = require("express").Router();
let Subject = require("../models/subject.model");

// returns all subjects
router.route("/").get((req, res) => {
    Subject.find() // returns a promise
        .then(subjects => res.json(subjects))
        .catch(err => res.status(400).json("Error:" + err));
});

// adding new subject
router.route("/add").post((req, res) => {
    const subject = req.body.subject;
    const newSubject = new Subject({ subject });

    newSubject.save()
        .then(() => res.json("Subject added to database"))
        .catch(err => res.status(400).json("Error:" + err));
});

module.exports = router;