const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    transmission: { type: String, required: true },
    color: { type: String, required: true },
    id: { type: Number, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    engine: { type: Object, required: true },
    features: { type: Array, required: true },
});

const Services = new model("Service",serviceSchema);
module.exports = Services;