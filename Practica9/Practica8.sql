CREATE TABLE professor
(
id INT NOT NULL AUTO_INCREMENT,
first_Name varchar(70) NOT NULL,
last_Name varchar(70) NOT NULL,
birth_Date date not null,
city varchar(50) not null,
salary decimal(7,2) not null,
primary key(id)

)
engine InnoDB;

INSERT INTO professor(first_Name, last_Name, birth_Date, city, salary)
VALUES('Juan', 'Perez', '1987-01-10', 'Cochabamba', '3000');

INSERT INTO professor(first_Name, last_Name, birth_Date, city, salary)
VALUES('Pedro', 'Lopez', '1990-05-10', 'La Paz', '5000');

INSERT INTO professor(first_Name, last_Name, birth_Date, city, salary)
VALUES('Elmer', 'Flores', '1991-08-10', 'Santa Cruz', '8000');

SELECT id, first_Name AS firstName, last_Name AS lastName, birth_Date AS birthDate, city, salary FROM professor;







