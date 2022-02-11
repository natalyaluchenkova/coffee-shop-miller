import { useContext } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import star from '../../img/Group_stars.png';
import percent from '../../img/percent.png';
import {ShopContext} from "../../../context";
import '../../../css/saleSlider.css';

export const ProductCardSale = (props) => {
  const {product} = props;
  const {addToBasket} = useContext(ShopContext);
 
  return (
    <div className='cardSale'>
        {
            product.sale && <img src={percent} alt="sale" className='percentImg' />
        }
        <div><img src={star} className='rateStars' alt='star' /><a className='rateNumber' href='#!'><span className='rate'>4.0</span>(32 отзыва)</a></div>      
        <div className='saleProductImg'>
            <img
                src={'http://localhost:3001' + product.image[0]}
                className='productImg'
                alt={product.name}
            />
        </div>
      <Link to={`/product/${product._id}`} >       
      <h5>{product.name}</h5>
      <p className='descriptionProduct'>{product.description_card}</p>
      </Link>
      <ol className='productPrice'>
        <li>
            {
              product.price_action ? <p><del>{product.price_normal} грн.</del> <br /> {product.price_action} грн.</p>  : product.price_normal + "грн."
            } 
        </li>
        <li>
          <button type='button' 
              className='toBasket'
              onClick={() =>
                addToBasket({
                    id: product._id,
                    name: product.name,
                    price_action: product.price_action,
                    price_normal: product.price_normal,                  
                    img: "http://localhost:3001" + product.image[0],
                })
              }
          >
            Купить
          </button>
        </li>
      </ol>
    </div>
  );
};
