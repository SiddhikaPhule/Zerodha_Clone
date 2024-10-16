const {model, Model } = require("mongoose")

const {holdingSchemas} = require("../schemas/HoldingSchema")

const holdingModel = new model("holding", holdingSchemas);

module.exports={holdingModel};