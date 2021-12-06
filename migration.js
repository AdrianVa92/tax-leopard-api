require("dotenv").config();
const mysql = require('mysql');
const migration = require('mysql-migrations');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 10
});

migration.init(pool, __dirname + '/migrations', function() {
  console.log("Finished running migrations");
});