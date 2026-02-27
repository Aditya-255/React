const express = require('express')
const app = express()
const port = 3000
const bodyParser=require('body-parser')
const dbOperaion=require('../queries/dbOperation')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
)
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/users',dbOperaion.getusers)
app.post('/users',dbOperaion.saveuser)
app.put('/users/:id',dbOperaion.updateuser)
app.delete('/users/:id',dbOperaion.deleteuser)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))