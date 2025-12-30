import React, {Component} from "react";

class InputState extends Component{
    constructor(){
        super()
        this.state={
            name:'',
            email:'',
            age:''
        }
    }
    handlename=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    handleEmail=(e)=>{
        this.setState({
            email:e.target.value
        })
    }
    handleAge=(e)=>{
        this.setState({
            age:e.target.value
        })
    }
    render(){
        return(
            <div>
                <input type="text" value={this.state.name} onChange={this.handlename} />
                <input type="text" value={this.state.email} onChange={this.handleEmail} />
                <input type="text" value={this.state.age} onChange={this.handleAge} />

                <h2>Name: {this.state.name}</h2>
                <h2>Email: {this.state.email}</h2>
                <h2>Age: {this.state.age}</h2>
            </div>
        )
    }
}
export default InputState;