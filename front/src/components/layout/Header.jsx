import { Link } from 'react-router-dom';
import React from 'react';
import {Autocomplete} from './autocomplete/Autocomplete';
import {Cart} from "../shop/Cart";
import {Burger} from "../layout/burger/Burger";
import '../../css/header-footer.css';
import logo from '../img/logo.png';
// import search from '../img/search.png';
// import cart from '../img/cart.png';
import man from '../img/man.png';

function Header() {
  return (
    <header>       
        <Link className='logo logo-header' to='/'>
          <img src={logo} className='logoImage' alt='logo' />
        </Link>        
        <nav className='up-nav'>
          <ul className='header-nav'>
            <li>              
              <Link to='/catalog'>Каталог товаров</Link>
            </li>
            <li>
              <Link to='/blog'>Блог</Link>
            </li>
            <li>
              <Link to='/contacts'>Контакты</Link>
            </li>
          </ul>
        </nav> 
        <ol className='header-sign'>
          <li><div className='autocompliteInHeader'><Autocomplete /></div></li>          
          {/* <li className='header-sign-img'>
            
             <a href='#!'>
              <img src={search} alt='search' />
            </a> 
          </li>             */}
          <li className='header-sign-img'>
            <Cart />
            {/* <a href='#!'>
              <img src={cart} alt='cart' />
            </a> */}
          </li>
          <li className='header-sign-img'>            
            <a href='#!'>
              <img src={man} className='smallHeaderImg smallHeaderImgMan' alt='man' />
            </a>
          </li>
          <li>
            <div className='burgerHeader'>
              <Burger />
            </div>
          </li>        
        </ol>
      </header>
  );
}

export default Header;
