//AQUÍ ESTÁN TODAS LAS FUNCIONES DE LA LÓGICA DEL NEGOCIO
import { usuario } from "@prisma/client";
import express, { Response, Request, NextFunction } from "express";
import * as service from '../services/usuario.service'

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: usuario[] = await service.getByEmail(req.body.email);                
        //comprobamos si existe usuario
        if (data.length === 0) return res.send(`Usuario y/o contraseña incorrectos`);
        if (data[0].passw !== req.body.passw) return res.send(`Usuario y/o contraseña incorrectos`);
        else return res.send(`Usuario loggeado correctamente`);
    } catch (error) {
        next(error)
    }
}
