"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const NewsController_1 = __importDefault(require("../controllers/NewsController"));
class NewsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', NewsController_1.default.getAll);
        this.router.get('/:id', NewsController_1.default.getOne);
        this.router.post('/', NewsController_1.default.create);
        this.router.delete('/:id', NewsController_1.default.delete);
        this.router.put('/:id', NewsController_1.default.update);
    }
}
const newsRoutes = new NewsRoutes();
exports.default = newsRoutes.router;
