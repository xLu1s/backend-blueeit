import express, { Response, Request, NextFunction } from "express";
import * as service from '../services/hilo.service'

export const get = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: any = await service.get();
        return res.send(data);
    } catch (error) {
        next(error)
    }
}

export const getNByDate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(req.body);
        
        const data: any = await service.getNbyDate(parseInt(req.body.num), req.body.date);
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
                message: `No se ha registrado ningún hilo`
            });
        }

        return res.send({
            message: `Hilo ${req.body.titulo} creado correctamente`
        });
       
    } catch (error) {
        next(error)
    }
}