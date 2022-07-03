#### CREAR UNA BBDD PREVIAMENTE 
`postgresql://postgres:password@localhost:5432/blueeit?schema=public`
> En este caso se trata de un postgresql, con usuario postgres, contraseña: password, sobre localhost puesto 5432, con una bbdd llamada blueeit.
> Hay que crear la bbdd de blueeit. Se puede tener nombre de usuario y contraseña distinto pero tiene que reflejarse en la url de conexión de arriba

postgresql://{{ USUARIO }}:{{ PASSWORD }}@{{ DB_HOST }}:{{ DB_PORT }}/{{ DB_NAME }}?schema=public

PAra instalar postgres se descarga postgresql, durante la instalacion te pedira una contraseña, esa será la contraseña de acceso para el usuario por defecto llamado postgres. Luego de la instalacion se crea la bbdd. Se busca psql en el inicio de windows, se entra y te loggeas con usuario postgres y la contraseñada mencionada anteriormente.

Luego se crea la bbdd con el comando "CREATE DATABASE blueeit;"


* 1. 
```bash
npm install
```

* 2. 
```bash
npx prisma db push
```

* 3. 
```bash
npx prisma generate
```

* 4. 
```bash
npm start
```

