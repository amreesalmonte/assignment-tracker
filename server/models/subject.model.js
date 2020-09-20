const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    subject: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        max: 12 // removes whitespaces at end
    }
});

module.exports = mongoose.model("Subject", subjectSchema);