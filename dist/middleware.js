"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readPostIDValidator = exports.createPostBodyValidator = exports.readBlogIDValidator = exports.createBlogBodyValidator = exports.basicAuthGuardMiddleware = void 0;
const blogsRepository_1 = require("./repositiries/blogsRepository");
const postsRepository_1 = require("./repositiries/postsRepository");
const basicAuthGuardMiddleware = (req, res, next) => {
    if (req.headers.authorization) {
        const encoded = req.headers.authorization.split(" ")[1];
        const encodeway = req.headers.authorization.split(" ")[0];
        const decoded = Buffer.from(encoded, 'base64').toString('utf8');
        if (decoded === "admin:qwerty" && encodeway === "Basic") {
            next();
        }
        else {
            res.sendStatus(401);
        }
    }
    else {
        res.sendStatus(401);
    }
};
exports.basicAuthGuardMiddleware = basicAuthGuardMiddleware;
const createBlogBodyValidator = (req, res, next) => {
    let errorsList = { errorsMessages: [] };
    // validation of proper name
    if (!req.body.name) {
        let error = { message: "no name prop in body", field: "name" };
        errorsList.errorsMessages.push(error);
    }
    else if (typeof req.body.name !== "string") {
        let error = { message: "wrong type of name field of req.body(not string)", field: "name" };
        errorsList.errorsMessages.push(error);
    }
    else if (req.body.name.length > 15) {
        let error = { message: "wrong length of name field of req.body(more than 15 characters)", field: "name" };
        errorsList.errorsMessages.push(error);
    }
    else if (req.body.name.trim().length === 0) {
        let error = { message: "empty name field", field: "name" };
        errorsList.errorsMessages.push(error);
    }
    // validation of proper description
    if (!req.body.description) {
        let error = { message: "no description prop in body", field: "description" };
        errorsList.errorsMessages.push(error);
    }
    else if (typeof req.body.description !== "string") {
        let error = { message: "wrong type of description field of req.body(not string)", field: "description" };
        errorsList.errorsMessages.push(error);
    }
    else if (req.body.description.length > 500) {
        let error = { message: "wrong length of description field of req.body(more than 500 characters)", field: "description" };
        errorsList.errorsMessages.push(error);
    }
    else if (req.body.description.trim().length === 0) {
        let error = { message: "empty description field", field: "name" };
        errorsList.errorsMessages.push(error);
    }
    // validation of proper websiteUrl
    const httpRegExPattern = new RegExp("^https://([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$");
    if (!req.body.websiteUrl) {
        let error = { message: "no websiteUrl prop in body", field: "websiteUrl" };
        errorsList.errorsMessages.push(error);
    }
    else if (typeof req.body.websiteUrl !== "string") {
        let error = { message: "wrong type of websiteUrl field of req.body(not string)", field: "websiteUrl" };
        errorsList.errorsMessages.push(error);
    }
    else if (req.body.websiteUrl.length > 100) {
        let error = { message: "wrong length of websiteUrl field of req.body(more than 100 characters)", field: "websiteUrl" };
        errorsList.errorsMessages.push(error);
    }
    else 
    //checking through proper http regex pattern
    if (!httpRegExPattern.test(req.body.websiteUrl)) {
        let error = { message: "No RegEx intersection", field: "websiteUrl" };
        errorsList.errorsMessages.push(error);
    }
    if (!errorsList.errorsMessages.length) {
        next();
    }
    else {
        res.status(400).send(errorsList);
    }
};
exports.createBlogBodyValidator = createBlogBodyValidator;
const readBlogIDValidator = (req, res, next) => {
    let errorsList = { errorsMessages: [] };
    // validation of proper name
    if (!req.body.name) {
        let error = { message: "no name prop in body", field: "name" };
        errorsList.errorsMessages.push(error);
    }
    else if (typeof req.body.name !== "string") {
        let error = { message: "wrong type of name field of req.body(not string)", field: "name" };
        errorsList.errorsMessages.push(error);
    }
    else if (req.body.name.length > 15) {
        let error = { message: "wrong length of name field of req.body(more than 15 characters)", field: "name" };
        errorsList.errorsMessages.push(error);
    }
    else if (req.body.name.trim().length === 0) {
        let error = { message: "empty name field", field: "name" };
        errorsList.errorsMessages.push(error);
    }
    // validation of proper description
    if (!req.body.description) {
        let error = { message: "no description prop in body", field: "description" };
        errorsList.errorsMessages.push(error);
    }
    else if (typeof req.body.description !== "string") {
        let error = { message: "wrong type of description field of req.body(not string)", field: "description" };
        errorsList.errorsMessages.push(error);
    }
    else if (req.body.description.length > 500) {
        let error = { message: "wrong length of description field of req.body(more than 500 characters)", field: "description" };
        errorsList.errorsMessages.push(error);
    }
    else if (req.body.description.trim().length === 0) {
        let error = { message: "empty description field", field: "name" };
        errorsList.errorsMessages.push(error);
    }
    // validation of proper websiteUrl
    const httpRegExPattern = new RegExp("^https://([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$");
    if (!req.body.websiteUrl) {
        let error = { message: "no websiteUrl prop in body", field: "websiteUrl" };
        errorsList.errorsMessages.push(error);
    }
    else if (typeof req.body.websiteUrl !== "string") {
        let error = { message: "wrong type of websiteUrl field of req.body(not string)", field: "websiteUrl" };
        errorsList.errorsMessages.push(error);
    }
    else if (req.body.websiteUrl.length > 100) {
        let error = { message: "wrong length of websiteUrl field of req.body(more than 100 characters)", field: "websiteUrl" };
        errorsList.errorsMessages.push(error);
    }
    else 
    //checking through proper http regex pattern
    if (!httpRegExPattern.test(req.body.websiteUrl)) {
        let error = { message: "No RegEx intersection", field: "websiteUrl" };
        errorsList.errorsMessages.push(error);
    }
    if (!errorsList.errorsMessages.length) {
        next();
    }
    else {
        res.status(400).send(errorsList);
    }
};
exports.readBlogIDValidator = readBlogIDValidator;
const createPostBodyValidator = (req, res, next) => {
    let errorsList = { errorsMessages: [] };
    // validation of proper name
    if (!req.body.title) {
        let error = { message: "no title prop in body", field: "title" };
        errorsList.errorsMessages.push(error);
    }
    else if (typeof req.body.title !== "string") {
        let error = { message: "wrong type of title field of req.body(not string)", field: "title" };
        errorsList.errorsMessages.push(error);
    }
    else if (req.body.title.length > 30) {
        let error = { message: "wrong length of name field of req.body(more than 30 characters)", field: "title" };
        errorsList.errorsMessages.push(error);
    }
    else if (req.body.title.trim().length === 0) {
        let error = { message: "empty name field", field: "title" };
        errorsList.errorsMessages.push(error);
    }
    // validation of proper description
    if (!req.body.shortDescription) {
        let error = { message: "no shortDescription prop in body", field: "shortDescription" };
        errorsList.errorsMessages.push(error);
    }
    else if (typeof req.body.shortDescription !== "string") {
        let error = { message: "wrong type of shortDescription field of req.body(not string)", field: "shortDescription" };
        errorsList.errorsMessages.push(error);
    }
    else if (req.body.shortDescription.length > 100) {
        let error = { message: "wrong length of shortDescription field of req.body(more than 100 characters)", field: "shortDescription" };
        errorsList.errorsMessages.push(error);
    }
    else if (req.body.shortDescription.trim().length === 0) {
        let error = { message: "empty shortDescription field", field: "shortDescription" };
        errorsList.errorsMessages.push(error);
    }
    if (!req.body.content) {
        let error = { message: "no content prop in body", field: "content" };
        errorsList.errorsMessages.push(error);
    }
    else if (typeof req.body.content !== "string") {
        let error = { message: "wrong type of content field of req.body(not string)", field: "content" };
        errorsList.errorsMessages.push(error);
    }
    else if (req.body.content.length > 1000) {
        let error = { message: "wrong length of content field of req.body(more than 1000 characters)", field: "content" };
        errorsList.errorsMessages.push(error);
    }
    else if (req.body.content.trim().length === 0) {
        let error = { message: "empty content field", field: "content" };
        errorsList.errorsMessages.push(error);
    }
    if (!req.body.blogId) {
        let error = { message: "no content prop in body", field: "blogId" };
        errorsList.errorsMessages.push(error);
    }
    else if (typeof req.body.blogId !== "string") {
        let error = { message: "wrong type of content field of req.body(not string)", field: "blogId" };
        errorsList.errorsMessages.push(error);
    }
    else if (!blogsRepository_1.blogs.filter(n => n.id === req.body.blogId)) {
        let error = { message: "no blog with such id in memory", field: "blogId" };
        errorsList.errorsMessages.push(error);
    }
    else if (!postsRepository_1.posts.filter(n => n.id === req.body.blogId)) {
        let error = { message: "no blog with such id in memory", field: "blogId" };
        errorsList.errorsMessages.push(error);
    }
    else if (req.body.blogId.length > 35) {
        let error = { message: "no blog with such id in memory", field: "blogId" };
        errorsList.errorsMessages.push(error);
    }
    if (!errorsList.errorsMessages.length) {
        next();
    }
    else {
        res.status(400).send(errorsList);
    }
};
exports.createPostBodyValidator = createPostBodyValidator;
const readPostIDValidator = (req, res, next) => {
    let errorsList = { errorsMessages: [] };
    // validation of proper name
    if (!req.body.name) {
        let error = { message: "no name prop in body", field: "name" };
        errorsList.errorsMessages.push(error);
    }
    else if (typeof req.body.name !== "string") {
        let error = { message: "wrong type of name field of req.body(not string)", field: "name" };
        errorsList.errorsMessages.push(error);
    }
    else if (req.body.name.length > 15) {
        let error = { message: "wrong length of name field of req.body(more than 15 characters)", field: "name" };
        errorsList.errorsMessages.push(error);
    }
    else if (req.body.name.trim().length === 0) {
        let error = { message: "empty name field", field: "name" };
        errorsList.errorsMessages.push(error);
    }
    // validation of proper description
    if (!req.body.description) {
        let error = { message: "no description prop in body", field: "description" };
        errorsList.errorsMessages.push(error);
    }
    else if (typeof req.body.description !== "string") {
        let error = { message: "wrong type of description field of req.body(not string)", field: "description" };
        errorsList.errorsMessages.push(error);
    }
    else if (req.body.description.length > 500) {
        let error = { message: "wrong length of description field of req.body(more than 500 characters)", field: "description" };
        errorsList.errorsMessages.push(error);
    }
    else if (req.body.description.trim().length === 0) {
        let error = { message: "empty description field", field: "name" };
        errorsList.errorsMessages.push(error);
    }
    // validation of proper websiteUrl
    const httpRegExPattern = new RegExp("^https://([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$");
    if (!req.body.websiteUrl) {
        let error = { message: "no websiteUrl prop in body", field: "websiteUrl" };
        errorsList.errorsMessages.push(error);
    }
    else if (typeof req.body.websiteUrl !== "string") {
        let error = { message: "wrong type of websiteUrl field of req.body(not string)", field: "websiteUrl" };
        errorsList.errorsMessages.push(error);
    }
    else if (req.body.websiteUrl.length > 100) {
        let error = { message: "wrong length of websiteUrl field of req.body(more than 100 characters)", field: "websiteUrl" };
        errorsList.errorsMessages.push(error);
    }
    else 
    //checking through proper http regex pattern
    if (!httpRegExPattern.test(req.body.websiteUrl)) {
        let error = { message: "No RegEx intersection", field: "websiteUrl" };
        errorsList.errorsMessages.push(error);
    }
    if (!errorsList.errorsMessages.length) {
        next();
    }
    else {
        res.status(400).send(errorsList);
    }
};
exports.readPostIDValidator = readPostIDValidator;
