import { Router } from "express";
import newsController from '../controllers/NewsController';

class NewsRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/', newsController.getAll);
        this.router.get('/:id', newsController.getOne);
        this.router.post('/', newsController.create);
        this.router.delete('/:id', newsController.delete);
        this.router.put('/:id', newsController.update);
    }
}

const newsRoutes = new NewsRoutes();
export default newsRoutes.router;