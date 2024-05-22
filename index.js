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
                value: 'addDepartment'
            }, {name: 'Add role',
                value: 'addRole'
            }, {name: 'Add employee',
                value: 'addEmployee'
            }, {name: 'Update employee role',
                value: 'updateEmpRole'}]
        },
        // {
        //     // if add department
        //     name: 'newDepartment',
        //     message: "Enter name for the department:",
        //     type: 'input'
        // },
        // {
        //     // if add role
        //     name: 'newRole',
        //     message: "Add a name for the role:",
        //     type: 'input'
        // },
        // {
        //     // continuation of add role: salary
        //     name: 'newRoleSal',
        //     message: "What is the salary of the role?",
        //     type: 'input'
        // },
        // {
        //     // continuation of add role: department
        //     name: 'newRoleDep',
        //     message: "Which department does this role belong to?",
        //     type: 'list',
        //     // should also end up having any departments added by the user
        //     choices: ['Engineering', 'Finance', 'Legal', 'Sales']
        // },
        // {
        //     // if add employee
        //     name: 'employeeFirst',
        //     message: "What is the employee's first name?",
        //     type: 'input'
        // },
        // {
        //     // continuation of add employee: last name
        //     name: 'employeeLast',
        //     message: "What is the employee's last name?",
        //     type: 'input'
        // },
        // {
        //     // continuation of add employee: role
        //     name: 'newEmployeeRole',
        //     message: "What is the employee's role?",
        //     type: 'list',
        //     // should also end up having any roles added by the user
        //     choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Accountant Manager', 'Accountant', 'Legal Team Lead', 'Lawyer']
        // },
        // {
        //     name: 'employeeManager',
        //     message: "Who is this employee's manager?",
        //     type: 'list',
        //     choices: ['Ebony', 'Neil', 'Freyja', 'Mia']
        // },
        // {
        //     // if update employee role
        //     name: 'updateEmployee',
        //     message: "Which employee's role do you want to update?",
        //     type: 'list',
        //     choices: ['Ebony', 'Neil', 'Heyden', 'Freyja', 'Mia', 'Bill', 'Zaara', 'Nellie']
        // },
        // {
        //     // continuation of update employee role: which role?
        //     name: 'updateEmployeeRl',
        //     message: "Which role do you want to assign the selected employee?",
        //     type: 'list',
        //     choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Accountant Manager', 'Accountant', 'Legal Team Lead', 'Lawyer']
        // }
    
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
                db.findAllEmployees();
                break;

            case 'addDepartment':
                // WIP
                break;

            case 'addRole':
                // WIP
                break;

            case 'addEmployee':
                // WIP
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

