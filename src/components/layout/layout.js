import React from 'react'
import './layout.css'

const Layout = ({children}) => {
  return(
    <div className= "main_container">
      <h1 className={"heading"}>MasterMind</h1>
      {children}
    </div>
  )
};

export default Layout
