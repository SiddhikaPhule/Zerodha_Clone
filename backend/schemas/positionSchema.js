
const {Schema} = require("mongoose")

const positionSchemas = new Schema(
    {
        Product:String,
        name: String,
        qty: Number,
        avg: Number,
        price: Number,
        net: String,
        day: String,
        isLoss: Boolean,
    }
)
module.exports = {positionSchemas}

