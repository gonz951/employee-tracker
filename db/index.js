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
            'SELECT department.id, department.name FROM department;'
        )
    }

    findAllRoles() {
        return this.query(
            // ! THIS ONE DOESNT WORK
            'SELECT roles.id, roles.title, roles.department, roles.salary FROM roles LEFT JOIN department ON roles.department = department.name;'
        )
    }

    findAllEmployees() {
        return this.query(
            // ! THIS ONE ISNT FINISHED
            'SELECT employee.id, employee.first_name, roles.title, department.name AS department'
        )
    }
}