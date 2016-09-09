# Instrucciones

## Instalación de librerías

-Correr en consola npm install


## Instalación de Base de Datos  

-Tener instalado Postgres versión 9.5
-Crear base de datos vacía llamada "registro"
-Clic derecho, "Restore", apuntar a la carpeta backup

## Configuración de Base de Datos

-En el archivo dbOperations.js cambiar "postgres://postgres:123456uv@localhost:5432/registro" por variables de entorno local ("postgres://usuario:contraseña@host:port/base_datos")
