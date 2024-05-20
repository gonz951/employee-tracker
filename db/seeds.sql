INSERT INTO department (name)
VALUES  ('Engineering'),
        ('Finance'), 
        ('Legal'), 
        ('Sales');

INSERT INTO role (title, salary, department)
VALUES  ('Sales Lead', 100000, 4),
        ('Salesperson', 80000, 4),
        ('Lead Engineer', 150000, 1),
        ('Software Engineer', 120000, 1),
        ('Accountant Manager', 160000, 2),
        ('Accountant', 125000, 2),
        ('Legal Team Lead', 250000, 3),
        ('Lawyer', 190000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Ebony', 'Olsen', 3),
        ('Neil', 'Mcbride', 7),
        ('Heyden', 'Powell', 4, 3)
        ('Freyja', 'Hickman', 5),
        ('Mia', 'Vega', 1),
        ('Bill', 'Farrell', 6, 5),
        ('Zaara', 'Yang', 8, 7),
        ('Nellie', 'Wall', 2, 1);