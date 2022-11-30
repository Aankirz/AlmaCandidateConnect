import React from 'react'
import './Sidebar.css'

import Logo from "../../assets/logo.png";

const Sidebar = () => {
  return (
    <div className='Sidebar'>
        <div className="logo">
            {/* Logo */}
            <img src={Logo} alt="" height="70px" width="70px"/>
            <span>
                Al<span>u</span>mni
            </span>
        </div>

        {/* Menu */}
        <div className="menu">
            <div className="menuItem">
                 Icon
            </div>
            <span>Dashboard</span>
        </div>
        

    </div>
  )
}

export default Sidebar