import React from 'react'
import { Component } from 'react'

class Todolist extends Component{
    constructor(props){
        super(props);
        this.state={
            todos:[],
            ipvalue:'',
        }
    }
    handleinput=(e)=>{
        this.setState({
            ipvalue:e.target.value,
        })
        // console.log(this.state.ipvalue);
    }
    addtodo=()=>{
        if(this.state.ipvalue.trim()=='') return ;
        const newtodo={
            id:Date.now(),
            text:this.state.ipvalue,
            completed:false,
        }
        // console.log(newtodo.text);
        this.setState((prevState)=>({
            todos:[...prevState.todos,newtodo],
            ipvalue:'',
        }))
    }

    deletetodos=(id)=>{
        this.setState((prevState)=>({
            todos:prevState.todos.filter((e)=>e.id!==id),

        }))
    }
    toggletodo=(id)=>{
        this.setState((prevState)=>({
            todos:prevState.todos.map((e)=>
                e.id==id ? {...e,completed:!e.completed}:e,
            )
        }))
    }


        render(){
        const {todos,ipvalue}=this.state;
        return(
            <>
            <input type="text" value={ipvalue} onChange={this.handleinput} />
            <br />
            <button onClick={this.addtodo}>
                Add
            </button>
            <br />
            <ul>
                {
                    todos.map((e)=>(
                        <li key={e.id}>
                            <input type="checkbox"  onChange={()=>this.toggletodo(e.id)}/>
                            <p style={{
                                color: e.completed ? 'green' :'red'
                            }}>{e.text}</p>
                        <button onClick={()=>this.deletetodos(e.id)}>Delele</button>
                        </li>
                    ))
                }

            </ul>
            </>
        );
    }
    }
    


export default Todolist
