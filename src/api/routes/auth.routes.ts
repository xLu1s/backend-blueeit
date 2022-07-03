//LAS RUTAS APUNTAN A LOS CONTROLADORES QUE GESTIONAN TODA LA LÓGICA DE NEGOCIO SOBRE LA PETICIÓN A LA QUE SE ACCEDE
import express, { Response, Request, NextFunction } from "express";
import asyncHandler from 'express-async-handler'

import * as controller from '../controllers/auth.controller'

const router = express.Router();

router.post('/login', asyncHandler(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        controller.login(req, res, next)
    })
);


export { router as authRouter };
