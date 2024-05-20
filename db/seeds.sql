INSERT INTO department (name)
VALUES  ('Engineering'),
        ('Finance'), 
        ('Legal'), 
        ('Sales');

INSERT INTO role (id, title, salary, department)
VALUES  (1, 'Sales Lead', 100000, 'Sales'),
        (2, 'Salesperson', 80000, 'Sales'),
        (3, 'Lead Engineer', 150000, 'Engineering'),
        (4, 'Software Engineer', 120000, 'Engineering'),
        (5, 'Accountant Manager', 160000, 'Finance'),
        (6, 'Accountant', 125000, 'Finance'),
        (7, 'Legal Team Lead', 250000, 'Legal'),
        (8, 'Lawyer', 190000, 'Legal')

INSERT INTO employee (id, first_name, last_name, 