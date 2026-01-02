console.log("Hello")

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/name', (req, res) => res.send('Welocome Raju!'))
app.get('/students', (req, res) => res.json({name: 'Rushikesh', age: 24, city: 'Pune'}))
app.get('/Uni', (req, res) => res.send('RKU'))
app.get('/fullname/:fname/:lname', (req, res) => res.json(
    {
        
    },

))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//create end point
// 1 /students: which will print student details
// 2. /Uni: print RKU
// 3. create end point which will accept your fname and last name and print full name


// Create End point to get 2 number from user and perform all arithmatic operation