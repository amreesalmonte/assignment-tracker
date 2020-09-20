const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    subject: {
        type: String,
        required: true,
        unique: true,
        trim: true, // removes whitespaces at end
    }
});

module.exports = mongoose.model("Subject", subjectSchema);