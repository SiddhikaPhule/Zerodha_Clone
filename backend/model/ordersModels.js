const {model, Model } = require("mongoose")

const {orderSchemas} = require("../schemas/orderSschema")

const ordersModel = new model("order", orderSchemas);

module.exports={ordersModel};