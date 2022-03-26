const { stringify } = require("querystring")
const { boolean } = require("webidl-conversions")

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema (
    {
        username:{type: String, required: true, unique: true},
        email:{type: String, required: true, unique: true},
        password:{type: String, required: true},
        isAdmin: {
            type: Boolean,
            defualt: false,
        },
    },
    { timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);