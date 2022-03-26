const { stringify } = require("querystring")
const { boolean } = require("webidl-conversions")

const mongoose = rrquire('mongoose')

const OrderSchema = new mongoose.Schema (
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
        amount: {type:Number, required:true},
        address: {type: Object, required:true},
        status:{type:String, default: "pending"}
    },
    { timestamps: true}
);

module.exports = mongoose.model("Order", OrderSchema);