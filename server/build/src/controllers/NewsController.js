"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
class NewsController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const views = yield database_1.default.then((r) => r.query('SELECT * FROM views'));
            res.json(views);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const views = yield database_1.default.then((r) => r.query('SELECT * FROM views WHERE id = ?', [id]));
            if (views.length > 0) {
                return res.json(views[0]);
            }
            else {
                res.status(404).json({ text: 'El juego no existe' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const views = yield database_1.default.then((r) => r.query('INSERT INTO views set ?', [req.body]));
            res.json({ text: 'Juego creado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const views = yield database_1.default.then((r) => r.query('DELETE FROM views WHERE id = ?', [id]));
            res.json({ text: 'Juego eliminado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const views = yield database_1.default.then((r) => r.query('UPDATE views SET ? WHERE id = ?', [req.body, id]));
            res.json({ text: 'Juego actualizado' });
        });
    }
}
const newsController = new NewsController();
exports.default = newsController;
