
# API node Firebase Upload File

Node js witch Firebase for Upload File

## Crear sdk firebase
Descargar y guardar como: delivery-b9284-firebase

Modificar archivo firebase-config.js remplazar la linea storageBucket


```bash
  storageBucket: 'myAplicationDemo.appspot.com'
```

## link

[Firebase] (https://console.firebase.google.com/)


## Running Test

instalacion de dependencias

```bash
  rm -rf node_modules
  rm package-lock.json
  npm install
```
run tests, run the following command
```bash
  node index.js
```

env
```bash
  # Credenciales de base de datos
  DB_USER=usuario
  DB_PASSWORD=mysppassword
  DB_SERVER=ip
  DB_DATABASE=database


  # Puerto en el que se ejecutará la aplicación
  PORT=4000

  # Secretos para JWT (JSON Web Token)
  JWT_SECRET=mysecretkey

  # Variables de configuración para API
  API_URL=https://api.example.com
  API_KEY=your_api_key_here
  ```
