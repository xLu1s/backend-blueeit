import { usuario } from '@prisma/client';
import prisma from '../../config/prisma'

export const get = async (): Promise<usuario[]> => {
    const data: usuario[] = await prisma.$queryRawUnsafe(`
        SELECT *
        FROM usuario
    `);
    return data;
}

export const getByNick = async (nick: string): Promise<usuario[]> => {
    const data: usuario[] = await prisma.$queryRawUnsafe(`
        SELECT *
        FROM usuario
        WHERE nick = '${nick}'
    `);
    return data;
}

export const getByEmail = async (email: string): Promise<usuario[]> => {
    const data: usuario[] = await prisma.$queryRawUnsafe(`
        SELECT *
        FROM usuario
        WHERE email = '${email}'
    `);
    return data;
}

export const insert = async (entity: { email: string, nick: string, passw: string }): Promise<number> => {
    const data: number = await prisma.$executeRawUnsafe(`
       INSERT INTO usuario(email, nick, passw)
       VALUES ('${entity.email}', '${entity.nick}', '${entity.passw}')
    `);
    return data;
}

