# Instrucciones

## Instalación de librerías

-Correr en consola: 

    npm install


## Instalación de Base de Datos  

-Tener instalado Postgres versión 9.5 o superior

-Crear base de datos vacía llamada "registro"

-Clic derecho, "Restore", apuntar a la carpeta backup

## Configuración de Base de Datos

-En el archivo dbOperations.js cambiar "postgres://postgres:123456uv@localhost:5432/registro" por variables de entorno local ("postgres://usuario:contraseña@host:port/base_datos")

## Generar Modelos de Base de datos

-En consola node:

    sequelize-auto -o "./models" -d registro -h <host> -u <usuario> -p <puerto> -x <contraseña> -e postgres

-Se generarán automáticamente los modelos que ya existan en Base de datos.

##Sincronizar Base de Datos

-En consola node:

    node_modules/.bin/sequelize db:migrate

##CONTINUARÁ...
