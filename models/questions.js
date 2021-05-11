var mongoose = require("mongoose")

var Schema = mongoose.Schema

var QuestionSchema = new Schema({
    qWording: { type: String, required: true, max: 300, required: true, dropDups: true },
    answer: { type: String, required: true, max: 300 },
    roundType: { type: String, required: false, max: 30 },
})

// Export model
module.exports = mongoose.model("Question", QuestionSchema, "questions")
