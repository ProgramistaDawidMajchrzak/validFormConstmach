import React from 'react';
import './Header.css';
import logo from './logo-true.png';

export default function Header() {
    return (
        <div className='header-box'>
            <h3>Formularz</h3>
            <h4>serwisowy węzła betoniarskiego firmy</h4>
            <img src={logo} alt="logo-constmach-partner" />
        </div>
    )
}
