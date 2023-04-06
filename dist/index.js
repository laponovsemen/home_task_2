"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startApp = void 0;
const settings_1 = require("./settings");
const port = process.env.PORT || 3000;
const startApp = () => {
    settings_1.app.listen(port, () => {
        console.log(`app started on ${port} port`);
    });
};
exports.startApp = startApp;
(0, exports.startApp)();
