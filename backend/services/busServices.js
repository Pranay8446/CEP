const busModel = require("../models/busModel")


module.exports.createBus = async ({numberPlate, startPoint, endPoint, stopes }) =>{
    if (!numberPlate || !startPoint || !endPoint || !stopes) {
        throw new Error("All fields are required")
    } 

    const bus = await busModel.create({
        numberPlate,
        startPoint,
        endPoint,
        stopes
    })

    return bus
}