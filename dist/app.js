"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes"));
// parsers
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
// app.use("/uploads", express.static("uploads"));
// ========================
// application routes
// ========================
app.use("/api/v1", routes_1.default);
app.get("/", (req, res) => {
    res.send(`Educa-International-School server is running`);
});
app.use((req, res, next) => {
    res.status(401).json({
        success: false,
        message: "API NOT FOUND",
    });
});
exports.default = app;
