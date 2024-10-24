
# API node Firebase Upload File

Node js witch Firebase for Upload File

## docker con MSSQL

Docker Compose

```bash
  cd /docker
  docker-compose up -d
  docker-compose ps
  docker-compose top

  docker-compose start
  docker-compose top

  docker-compose down -v
```

Docker 

```bash
  docker pull mcr.microsoft.com/mssql/server

  docker network ls
  docker network create myred

  docker run --network myred -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=my_password" -e "MSSQL_PID=Express" -p 1433:1433  --name server-sql --hostname host-serversql  -d mcr.microsoft.com/mssql/server:2017-CU1-ubuntu

  #docker run --network myred -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=Adderlin@123" -e "MSSQL_PID=Express" -p 1433:1433 --name server-sql --hostname host-serversql -d mcr.microsoft.com/mssql/server:2019-latest

  #docker run --network myred -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=Adderlin@123" -e "MSSQL_PID=Express" -p 1433:1433 --name server-sql --hostname host-serversql -d mcr.microsoft.com/mssql/server:2019-latest

  #docker run --network myred -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=Adderlin@123" -e "MSSQL_PID=Evaluation" -p 1433:1433  --name sqlpreview --hostname sqlpreview -d mcr.microsoft.com/mssql/server:2022-preview-ubuntu-22.04

  docker exec -it server-sql /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P my_password
```
Comandos 

```bash
  create database prueba01
  1> create database prueba01
  2> go
  ---------
  1> use prueba01
  2> go
  Changed database context to 'prueba01'.
  ----------
  1> create table table1
  2> (
  3> column1 int
  4> )
  5> go
  --------
  1> insert into table1 values (20)
  2> go
  -------
  1> select * from table1
  2> go
```

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
