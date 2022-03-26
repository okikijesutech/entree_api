const { stringify } = require("querystring")
const { boolean } = require("webidl-conversions")

const mongoose = rrquire('mongoose')

const CartSchema = new mongoose.Schema (
    {
        userId:{type: String, required: true},
        products:[
            {
                productId:{
                    type:String,
                }, 
                quantity: {
                    type: Number,
                    default: 1,
                },
            },
        ],
    },
    { timestamps: true}
);

module.exports = mongoose.model("Cart", CartSchema);