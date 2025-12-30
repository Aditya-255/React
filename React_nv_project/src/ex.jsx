import React , {Component} from "react";
class Ex extends Component {
    constructor(){
        super()
        this.state={
            textcolor:"black",
            backcolor:"white"
        }
    }

    render(){
        return(
            <div>
                <button onClick={()=>{
                    this.setState({textcolor:"green"})
                }
                }>Green</button>
                <button onClick={()=>{
                    this.setState({textcolor:"red"})
                }
                }>Red</button>
                <button onClick={()=>{
                    this.setState({textcolor:"blue"})
                }
                }>Blue</button>
                <button  onClick={()=>{
                    this.setState({textcolor:"yellow"})
                }}>
                    yellow
                </button>
                <br />
                <button onClick={()=>{
                    this.setState({backcolor:"green"})
                }
                }>Green</button>
                <button onClick={()=>{
                    this.setState({backcolor:"red"})
                }
                }>Red</button>
                <button onClick={()=>{
                    this.setState({backcolor:"blue"})
                }
                }>Blue</button>
                <button onClick={()=>{
                    this.setState({backcolor:"yellow"})
                }
                }>Yellow</button>

                <br />

                <h1 style={{color: this.state.textcolor, backgroundColor: this.state.backcolor}}>Sample Text</h1>
            </div>
        )
    }
}
export default Ex;