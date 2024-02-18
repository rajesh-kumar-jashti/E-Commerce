import React, { useState } from 'react'
import './Navbar.css'
import cart_icon from '../Assets/cart_icon.png'
import { NavLink } from 'react-router-dom'
import { Squash as Hamburger } from 'hamburger-react'

const Navbar = () => {
    const [menu,setMenu] = useState("shop")
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <NavLink to='/' style={{textDecoration: 'none'}}><p>SHOPPERS ZONE</p></NavLink>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul className='nav-menu'>
                <li onClick={() => { setMenu("shop") }}>
                    <NavLink style={{textDecoration: 'none', color: 'black'}} to='/'>Shop</NavLink>
                </li>
                <li onClick={() => { setMenu("men") }}>
                    <NavLink style={{textDecoration: 'none', color: 'black'}} to='/men'>Men</NavLink>
                </li>
                <li  onClick={() => { setMenu("women") }}>
                    <NavLink style={{textDecoration: 'none', color: 'black'}} to='/women'>Women</NavLink>
                </li>
                <li onClick={() => { setMenu("kids") }}>
                    <NavLink style={{textDecoration: 'none', color: 'black'}} to='/kids'>Kids</NavLink>
                </li>
            </ul>
            <div className="nav-login-cart">
                <NavLink to='/login'><button>Login</button></NavLink>
                <NavLink to='/cart'><img src={cart_icon} alt="" /></NavLink>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
