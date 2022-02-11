import { Link } from 'react-router-dom';
import React from 'react';

export const BurgerList = () => {
    return (
        <ul className='burgerOpenList'>
            <li><Link to='/catalog'>Каталог товаров</Link></li>
            <li><Link to='/blog'>Блог</Link></li>
            <li><Link to='/contacts'>Контакты</Link></li>
        </ul>
    )
}