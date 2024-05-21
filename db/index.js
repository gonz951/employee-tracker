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
            'SELECT * FROM department;'
        );
    }

    findAllRoles() {
        return this.query(
            // * Working
            'SELECT roles.id, roles.title, department.name AS department, roles.salary FROM department JOIN roles ON roles.department = department.id;'
        );
    }

    findAllEmployees() {
        return this.query(
            // ! THIS ONE ISNT FINISHED OR WORKING
            // need to figure out how to show manager
            'SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.name AS department, roles.salary FROM roles JOIN employee ON employee.role_id = roles.id JOIN department ON roles.department = department.id;'
        );
    }

    addDepartment() {
        return this.query(
            `INSERT INTO department (name) VALUES (${newDepartment});`
        );
    }
}

module.exports = DB