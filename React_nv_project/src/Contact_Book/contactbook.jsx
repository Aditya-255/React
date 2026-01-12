import React from 'react'

class Contactbook extends React.Component {
    constructor(props){
        super(props)
        this.state={
            contacts:[],
            fname:'',
            lname:'',
            phone:'',
        }
    }
    handleFname=(e)=>{
        this.setState({fname:e.target.value})
    }
    handleLname=(e)=>{
        this.setState({lname:e.target.value})
    }
    handlePhoneno=(e)=>{
        this.setState({phone:e.target.value})
    }
    addContact=()=>{
        if(
            this.state.fname.trim()===''||
            this.state.lname.trim()===''||
            this.state.phone.trim()===''
        ) return;
        
        const newContact={
            id:Date.now(),
            fname:this.state.fname,
            lname:this.state.lname,
            phone:this.state.phone,
            visible:false
        }
        this.setState((prevState)=>(
            {
            contacts:[newContact,...prevState.contacts],
            fname:'',
            lname:'',
            phone:'',
        }
        ))
    }

    toggleDisplay=(id)=>{
        this.setState((prevState)=>(
            {
            contacts:prevState.contacts.map((y)=>
            y.id ===id ? {...y,visible:!y.visible}:y)
        }
        ))
    }

    deletecontact=(id)=>{
        this.setState((prevState)=>({
            contacts:prevState.contacts.filter((y)=> y.id !== id),
        }))
    }
    render(){
        const {contacts,fname,lname,phone}=this.state;
        return(
            <>
            <input type="text" value={fname} placeholder="First Name" onChange={this.handleFname}/>
            <br />
            <input type="text" value={lname} placeholder='Last Name' onChange={this.handleLname}/>
            <br />
            <input type="text" value={phone} placeholder='Phone Number' onChange={this.handlePhoneno}/>
            <br />
            <button onClick={this.addContact}>Add Contact</button>
            <br />
            <ul>
                {
                    contacts.map((e)=>(
                        <li key={e.id}>
                            {e.fname} <button>View</button><button onClick={()=>this.deletecontact(e.id)}>Delete</button>
                            <div style={{display: e.visible ? '':'none'}}>
                            {' '}
                            {e.lname}+{'-'}+{e.phone}
                            </div>
                        </li>
                    ))
                }
            </ul>
            </>
        )
    }
}

export default Contactbook


//Create class based component named calculator
// it will take i/p from user inform of buttons
// prepares a button grid as per windows calc
// layout and implement evaluation logic to show result
//  3 state var 1 op,2 op,3 op
// implement basic ope, +,-,*,/ 