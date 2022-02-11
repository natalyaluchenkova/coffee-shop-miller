import { useParams } from "react-router-dom";
import {useEffect, useState, useContext} from "react";
import { getProductById  } from '../../../api';
import {Preloader} from '../../Preloader';
import PageError from '../PageError';
import Header from '../../layout/Header';
import star from '../../img/Group_stars.png';
import cups from '../../img/product-item-cups.png';
import back_img from '../../img/back-product-page.png';
import img2 from '../../img/background_up.png';
import img3 from '../../img/beans2.png';
import img4 from '../../img/back_orange.png';
import '../../../css/product.css';
import {ShopContext} from "../../../context";

const ProductItem = () => {
    const [product, setProduct] = useState({});
    const [isLoad, setIsLoad] = useState(false);
    const {id} = useParams();
    const {addToBasket} = useContext(ShopContext);

    useEffect( () => {
        getProductById(id).then(res => {
                setProduct(res);
                setIsLoad(true);
                // console.log(res);
            })
            .catch(err =>
                console.log(err))
    },[id]);

    // useEffect(() => {
    //     document.getElementById('root').style.backgroundImage =
    //     "none";

    //     // document.getElementById('root').style.backgroundImage =
    //     //   "url('" + back_img + "')";
    //     // document.getElementById('root').style.backgroundRepeat = 'no-repeat';
    //     // document.getElementById('root').style.backgroundPosition =
    //     //   '0 160px';
    //     // document.getElementById('root').style.backgroundSize =
    //     //   '100% auto';
    
    //     return () => {
    //       document.getElementById('root').style.backgroundImage =
    //         "url('" + img2 + "'), url('" + img3 + "'), url('" + img4 + "')";
    //       document.getElementById('root').style.backgroundRepeat = 'no-repeat';
    //       document.getElementById('root').style.backgroundPosition =
    //         'top right, 0 1550px, 0 1045px';
    //       document.getElementById('root').style.backgroundSize = 'auto auto';
    //     };
    //   }, []);

    if (!isLoad) return (
        <Preloader />    );
    
    if (product) {
        return (
            <div className='productItem'>
                <Header />
                <div className="productHeader">
                    <div className="productItemImg">
                        <img src={"http://localhost:3001" + product.image[0]} alt={product.name} />
                    </div>
                    <div className="productItemDescr">
                        <h2>{product.name}</h2>
                        <h5>{product.manufacturer}</h5>
                        <p className="reviews"><img src={star} alt='star' /><a href='#!'><span className='rate'>4.0</span>(32 отзыва)</a></p>
                        <p className="shortDescription">{product.description}</p>
                         <h4>Характеристики</h4>
                            <ul className="productCharacteristics">
                                {
                                    product.characteristics.map(element =>
                                        (
                                            <li><div className="characteristItem"><p>{element.name}</p> <p className="charProdValue">{element.value}</p></div><hr /></li>
                                        )
                                    )
                                }
                            </ul>
                        <div className="priceBlock">
                            <p className="itemPrice">{product.price_action ? <p><del>{product.price_normal} грн.</del> <br /> {product.price_action} грн.</p>  : product.price_normal + "грн."}</p>
                            
                            <button type='button' 
                                className='btnBuy'
                                onClick={() =>
                                addToBasket({
                                    id: product._id,
                                    name: product.name,
                                    price_action: product.price_action,
                                    price_normal: product.price_normal,                  
                                    img: "http://localhost:3001" + product.image[1],
                                })
                                }
                            >
                                Купить
                            </button>
                        </div>
                                              
                    </div>
                </div>               
                <div className="fullDescription">
                    <div className="full_descr_text">
                    <img src={"http://localhost:3001" + product.image[1]} alt={product.name} />{product.description_full}</div>
                </div>               
                <div className="additionalInfo">                        
                    <h5>Дополнительно</h5>
                    <p>Разнообразный и богатый опыт новая модель организационной деятельности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание модели развития.</p>
                    <p>Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития.</p>
                    <p>Реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. С другой стороны реализация намеченных плановых заданий требуют от нас анализа существенных финансовых и административных условий.</p>
                    <img src={cups} alt='cups' />
                </div>
                
               
            </div>
        );}

   else {return <PageError />} 



}

export {ProductItem};