const mongoose = require("mongoose");

const pizzaSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    variants: [],
    store: {
        type: String,
        required: true
    },
    prices: [],
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true })

const pizzaModel = mongoose.model('pizza', pizzaSchema)
module.exports = pizzaModel;