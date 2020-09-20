const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
    subject: {
        type: String,
        required: true,
    },
    assignment: {
        type: String,
        required: true,
        max: 55
    },
    weight: {
        type: Number,
        required: true,
        max: 5
    },
    grade: {
        type: Number,
        required: true,
        max: 5
    },
    dueDate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model("Assignment", assignmentSchema);