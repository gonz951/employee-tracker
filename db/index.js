const pool = require('./connection');

class DB {
    constructor () {}

    async query(sql, args = []) {
        const client = await pool.connect();
        try {
            const result = await client.query(sql, args);
            return result;
        } finally {
            client.release();
        }
    }
    
    findAllDepartments() {
        return this.query(
            // * Working
            'SELECT department.name FROM department;'
        );
    }

    findAllRoles() {
        return this.query(
            // * Working
            'SELECT roles.title, department.name AS department, roles.salary FROM department JOIN roles ON roles.department = department.id;'
        );
    }

    findAllEmployees() {
        return this.query(
            // ! THIS ONE ISNT FINISHED 
            // need to figure out how to show manager
            'SELECT employee.first_name, employee.last_name, roles.title, department.name AS department, roles.salary, employee.last_name FROM roles JOIN employee ON employee.role_id = roles.id JOIN department ON roles.department = department.id;'
        );
    }

    addDepartment(department) {
        return this.query(
            `INSERT INTO department (name) VALUES ($1)`, [department]
        );
    }

    addRole(title, salary, dep) {
        return this.query(
            `INSERT INTO roles (title, salary, department) VALUES ($2, CAST($3 AS INTEGER), $4)`, [title, salary, dep]
        );
    }

    addEmployee(first_name, last_name, role_id, manager_id) {
        return this.query(
            `INSERT INTO employee (first_name, last_name) VALUES ($5, $6, $7, $8)`, [first_name, last_name, role_id, manager_id]
        );
    }

    updateEmployeeRole() {
        return this.query(
            ``
        );
    }

    // * Obsolete until further notice
    // choiceRoles() {
    //     return this.query(
    //         'SELECT choices AS roles.title FROM roles FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;'
    //     );
    // }
}

module.exports = new DB();