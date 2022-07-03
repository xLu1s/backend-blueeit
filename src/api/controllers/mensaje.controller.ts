import express, { Response, Request, NextFunction } from "express";
import * as service from '../services/mensaje.service'

export const get = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: any = await service.get();
        return res.send(data);
    } catch (error) {
        next(error)
    }
}

export const insert = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: any = await service.insert(req.body);
        if(data === 0) {
            return res.send({
                message: `No se ha registrado ningún mensaje`
            });
        }

        return res.send({
            message: `Mensaje creado correctamente`
        });
       
    } catch (error) {
        next(error)
    }
}