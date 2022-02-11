import React, {useState, useEffect} from 'react';
import {BurgerList} from './BurgerList';
import '../../../css/burger.css';

export const Burger = () => {
  const [isMenuShow, setMenuShow] = useState(false);

  const handleMenuShow = () => {
    setMenuShow(!isMenuShow);
  } 

  return(
        <div className="burgerWrapper">
            <div className='burger-toggle' onClick={handleMenuShow}>
              {
                isMenuShow
                  ? <i className="fas fa-times"></i>
                  : <i className="fas fa-bars"></i>
              }
            </div>
            {
              isMenuShow && <BurgerList />
            }
    </div>
    )
}