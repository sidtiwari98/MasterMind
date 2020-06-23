import React from 'react'
import './layout.css'
import {Link} from "gatsby"

const Layout = ({children}) => {
  return (
    <div className="main_container">
      <h1 className={"heading"}>MasterMind</h1>
        <Link to="/Game%20Rules/game_rules/">Rules</Link>
        <Link to="/"> Play </Link>
      {children}
      <div className={"footer"}>
        <ul>
          <li><a className={"social_media_links"} href="https://github.com/sidtiwari98" target={"_blank"}>Github</a>
          </li>
          <li><a className={"social_media_links"} href="https://www.linkedin.com/in/siddharth-dev-tiwari/"
                 target={"_blank"}>LinkedIn</a></li>
          <li><a className={"social_media_links"} href="mailto:siddhdt@gmail.com">Email</a></li>
          <li>
            <p>👋</p>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default Layout
