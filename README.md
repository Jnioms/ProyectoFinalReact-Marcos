# Entrega Final del curso de React en CoderHouse

## Comandos necesarios

El estilo de la pagina esta hecho con bootstrap.
Las librerias estan importadas en el src/index.js pero hay que correr el siguiente comando para instalarlas:

### `npm install bootstrap`

Tambien hay que instalar las librerias react-router-dom para los redireccionamientos locales, firebase para conectar la base de datos a firestore y toastify para las alertas.

### `npm install react-router-dom`
### `npm install firebase`
### `npm install react-toastify`

Luego puede iniciarse el proyecto corriendo:

### `npm start`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Para conectarse a la base de datos en firebase hay que crear un archivo .env en la raiz que contenga las siguientes credenciales:

```sh
REACT_APP_apiKey=*KEY*
REACT_APP_authDomain=*KEY*
REACT_APP_projectId=*KEY*
REACT_APP_storageBucket=*KEY*
REACT_APP_messagingSenderId=*KEY*
REACT_APP_appId=*KEY* ```