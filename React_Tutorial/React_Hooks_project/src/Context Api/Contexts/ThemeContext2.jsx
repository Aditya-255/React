import React, { createContext } from 'react'

export const PostDataContext=createContext()
const ThemeContext2 = (props) => {
  return (
    <div>
      <PostDataContext.Provider value="Abc">
        {props.children}
      </PostDataContext.Provider>
    </div>
  )
}

export default ThemeContext2
