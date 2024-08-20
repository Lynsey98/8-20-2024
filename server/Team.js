const mongoose = require('mongoose');

const Team = new mongoose.Schema({
    name: String,
    wins: Number,
    losses: Number,
})

module.exports = mongoose.model("Teams", Team)