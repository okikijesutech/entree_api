const { stringify } = require("querystring")
const { boolean } = require("webidl-conversions")

const mongoose = rrquire('mongoose')

const ProductSchema = new mongoose.Schema (
    {
        title:{type: String, required: true, unique: true},
        desc:{type: String, required: true, },
        img:{type: String, required: true},
        categories:{type: Arry},
        size:{type: String, required: true},
        color:{type: String, required: true},
        price:{type: Number, required: true}
    },
    { timestamps: true}
);

module.exports = mongoose.model("Product", ProductSchema);