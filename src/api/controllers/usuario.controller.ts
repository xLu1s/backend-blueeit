import express, { Response, Request, NextFunction } from "express";
import * as service from '../services/usuario.service'

export const get = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: any = await service.get();
        return res.send(data);
    } catch (error) {
        next(error)
    }
}

export const getByNick = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: any = await service.getByNick(req.params.nick);
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
                message: `No se ha registrado ningún usuario`
            });
        }

        return res.send({
            message: `Usuario ${req.body.nick} creado correctamente`
        });
       
    } catch (error) {
        next(error)
    }
}