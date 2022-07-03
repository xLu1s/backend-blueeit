import { categoria, hilo, mensaje, usuario } from '@prisma/client';
import prisma from '../../config/prisma'

export const get = async (): Promise<mensaje[]> => {
    const data: mensaje[] = await prisma.$queryRawUnsafe(`
        SELECT *
        FROM mensaje
    `);
    return data;
}

export const insert = async (entity: { idhilo: number, mensaje: string, idusuario: number }): Promise<number> => {
    console.log(entity);
    
    const data: number = await prisma.$executeRawUnsafe(`
       INSERT INTO mensaje(idhilo,mensaje,idusuario)
       VALUES (${entity.idhilo},'${entity.mensaje}', ${entity.idusuario})
    `);
    return data;
}

