const { prompt } = require('inquirer');
const logo = require('asciiart-logo');
const db = require('./db');

init();

function init() {
    const logoText = logo({ name: 'Employee Manager' }).render();
    console.log(logoText);

    loadMainInquiries();
}

function loadMainInquiries() {
    prompt([
        {
            name: 'start',
            message: "What would you like to start with?",
            type: 'list',
            choices: 
            [{name: 'View all departments', 
                value: 'findDepartments',
            }, {name: 'View all roles',
                value: 'findRoles'
            }, {name: 'View all employees',
                value: 'findEmployees'
            }, {name: 'Add department',
                value: 'addDepartment',
            }, {name: 'Add role',
                value: 'addRole',
            }, {name: 'Add employee',
                value: 'addEmployee'
            }, {name: 'Update employee role',
                value: 'updateEmpRole'}]
        }
    ])
    .then((userData) => {

        switch (userData.start) {
            case 'findDepartments':
                findAllDepartments();
                break;

            case 'findRoles': 
                findAllRoles();
                break;

            case 'findEmployees':
                findAllEmployees();
                break;

            case 'addDepartment':
                addDepartment();
                break;

            case 'addRole':
                addRole();
                break;

            case 'addEmployee':
                addEmployee();
                break;

            case 'UpdateEmpRole':
                updateEmployeeRole();
                break;
        
            default:
                break;
        }
    })
}

function findAllDepartments(){
    console.log('Found all departments')
    db.findAllDepartments().then(({ rows }) => {
        let departments = rows;
        console.table(departments)
    }).then(() => loadMainInquiries())
}

function findAllRoles(){
    console.log('Found all roles')
    db.findAllRoles().then(({ rows }) => {
        let roles = rows;
        console.table(roles)
    }).then(() => loadMainInquiries())
}

function findAllEmployees(){
    console.log('Found all employees')
    db.findAllEmployees().then(({ rows }) => {
        let employees = rows;
        console.table(employees)
    }).then(() => loadMainInquiries())
}

function addDepartment(){
    prompt([
        {
            name: 'newDepartment',
            message: "Enter a name for the department:",
            type: 'input'
        }
    ]).then(({ newDepartment }) => {
        console.log(newDepartment)
        let department = db.addDepartment(newDepartment);
        return department;
    })
    .then(() => loadMainInquiries())
}

function addRole(){
    prompt([
        {
            name: 'newRole',
            message: "Enter a name for the role:",
            type: 'input'
        },
        {
            name: 'roleSalary',
            message: "What is the salary for this role?",
            type: 'input'
        },
        {
            name: 'roleDepartment',
            message: "Which department does this role belong to?",
            type: 'list',
            choices: ['Engineering', 'Finance', 'Legal', 'Sales']
        }
    ])//.then(({ newRole, roleSalary, roleDepartment }) => {
    //     let role = db.addRole(newRole, roleSalary, roleDepartment);
    //     return role;
    // })
    // .then(() => loadMainInquiries())
}

function addEmployee(){
    prompt([
        {
            name: 'newEmployeeFirst',
            message: "Enter a first name for the employee:",
            type: 'input'
        },
        {
            name: 'newEmployeeLast',
            message: "Enter a last name for the employee:",
            type: 'input'
        },
        {
            name: 'newEmployeeRole',
            message: "What is the employee's role?",
            type: 'list',
            // ! Should have roles added by the user later
            choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Accountant Manager', 'Accountant', 'Legal Team Lead', 'Lawyer']
        },
        {
            name: 'employeeManager',
            message: "Who is this employee's manager?",
            type: 'list',
            // ! Should pull from the user's seeds eventually
            choices: ['Ebony', 'Neil', 'Freyja', 'Mia']
        }
    ])
}

function updateEmployeeRole(){
    prompt([
        {
            name: 'updateEmployee',
            message: "Which employee's role do you want to update?",
            type: 'list',
            // ! Should pull from the user's seeds eventually
            choices: ['Ebony', 'Neil', 'Heyden', 'Freyja', 'Mia', 'Bill', 'Zaara', 'Nellie']
        },
        {
            name: 'updateEmployeeRl',
            message: "Which role do you want to assign the selected employee?",
            type: 'list',
            // ! Should have roles added by the user later
            choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Accountant Manager', 'Accountant', 'Legal Team Lead', 'Lawyer']
        }
    ])
}