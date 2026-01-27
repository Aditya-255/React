const express = require('express')
const app = express()
const port = 3000
const fs=require('fs')
const filePath='todos.json'
function readdata(){
    const todos=fs.readFileSync(filePath)
    if(!todos){
        return []
    }
    else{
        return JSON.parse(todos)
    }
}
function savedata(){

}

// let todos=[]

app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/todo/',(req,res)=>{
    const todos=readdata()
    res.json(todos)
})
app.get('/todo/:id',(req,res)=>{
    const id=req.params.id
    const index=todos.findIndex((todo)=> todo.id==id)
    if(index==-1){
        return res.status(401).json({'message':'no todo with given id:'+id})
    }
    res.status(201).json("todos with is: " + req.params.id)
})

app.post('/todo/',(req,res)=>{
    const title=req.body.title
    const newtodo={
        id:Date.now().toString(),
        title:title,
        isCompleted:false,

    }
    todos.push(newtodo)
    res.status(201).json({'message':'todo created','data':newtodo})
})

app.put('/todo/:id',(req,res)=>{
    const id=req.params.id
    const index=todos.findIndex((todo)=> todo.id==id)
    if(index==-1){
        return res.status(401).json({'message':'no todo with given id:'+id})
    }
    todos[index]={
        ...todos[index],
        title:req.body.title,
    }
    res.status(201).json({'message':'todo updated','data':todos[index]})
})

app.delete('/todo/:id',(req,res)=>{
    const id=req.params.id
    const index=todos.findIndex((todo)=> todo.id==id)
    if(index==-1){
        return res.status(401).json({'message':'no todo with given id:'+id})
    }
    todos=todos.filter((todo)=>todo.id!=id)
    res.send("delete todos with is" + req.params.id)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))