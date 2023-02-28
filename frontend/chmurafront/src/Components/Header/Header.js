import React from "react";
import {BrowserRouter as Router, Route, Routes, Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import './Header.css';


const Header = () => {
    
    const logout = () => {
        sessionStorage.removeItem('access');
        sessionStorage.removeItem('refresh');
      };

    let [isLoggedIn, setLoggedStatus] = useState(false);

    if(sessionStorage.getItem("access"))
    {
        isLoggedIn = true;
    }
    

    return (
    <div>
        <div className='navLinks'>
            {isLoggedIn == false ? 
                <Link  to='/login' className='navLink'> Zaloguj się</Link> :
                <Link onClick={logout}  to='/login' className='navLink'> Wyloguj się</Link>}
        </div>
    </div>
    )
}

export default Header