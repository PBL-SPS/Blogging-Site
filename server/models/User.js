// create a mongoose user model with the fields name, username and password

const mongoose = require("mongoose");

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        name: String,
        username: String,
        password: String,
    })
);

module.exports = User;
