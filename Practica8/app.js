const express = require('express')
const mysql = require('mysql')

const app = express()

app.use(express.json())

var connection

const openConnection = () => {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306, 
        user: 'root',
        password: 'Univalle',
        database: 'practica8'
    })
}

const closeConnection = () => {
    connection.end()
}

app.get('/professors', (req, res) => {
    openConnection()

    connection.query('SELECT id, first_Name AS firstName, last_Name AS lastName,  birth_Date AS birthDate, city, salary FROM professor;'
    , (error, rows) => {
        if (error) {
            console.log(error)
            res.writeHead(500, {'Content-type' : 'application/json'})
            res.end(JSON.stringify({Response: 'Query execution error'}))
            closeConnection()
            return
        }

        res.writeHead(200, {'Content-type' : 'application/json'})
        res.end(JSON.stringify(rows))
        closeConnection()
    })
})

app.post('/professors', (req, res) => {
    openConnection()
    let professor = req.body;

    connection.query('INSERT INTO professor (firstName, lastName, birthDate, city, salary) ' + 
                     'VALUES (?, ?, ?, ?, ?)', [professor.firstName, professor.lastName, professor.birthDate, professor.city, professor.salary],
                    (error, rows) => {
                        if (error) {
                            console.log(error)     
                        }

                        res.writeHead(200, {'Content-type' : 'application/json'})
                        res.end(JSON.stringify('OK'))
                        closeConnection()
                    })
})

app.put('/professors', (req, res) => {
    openConnection()
    let professor = req.body;
    
    connection.query('UPDATE professor SET firstName = ?, city = ?, salary = ? ' + 
    'WHERE id = ?', 
    [professor.firstName, professor.city, professor.salary, professor.id],
    (error, rows) => {
       if (error) {
           console.log(error)     
       }

       res.writeHead(200, {'Content-type' : 'application/json'})
       res.end(JSON.stringify('OK'))
       closeConnection()
   })
})

app.delete('/professors/:id', (req, res) => {
    openConnection()
    let id = req.params.id;

    connection.query('DELETE FROM professor WHERE id = ?', [id],
    (error, rows) => {
        if (error) {
            console.log(error)     
        }
 
        res.writeHead(200, {'Content-type' : 'application/json'})
        res.end(JSON.stringify('OK'))
        closeConnection()
    })
})
app.listen(3000, () => {
    console.log('Server Initialized')
})