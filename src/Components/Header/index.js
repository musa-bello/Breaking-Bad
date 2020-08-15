import React from 'react'
import logo from '../../image/logo.png';


const Header = () => {
    return (
        <div className="logo-wrapper">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
        </div>
        
    )
}

export default Header
