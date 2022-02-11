import {useContext} from 'react';
import {ShopContext} from '../../context';
import { BasketItem } from "./BasketItem";
import '../../css/basket.css';

function BasketList() {
    const {order = [], handleBasketShow} = useContext(ShopContext);

    // console.log(order);

    const totalPrice = order.reduce((sum, el) => {
        return (el.price_action ? (sum + el.price_action  * el.quantity )
            : (sum + el.price_normal  * el.quantity ))
    }, 0);

    return <div className='basketCard' >
        <div className='basketHeader'>
            <button type="button" onClick={handleBasketShow} className="btnCloseBasket" ><i className="fas fa-times"></i></button>                        
        </div>
        <h4>Корзина</h4>       
        <ul className=' '>
            {
                order.length ? (order.map(item => (
                        <BasketItem key={item.id} {...item} />))
                ) : ( <li className="basketItem">Корзина пуста</li>)
            }
        </ul>        
        <div className="basketFooter">
            <div className='totalPrice'>Общая стоимость: {totalPrice} грн.</div>
            <button type="button" className='btnCloseBasket' onClick={handleBasketShow} >Закрыть</button>
            <button type="button" className='btnBasketBuy' >Оформить заказ</button>
        </div>
    </div>
        
}

export {BasketList}