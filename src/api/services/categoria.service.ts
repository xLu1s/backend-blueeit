
//EN LOS SERVICIOS HACEMOS LAS CONSULTAS A LAS BASES DE DATOS
import { categoria, usuario } from '@prisma/client';
import prisma from '../../config/prisma'

export const get = async (): Promise<categoria[]> => {
    const data: categoria[] = await prisma.$queryRawUnsafe(`
        SELECT *
        FROM categoria
    `);
    return data;
}

export const insert = async (entity: { nombre: string }): Promise<number> => {
    const data: number = await prisma.$executeRawUnsafe(`
       INSERT INTO categoria(nombre)
       VALUES ('${entity.nombre}')
    `);
    return data;
}

