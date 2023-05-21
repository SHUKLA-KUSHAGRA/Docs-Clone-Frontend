import React from 'react'
import Editorial from './Editorial';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

function Screen() {
  return (
    <>
    <header className='flex justify-between items-center p-3 pb-1'>
        <span>
        <Link to = '/'>
            <img src={logo} alt='logo' height='50px' width='50px' className='cursor-pointer'/>
        </Link>
        </span>
    </header>
    <Editorial/>
    </>
  )
}

export default Screen;