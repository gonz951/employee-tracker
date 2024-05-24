DO $$
DECLARE 

BEGIN

INSERT INTO department (name)
VALUES  ('Engineering'),
        ('Finance'), 
        ('Legal'), 
        ('Sales');

INSERT INTO roles (title, salary, department)
VALUES  ('Sales Lead', 100000, 4),
        ('Salesperson', 80000, 4),
        ('Lead Engineer', 150000, 1),
        ('Software Engineer', 120000, 1),
        ('Accountant Manager', 160000, 2),
        ('Accountant', 125000, 2),
        ('Legal Team Lead', 250000, 3),
        ('Lawyer', 190000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Ebony', 'Olsen', 3, null),
        ('Neil', 'Mcbride', 7, null),
        ('Heyden', 'Powell', 4, 3),
        ('Freyja', 'Hickman', 5, null),
        ('Mia', 'Vega', 1, null),
        ('Bill', 'Farrell', 6, 5),
        ('Zaara', 'Yang', 8, 7),
        ('Nellie', 'Wall', 2, 1);

RAISE NOTICE 'Seeds planted';

EXCEPTION
    WHEN OTHERS THEN
        RAISE NOTICE 'An error occured: %', SQLERRM;
        ROLLBACK;

END $$;