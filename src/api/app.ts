//SERVIDOR
import express, { Request, Response } from 'express';
import morgan, { format } from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import compression from 'compression';

import { AUTH, CATEGORIA, HILO, HOME, MENSAJE, USUARIO, } from '../config/routes';
import { usuarioRouter } from './routes/usuario.routes';

import * as errorMiddleware from './middlewares/error.middleware'
import { authRouter } from './routes/auth.routes';
import { categoriaRouter } from './routes/categoria.routes';
import { hiloRouter } from './routes/hilo.routes';
import { mensajeRouter } from './routes/mensaje.routes';

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(cookieParser());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(HOME, (req: Request, res: Response) => {
    res.json({
        message: 'HOME - 🌈👋🌎'
    });
})

app.use(USUARIO,usuarioRouter)
app.use(AUTH,authRouter)
app.use(CATEGORIA,categoriaRouter)
app.use(HILO,hiloRouter)
app.use(MENSAJE,mensajeRouter)

app.use(errorMiddleware.notFound);
app.use(errorMiddleware.errorHandler);

export default app;