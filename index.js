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
        database: 'company_db'
    },
    console.log(`Connected to database.`)
)

pool.connect();

const questions = [
    {
        name: 'start',
        message: "What would you like to start with?",
        type: 'list',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add department', 'Add role', 'Add employee', 'Update employee role', 'QUIT']
    },
    {
        // if add department
        name: 'department',
        message: "Enter name for the department:",
        type: 'input'
    },
    {
        // if add role
        name: 'role',
        message: "Add a name for the role:",
        type: 'input'
    },
    {
        // continuation of add role: salary
        name: 'roleSalary',
        message: "What is the salary of the role?",
        type: 'input'
    },
    {
        // continuation of add role: department
        name: 'roleDepartment',
        message: "Which department does this role belong to?",
        type: 'list',
        // should also end up having any departments added by the user
        choices: ['Engineering', 'Finance', 'Legal', 'Sales']
    },
    {
        // if add employee
        name: 'employeeFirst',
        message: "What is the employee's first name?",
        type: 'input'
    },
    {
        // continuation of add employee: last name
        name: 'employeeLast',
        message: "What is the employee's last name?",
        type: 'input'
    },
    {
        // continuation of add employee: role
        name: 'newEmployeeRole',
        message: "What is the employee's role?",
        type: 'list',
        // should also end up having any roles added by the user
        choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Accountant Manager', 'Accountant']
    },
    {
        name: 'employeeManager',
        message: "Who is this employee's manager?",
        type: 'list',
        choices: [// should be filled with people i've made up]
    },
    {
        // if update employee role
        name: 'updateEmployee',
        message: "Which employee's role do you want to update?",
        type: 'list',
        choices: [//the employees I've made up]
    },
    {
        // continuation of update employee role: which role?
        name: 'updateEmployeeRl',
        message: "Which role do you want to assign the selected employee?",
        type: 'list',
        choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Accountant Manager', 'Accountant']
    }
]