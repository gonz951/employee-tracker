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

const questions = [
    {
        name: 'start',
        message: 'What would you like to start with?',
        type: 'list',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add department', 'Add role', 'Add employee', 'Update employee role']
    },
    {
        name: 'department',
        message: 'Enter name for the department:',
        type: 'input'
    },
    {
        name: 'role',
        message: 'Add a name for the role:',
        type: 'input'
    },
    {
        name: 'roleSalary',
        message: 'What is the salary of the role?',
        type: 'input'
    },
    {
        // ! ADD MORE QUESTIONS LATER
    }
]