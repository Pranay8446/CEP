const mongoose = require("mongoose");

const stopModel = mongoose.Schema({
    stopName : String,
    arrivalTime : String,
    despatureTime : String,
})

const busModel = mongoose.Schema({
    numberPlate : String,
    startPoint : String,
    endPoint : String,
    stopes : [stopModel]
})

module.exports = mongoose.model("Bus" , busModel)