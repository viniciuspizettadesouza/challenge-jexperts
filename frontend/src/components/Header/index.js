import React from "react"

import "./header.css"

import logo from '../../assets/logo.jpeg'

const Header = () => {
  return (
    <div>
      <header className="app-header">
        <img src={logo} alt="logo" />
      </header>
    </div>
  )
}
export default Header