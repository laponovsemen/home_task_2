"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startRouter = void 0;
const express_1 = require("express");
exports.startRouter = (0, express_1.Router)({});
exports.startRouter.get("/", (req, res) => {
    res.status(200).send("API started");
});
