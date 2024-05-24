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

    addDepartment() {
        return this.query(
            `INSERT INTO department (name) VALUES (${this.answer});`
        );
    }

    addRole() {
        return this.query(
            `INSERT INTO roles (title, salary, department) VALUES (${this.title}, ${this.salary}, ${this.department});`
        );
    }

    addEmployee() {
        return this.query(
            `INSERT INTO employee (first_name, last_name) VALUES (${this.first_name}, ${this.last_name}, ${this.role_id}, ${this.manager_id});`
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