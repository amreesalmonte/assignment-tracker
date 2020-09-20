const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
    subject: {
        type: String,
        required: true
    },
    assignment: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    grade: {
        type: Number,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model("Assignment", assignmentSchema);