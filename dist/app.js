"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testingRouter = exports.postsRouter = exports.blogsRouter = exports.startRouter = void 0;
const express_1 = require("express");
const blogsRepository_1 = require("./repositiries/blogsRepository");
const postsRepository_1 = require("./repositiries/postsRepository");
const middleware_1 = require("./middleware");
exports.startRouter = (0, express_1.Router)({});
exports.blogsRouter = (0, express_1.Router)({});
exports.postsRouter = (0, express_1.Router)({});
exports.testingRouter = (0, express_1.Router)({});
//BLOG  LOGIC
exports.startRouter.get("/", (req, res) => {
    res.status(200).send("API started");
});
exports.blogsRouter.get("/", (req, res) => {
    const result = (0, blogsRepository_1.getAllBlogs)();
    res.status(200).send(result);
});
exports.blogsRouter.post("/", middleware_1.basicAuthGuardMiddleware, middleware_1.createBlogBodyValidator, (req, res) => {
    const result = (0, blogsRepository_1.createBlog)(req.body);
    res.send(result).status(201);
});
exports.blogsRouter.get("/:id", (req, res) => {
    const result = (0, blogsRepository_1.readBlogByID)(req.params.id);
    if (result) {
        res.status(200).send(result);
    }
    else {
        res.sendStatus(404);
    }
});
exports.blogsRouter.put("/:id", middleware_1.basicAuthGuardMiddleware, middleware_1.readBlogIDValidator, (req, res) => {
    const result = (0, blogsRepository_1.readBlogByID)(req.params.id.toString());
    if (result) {
        const index = blogsRepository_1.blogs.indexOf(result);
        blogsRepository_1.blogs[index].name = req.body.name;
        blogsRepository_1.blogs[index].description = req.body.description;
        blogsRepository_1.blogs[index].websiteUrl = req.body.websiteUrl;
        res.status(204).send(blogsRepository_1.blogs[index]);
    }
    else {
        res.sendStatus(404);
    }
});
exports.blogsRouter.delete("/:id", middleware_1.basicAuthGuardMiddleware, (req, res) => {
    const result = (0, blogsRepository_1.deleteBlogByID)(req.params.id.toString());
    if (result) {
        res.status(204).send(result);
    }
    else {
        res.sendStatus(404);
    }
});
//POST LOGIC
exports.postsRouter.get("/", (req, res) => {
    const result = (0, postsRepository_1.getAllPosts)();
    res.send(result).status(204);
});
exports.postsRouter.post("/", middleware_1.basicAuthGuardMiddleware, middleware_1.createPostBodyValidator, (req, res) => {
    const result = (0, postsRepository_1.createPosts)(req.body);
    res.status(201).send(result);
});
exports.postsRouter.get("/:id", (req, res) => {
    const result = (0, postsRepository_1.readPostByID)(req.params.id);
    if (result) {
        res.status(200).send(result);
    }
    else {
        res.sendStatus(404);
    }
});
exports.postsRouter.put("/:id", middleware_1.basicAuthGuardMiddleware, (req, res) => {
});
exports.postsRouter.delete("/:id", middleware_1.basicAuthGuardMiddleware, (req, res) => {
});
exports.testingRouter.delete("/", (req, res) => {
    (0, blogsRepository_1.deleteAllBlogsData)();
    (0, postsRepository_1.deleteAllPostsData)();
    res.sendStatus(204);
});
