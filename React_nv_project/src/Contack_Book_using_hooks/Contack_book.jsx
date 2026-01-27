import React,{useState} from 'react'



const Contack_book = () => {
  const [Contack, setContack] = useState([]);
  const [Fname, setFname] = useState('');
  const [Lname, setLname] = useState('');
  const [Phone, setPhone] = useState('');

 const addContact=()=>{
   if(Fname.trim()==='' ||
    Lname.trim()===''||
    Phone.trim()===''
  ){
    return;}
    const newContact={
      id:Date.now(),
      Fname:Fname,
      Lname:Lname,
      Phone:Phone
    }
    setContack([...Contack],newContact)
    setFname('')
    setLname('')
    setPhone('')
 }
  
  return (
    <div className='flex flex-col items-center'>
      <input
      className='border-black border-2'
      value={Fname}
      type="text" placeholder='First Name'
      onChange={(e)=>setFname(e.target.value)} />
      <br />
      <br />
      <input 
      value={Lname}
      className='border-black border-2'
      type="text" placeholder='Last Name'
      onChange={(e)=>setLname(e.target.value)} />
      <br />
      <br />
      <input 
      value={Phone}
      className='border-black border-2'
      type="text" placeholder='Phone'
      onChange={(e)=>setPhone(e.target.value)}
      />
      <br />
      <br />
      <button onClick={addContact}>Add Contack</button>

      <br /><br /><br />
      <ul>
        {Contack.map((y)=>{
          
        })}
      </ul>
    </div>
  )
}

export default Contack_book
