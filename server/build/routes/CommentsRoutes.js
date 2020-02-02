"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CommentsControllers_1 = __importDefault(require("../controllers/CommentsControllers"));
class CommentsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', CommentsControllers_1.default.getAll);
        this.router.post('/', CommentsControllers_1.default.create);
    }
}
const commentsRoutes = new CommentsRoutes();
exports.default = commentsRoutes.router;
