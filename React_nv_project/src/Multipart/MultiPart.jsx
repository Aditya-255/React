import React,{Component} from "react"

class MultiPart extends Component{
    constructor(){
        super()
        this.state={
            t1:'',
            t2:'',
            t3:'',
            t4:'',
            t5:'',
            t6:'',
            t7:'',
            t8:'',
            t9:'',
            ind:0
        }
        
    }
    onclicknext = () => {
    this.setState((prevState) => ({
      index: prevState.index + 1,
    }));
  };
  onclickprevious = () => {
    this.setState((prevState) => ({
      index: prevState.index - 1,
    }));
  };
   

    render(){
        return(
            <div>
            <div className="flex justify-center items-center flex-col" style={{ display: this.state.ind === 0 ? "" : "none" }}>
                <h1>Part1</h1>
            <input type="text" value={this.state.t1} onChange={
                (e)=>{this.setState(
                    {t1:e.target.value}
                )}
            } placeholder="Enter value 1"/>
            <br />
            <input type="text"  onChange={
                (e)=>{this.setState(
                    {t2:e.target.value}
                )}
            } value={this.state.t2} placeholder="Enter value 2"/>
            <br />
            <input type="text"  onChange={
                (e)=>{this.setState(
                    {t3:e.target.value}
                )}
            } value={this.state.t3} placeholder="Enter value 3"/>
            <br />
            <button>Prev</button>
            <button>Next</button>
            <br /><br />
            </div>
            <div className="flex justify-center items-center flex-col" style={{ display: this.state.ind === 1 ? "" : "none" }}>
                <h1>Part2</h1>
            <input type="text" value={this.state.t4} onChange={
                (e)=>{this.setState(
                    {t4:e.target.value}
                )}
            } placeholder="Enter value 1"/>
            <br />
            <input type="text"  onChange={
                (e)=>{this.setState(
                    {t5:e.target.value}
                )}
            } value={this.state.t5} placeholder="Enter value 2"/>
            <br />
            <input type="text"  onChange={
                (e)=>{this.setState(
                    {t6:e.target.value}
                )}
            } value={this.state.t6} placeholder="Enter value 3"/>
            <br />
            <button >Prev</button>
            <button>Next</button>
            <br /><br />
            </div><div className="flex justify-center items-center flex-col" style={{ display: this.state.ind === 2 ? "" : "none" }}>
                <h1>Part3</h1>
            <input type="text" value={this.state.t7} onChange={
                (e)=>{this.setState(
                    {t7:e.target.value}
                )}
            } placeholder="Enter value 1"/>
            <br />
            <input type="text"  onChange={
                (e)=>{this.setState(
                    {t8:e.target.value}
                )}
            } value={this.state.t8} placeholder="Enter value 2"/>
            <br />
            <input type="text"  onChange={
                (e)=>{this.setState(
                    {t9:e.target.value}
                )}
            } value={this.state.t9} placeholder="Enter value 3"/>
            <br />
            <button onClick={this.onclickprevious}>Prev</button>
            <button onClick={this.onclicknext}>Next</button>
            <br /><br />
            </div>

        </div>
        )
    }
}
export default MultiPart;