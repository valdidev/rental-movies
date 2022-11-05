# RENTAL MOVIES
## _Nodejs REST API + MySQL database_
***
![N|Solid](data:image/png;base64,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)
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
npm i
npm run dev
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
