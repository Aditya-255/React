import React,{useState} from 'react'

const Hook2 = () => {
    const [user, setUser] = useState(
        {
            name:"abc",
            age:25,
            ce:false,
            city:"rajkot"
        }
    );
  return (
    <div>
      <input type="text" placeholder='name' value={user.name} 
        onChange={(e)=>setUser({...user,name:e.target.value})}
          />
        <input type="number" placeholder='age' value={user.age} 
        onChange={(e)=>setUser({...user,age:e.target.value})}
          />
          <input type="checkbox" checked={user.ce} 
        onChange={()=>setUser({...user,ce:!user.ce})}
          />
          <input type="text" placeholder='city' value={user.city} 
        onChange={(e)=>setUser({...user,city:e.target.value})}
          />  

          <h1>Name:
            {user.name}
          </h1>
          <h2> age: 
            {user.age}
          </h2>
          <h3>CE: {user.ce ? "yes" : "no"}</h3>
          <h4>Rajkot: {user.city}</h4>
    </div>
  )
}

export default Hook2
