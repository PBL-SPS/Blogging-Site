var express = require("express");
const fs = require("fs/promises");
const path = require("path");
const restErrors = require("restify-errors");
const authenticateToken = require("../middlewares/authenticate");
const blogMulter = require("../middlewares/blogMulter");
const Blog = require("../models/Blog");
const User = require("../models/User");
var router = express.Router();

router.get("/", async function (req, res, next) {
    try {
        const blogs = await Blog.find();
        res.send(blogs);
    } catch (error) {
        next(error);
    }
});

router.get("/:blogId", async function (req, res, next) {
    try {
        const blog = await Blog.findById(req.params.blogId);
        res.send(blog);
    } catch (error) {
        next(error);
    }
});

// delete blog
router.delete("/:blogId", authenticateToken, async function (req, res, next) {
    try {
        const blog = await Blog.findById(req.params.blogId);
        await fs.unlink(path.join(__dirname, "../public", blog.poster));
        await blog.remove();
        res.send(blog);
    } catch (error) {
        next(error);
    }
});

// edit blog
router.put(
    "/:blogId",
    authenticateToken,
    blogMulter,
    async function (req, res, next) {
        try {
            let blog = await Blog.findById(req.params.blogId);
            // console.log(blog)
            if (!blog) throw new restErrors.NotFoundError("Blog not found");
            if (req.body?.poster) {
                if (
                    await fs
                        .access(path.join(__dirname, "../public", blog.poster))
                        .then(() => true)
                        .catch(() => false)
                ) {
                    await fs.unlink(
                        path.join(__dirname, "../public", blog.poster)
                    );
                }
            }
            await blog.update(req.body);
            blog = await Blog.findById(req.params.blogId);
            res.send(blog);
        } catch (error) {
            next(error);
        }
    }
);

// create blog
router.post(
    "/",
    authenticateToken,
    blogMulter,
    async function (req, res, next) {
        try {
            const blog = new Blog({
                title: req.body.title,
                poster: req.body.poster,
                content: req.body.content,
            });
            await blog.save();
            res.send(blog);
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router;
