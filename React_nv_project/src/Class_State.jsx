import React , {Component} from "react";
class Class_State extends Component {
    constructor(props){
        super(props);
        this.state={
            c:0,
            counter:10
        }
    }
    increment=()=>{
        this.setState({
            c:this.state.c+1
        })
    }
    decrement=()=>{
        this.setState((prevState)=>({
            counter:prevState.counter-1
        }))
    }
    render(){
        return(
            <div >
                <h1>Class State Component</h1>
                <h2>Count: {this.state.c}</h2>
                <button onClick={this.increment}>Increment</button>
                <h2>Counter: {this.state.counter}</h2>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}
export default Class_State;