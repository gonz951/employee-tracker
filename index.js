const express = require('express');
const { Pool } = require('pg');
const inquirer = require('inquirer')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const pool = new Pool(
    {
        user: 'postgres',
        password: 'boot1eQ>>*247yrs:)',
        host: 'localhost',
        database: // to be added
    },
    console.log(`Connected to database.`)
)

pool.connect();