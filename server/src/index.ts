import  express, {Application} from 'express';
import morgan from 'morgan'; //Morgan mostrará información de las peticiones que le lleguen
import cors from 'cors';
import indexRoutes from './routes/IndexRoutes';
import newsRoutes from './routes/NewsRoutes';

class Server{

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors()); //Para poder comunicarse con el frontend
        this.app.use(express.json()); // Para que pueda leer los JSON
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void{
        this.app.use('/', indexRoutes);
        this.app.use('/api/news', newsRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ' , this.app.get('port'));
        })
    }
}

const server = new Server();
server.start();
