import { Router } from "express";
import commetnsController from '../controllers/CommentsControllers';

class CommentsRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/:id', commetnsController.getAll);
        this.router.post('/', commetnsController.create);
    }
}

const commentsRoutes = new CommentsRoutes();
export default commentsRoutes.router;
