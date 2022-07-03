//ARRANCA CONEXIÓN A LA BASE DE DATOS Y ARRANCAMOS EL SERVIDOR EXPRESS
import app from './app'
import prisma from '../config/prisma'

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000; //Nos vamos a conectar en localhost:3000
const ip = process.env.IP || '0.0.0.0';


(async () => {
    await prisma.$connect();
    console.log(`Successfully connected to database: ${process.env.DATABASE_URL}`);
    app.listen(port, ip, async () => {
        console.log(`Listening on http://${ip}:${port}`);
    })
})();
