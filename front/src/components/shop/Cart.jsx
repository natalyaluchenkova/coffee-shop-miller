import React, {useContext} from 'react';
import {ShopContext} from '../../context';
import CartImg from '../img/cart.png';
import {BasketList} from "./BasketList";
import '../../css/basket.css';
import {Alert} from "./Alert";

function Cart() {
    const {order, alertName, isBasketShow, handleBasketShow } = useContext(ShopContext);
    
    const quantity = order.length;
    console.log(order)
    return (<>
            {alertName && <Alert />}
        <div className='basketWidget' onClick={handleBasketShow} >
        <img src={CartImg} className='smallHeaderImg' alt="alt" />
        <div className="cartQuantity">
                  {quantity ? <span >{quantity}</span>
                  : <span >0</span>}
        </div>
        </div>
            {isBasketShow && (<BasketList/>)}
  </>
  )
}

export {Cart}