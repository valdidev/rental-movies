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

Go to the **.env.example** file and rename it to **.env** and modify it with your settings

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

Create database and call it
```sh
rentalmovies
```
or throw
```sh
npx sequelize-cli db:create
```

### 2. Populate the database
Two ways:
***

##### 2.1 Migrations
Rename config/**example.config.json** to **config.json** and and modify it with your settings
```sh
{
  "development": {
    "username": "db username",
    "password": "db password",
    "database": "db database",
    "host": "db host",
    "dialect": "db dialect",
    "port": "db port"
  }
}
```
Launch the migrations
```sh
npx sequelize-cli db:migrate
```
***
or
***
##### 2.2 Sequelize models
Go to **index.js** and change sequelize.authenticate() to

```sh
sequelize.sync()
```
_Remember to change it back if you want to keep the changes_
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
***
# EER Diagram
![er-rental-movies](https://user-images.githubusercontent.com/96445737/200185110-c2df7c28-ab65-46f1-8d11-a07396be61ad.png)

## License

MIT


## Author
Fernando Valdivielso - @valdidev
