# RENTAL MOVIES
## _Nodejs REST API + MySQL database_
***
![node_mysql](https://user-images.githubusercontent.com/96445737/200143716-8077153e-3dc7-48d8-9337-c28f7844a463.png)
***
Backend for application of rental movies and series
## Technologies
- Nodejs with express
- MySQL database 
- Sequelize ORM
- Json Web Token

## Features

- CRUD of users, movies and series
- Log in as administrator to delete users or see all the content of the     database

## Installation

Requires [Node.js](https://nodejs.org/) v16+ to run.

Install the dependencies and devDependencies and start the server.

```sh
npm install
```

# Start up
### 1. Create the SQL database
And call it
```sh
rentalmovies
```
Go to the **.env** file and modify it with your settings

```sh
JWT_SECRET="add jtw secret"
SERVICE_PORT="add service port"

DB_USER="add database user"
DB_PSWD="add database password"
DB_HOSTNAME="add database hostname"
DB_PORT="add database port"
DB_NAME="add database name"
DB_DIALECT="add database dialect"
```

### 2. Populate the database
Two ways:
***

##### 2.1 Migrations
Launch the migrations
```sh
npx sequelize-cli db:migrate
```
***
or
***
##### 2.2 Sequelize models
Go to index.js and change sequelize.authenticate()
_Remember to change it back if you want to keep the changes_

```sh
sequelize.sync()
```
***
##### 2.3 Seeders
If you want to have mocked data you can use

```sh
npx sequelize-cli db:seed:all
```

# Test the features 

In the **test** folder you will find test files as a client
- auth.test.http
- movies.test.http
- series.test.http
- rentals.test.http

# License

MIT
