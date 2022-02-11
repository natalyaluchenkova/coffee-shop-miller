import {useContext} from 'react';
import {ShopContext} from '../../context';
import closeImg from '../img/cross.png';

function BasketItem(props) {
 const {
        id,
        name,        
        img,
        price_action,
        price_normal,
        quantity,
        } = props;

const { removeFromBasket,
        incQuantity,
        decQuantity} = useContext(ShopContext);
    

    return <li className="basketItem" >
                <ul  className='innerBasketItem'>
                <li className='removeBtn'><img src={closeImg}  onClick={() => removeFromBasket(id)} alt="X" /></li>
                <li><img src={img} className='smallImgBasket' alt="alt"/></li>
                <li className='goodsName'>{name}</li>
                <li>{price_action ? price_action : price_normal} грн.</li>
                <li className='goodsQuantity'><span onClick={() => decQuantity(id)}>-</span>
                    <span className='numberQuantity'>{quantity}</span>
                    <span onClick={() => incQuantity(id)}>+</span>
                </li>
                <li >{price_action ?  (price_action* quantity)
                    : (price_normal* quantity)
                } грн.</li>
                
                </ul></li>

}

export {BasketItem}