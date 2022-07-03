import express, { Response, Request, NextFunction } from "express";
import asyncHandler from 'express-async-handler'

import * as controller from '../controllers/categoria.controller'

const router = express.Router();

router.get('/', asyncHandler(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        controller.get(req, res, next)
    })
);

router.post('/', asyncHandler(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        controller.insert(req, res, next)
    })
);


export { router as categoriaRouter };
