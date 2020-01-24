import {Request, Response} from "express";
import pool from "../database";

class NewsController {

    public async getAll(req: Request, res: Response){
        const views = await pool.then((r: any) => r.query('SELECT * FROM views'))
        res.json(views);
    }

    public async getOne(req: Request, res: Response){
        const { id } = req.params;
        const views = await pool.then((r: any) => r.query('SELECT * FROM views WHERE id = ?', [id]));
        if(views.length > 0){
            return  res.json(views[0]);
        }
        else{
            res.status(404).json({text: 'El juego no existe'});
        }
    }

    public async create(req: Request, res: Response){
        const views = await pool.then((r: any) => r.query('INSERT INTO views set ?', [req.body]));
        res.json({text: 'Juego creado'});
    }

    public async delete(req: Request, res: Response){
        const { id } = req.params
        const views = await pool.then((r: any) => r.query('DELETE FROM views WHERE id = ?', [id]));
        res.json({text: 'Juego eliminado'});
    }

    public async update(req: Request, res: Response){
        const { id } = req.params
        const views = await pool.then((r: any) => r.query('UPDATE views set ? WHERE id = ?', [req.body, id]));
        res.json({text: 'Juego actualizado'});
    }
}

const newsController = new NewsController();
export default newsController;