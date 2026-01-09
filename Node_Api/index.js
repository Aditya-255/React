const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.all('/',(req,res)=>res.send('from all'))
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/foods{s}', (req, res) => res.send('food or foods`'))
app.post('/', (req, res) => res.send('from post'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.post('/addstudents',(req,res)=>{
    const fname=req.body.fname
    const lname=req.body.lname
    res.send(`welcome ${fname} ${lname}`)
})

// create an  endpoint using post which will accept student's fname and
//  lname and provide the welcome msg

// create endpoint to accept date of birth in dd/mm/yy format if age of user
//  is more than 18 than print message you are eligible for admission else not