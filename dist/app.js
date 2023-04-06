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
exports.startRouter.get("/", (req, res) => {
    res.status(200).send("API started");
});
exports.blogsRouter.get("/", (req, res) => {
    const result = (0, blogsRepository_1.getAllBlogs)();
    res.status(200).send(result);
});
exports.blogsRouter.post("/", middleware_1.basicAuthGuardMiddleware, middleware_1.createBlogBodyValidator, (req, res) => {
    const result = (0, blogsRepository_1.createBlog)(req.body);
    res.send(result).status(200);
});
exports.blogsRouter.get("/:id", (req, res) => {
    if ((0, blogsRepository_1.readBlogByID)(req.params.id)) {
        res.status;
    }
});
exports.blogsRouter.put("/:id", middleware_1.basicAuthGuardMiddleware, (req, res) => {
});
exports.blogsRouter.delete("/:id", middleware_1.basicAuthGuardMiddleware, (req, res) => {
});
exports.postsRouter.get("/", (req, res) => {
});
exports.postsRouter.post("/", middleware_1.basicAuthGuardMiddleware, (req, res) => {
});
exports.postsRouter.get("/:id", (req, res) => {
});
exports.postsRouter.put("/:id", middleware_1.basicAuthGuardMiddleware, (req, res) => {
});
exports.postsRouter.delete("/:id", middleware_1.basicAuthGuardMiddleware, (req, res) => {
});
exports.testingRouter.delete("/", middleware_1.basicAuthGuardMiddleware, (req, res) => {
    (0, blogsRepository_1.deleteAllBlogsData)();
    (0, postsRepository_1.deleteAllPostsData)();
    res.sendStatus(204);
});
