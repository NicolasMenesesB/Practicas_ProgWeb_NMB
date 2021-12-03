const express = require('express');
const mysql = require('mysql');

const app = express();

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

var connection 

const openConnection = () => {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306, 
        user: 'root',
        password: 'Univalle',
        database: 'Practica8'
    })
}

const closeConnection = () => {
    connection.end()
}

app.get('/professorform', (req, res) => {
    res.render('professorform');
})

app.get('/professors', (req, res) => {
    openConnection()

    connection.query('SELECT id, first_name AS firstName, last_name AS lastName,' +
                     'birth_Date AS birthDate, city, salary FROM PROFESSOR', (error, rows) => {
        if (error) {
            res.writeHead(500, {'Content-Type': 'application/json'})
            res.end(JSON.stringify({Response: 'error'}))
            closeConnection()
            return
        }

        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(rows))
        closeConnection()
    })
})

app.post('/professors', (req, res) => {
    openConnection()
    let professor = req.body

    connection.query('INSERT INTO PROFESSOR(first_Name, last_Name, birth_Date, city, salary) ' +
                     'VALUES (?, ?, ?, ?, ?)', 
                     [professor.firstName, professor.lastName, professor.birthDate, professor.city, professor.salary],
                     (error, rows) => {
        if (error) {
            res.writeHead(500, {'Content-Type': 'application/json'})
            res.end(JSON.stringify({Response: 'error'}))
            closeConnection()
            return
        }

        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(rows))
        closeConnection()
    })
})

app.listen(3000, () => {
    console.log('Server Initialized')
})