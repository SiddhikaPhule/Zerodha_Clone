const {model, Model } = require("mongoose")

const {positionSchemas} = require("../schemas/positionSchema")

const positionModel = new model("position", positionSchemas);

module.exports={positionModel};