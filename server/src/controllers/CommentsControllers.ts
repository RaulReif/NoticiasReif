import {Request, Response} from "express";
import pool from "../database";

class CommentsController {

    public async getAll(req: Request, res: Response) {
        const { id } = req.params;
        const comments = await pool.then((r: any) => r.query('SELECT commentary.*\n' +
            'FROM commentary\n' +
            'INNER JOIN news ON news.id = commentary.id_news\n' +
            'WHERE news.id = ?', [id]));
        res.json(comments);
    }

    public async create(req: Request, res: Response) {
        const comment = await pool.then((r: any) => r.query('INSERT INTO commentary set ?', [req.body]));
        res.json({text: 'Comentario creado'});
    }

}

const commentsController = new CommentsController();
export default commentsController;
