import { Link } from 'react-router-dom';
import React from "react";
import "../../css/header-footer.css";
import logo from '../img/logo.png';


function Footer() {
    return (
        <footer>
            <Link className="logo logo-footer" to='/'><img src={logo} className='logoImage' alt="logo" /></Link>
            <nav className='down-nav'>
                <ol className='footer-nav'>
                <li>
                <Link to='/catalog'>Каталог товаров</Link>
            </li>
            <li>
              <Link to='/blog'>Блог</Link>
            </li>
            <li>
              <Link to='/contacts'>Контакты</Link>
            </li>
                </ol>
            </nav>             
        </footer>
    );
}

export default Footer;