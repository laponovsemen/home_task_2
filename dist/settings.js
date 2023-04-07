"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const app_1 = require("./app");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use("", app_1.startRouter);
exports.app.use("/blogs", app_1.blogsRouter);
exports.app.use("/posts", app_1.postsRouter);
exports.app.use("/testing/all-data", app_1.testingRouter);
