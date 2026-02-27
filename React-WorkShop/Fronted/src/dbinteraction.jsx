
import { useState } from "react";
import axios from "axios";

export default function DBInteraction(){
    const [user, setUser] = useState();

    const getUser = async () => {
        try{
            const res=await axios.get("http://localhost:3000/users")
            setUser(res.data)
        }
        catch(error){   
            console.log(error)
        }
    }

    return (
        <>
        <button onClick={getUser}>Get User</button>
        <ul>
            {user && user.map(
                (user) => <li>{user.id}
                {user.name}
                {user.run}
                {user.country}
                </li>
            )}
        </ul>
        </>
    )
}
