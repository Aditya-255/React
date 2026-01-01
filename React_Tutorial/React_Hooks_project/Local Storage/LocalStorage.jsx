import React from 'react'

const LocalStorage = () => {
    // localStorage.setItem('user','Aditya')
    // console.log(localStorage.getItem('user'))
    // localStorage.removeItem('user')

    const user={
        username:'Aditya',
        age:22,
        city:'Mumbai'
    }
    localStorage.setItem('user',JSON.stringify(user))
    
    
    return (
    <div>
      
    </div>
  )
}

export default LocalStorage
