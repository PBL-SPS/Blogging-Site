const mongoose = require("mongoose");

const Blog = mongoose.model(
    "Blog",
    new mongoose.Schema({
        title: {
            type: String,
            required: true,
        },
        poster: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        publishedAt: {
            type: Date,
            default: Date.now(),
        },
    })
);

module.exports = Blog;
