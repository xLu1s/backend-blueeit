

import express, { Response, Request, NextFunction } from "express";
//Esta funcón se ejecuta cuando no encuentra ninguna URL en el apartado de routes.
export const notFound = (req: Request, res: Response, next: NextFunction) => {
    res.status(404);
    const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
    next(error);
};
//Cuando obtenemos un error esta función lo devuelve como respuesta
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    /* eslint-enable no-unused-vars */
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack
    });
};
