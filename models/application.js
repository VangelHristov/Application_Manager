const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-type-email");

const userSchema = new Schema({
    name                       : {
        type    : String,
        required: "Name is required."
    },
    email                      : {
        type    : mongoose.SchemaTypes.Email,
        required: "Email address is required.",
        match:[/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Please enter a valid email address."]
    },
    age                        : {
        type    : Number,
        required: "Age is required",
        min     : 1,
        max     : 100
    },
    phone                      : {
        type    : String,
        required: "Phone number is required",
        match   : [/^\+?(00[0-9]{1,3})?(\d{6,12})$/, "Please enter a valid phone number."]
    },
    preferredWayOfCommunication: {
        type    : String,
        enum    : ["Email", "Phone"],
        required: "Preferred way of communication is required."
    },
    englishLevel               : {
        type    : String,
        enum    : ["Fluent", "Intermediate", "Beginner"],
        required: "English level is required."
    },
    availableToStart           : {
        type    : String,
        required: "Available to start is required."
    },
    technicalSkills            : {
        type: String
    },
    shortPersonalPresentation  : {
        type: String
    },
    studyFromHome              : {
        type: Boolean
    }
});

const beautifulValidationErrors = require("mongoose-beautiful-unique-validation");

userSchema.plugin(beautifulValidationErrors);

module.exports = userSchema;