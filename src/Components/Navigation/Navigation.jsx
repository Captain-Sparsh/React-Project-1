import React from 'react'
import './navigation.css';

const Navigation = () => {
  return (
    <div>
      <header className='container'>
        <div className='logo'>
            <a href="#"><img src="src\assets\brand_logo.png" alt="logo_Nike" /></a>
        </div>
       
            <ul className='links'>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Contact</a></li>
            </ul>
   

        <div className='button-1'>
            <button>Login</button>
        </div>
      </header>
    </div>
  )
}

export default Navigation
