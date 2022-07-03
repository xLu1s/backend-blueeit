import { categoria, hilo, usuario } from '@prisma/client';
import moment from 'moment';
import prisma from '../../config/prisma'

export const get = async (): Promise<hilo[]> => {
    const data: hilo[] = await prisma.$queryRawUnsafe(`
        SELECT *
        FROM hilo
    `);
    return data;
}

export const getNbyDate = async (num: number, date: string): Promise<hilo[]> => {
    const data: hilo[] = await prisma.$queryRawUnsafe(`
        SELECT *
        FROM hilo h
        WHERE h."createdAt" >= '${moment(date).format("YYYY-MM-DD HH:mm:ss")}' AND h."createdAt" < '${moment(date).add(1, 'days').format("YYYY-MM-DD HH:mm:ss")}'
        ORDER BY id DESC
        LIMIT ${num}
    `);

    return data;
}

export const insert = async (entity: { idusuario: number, idcategoria: number, titulo: string }): Promise<number> => {
    const data: number = await prisma.$executeRawUnsafe(`
       INSERT INTO hilo(idusuario,idcategoria,titulo)
       VALUES (${entity.idusuario}, ${entity.idcategoria}, '${entity.titulo}')
    `);
    return data;
}


