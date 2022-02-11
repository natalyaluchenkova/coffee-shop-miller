import React, { useEffect, useState }  from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {getProductsBySubCategoryName} from '../../../api';
import {ProductCard} from "../product/ProductCard";
import Header from '../../layout/Header';
import '../../../css/subCategory.css';

import img2 from '../../img/background_up.png';
import img3 from '../../img/beans2.png';
import img4 from '../../img/back_orange.png';



export function SubCategory () {
    const [products, setProducts] = useState([]);
    const {subCategoryName} = useParams();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    console.log(subCategoryName)

    useEffect(() => {
        getProductsBySubCategoryName(subCategoryName).then(res => {
            setProducts(res);
            //setIsLoad(true);
            console.log(res);
        })
            .catch(err =>
                console.log(err))
    },[subCategoryName]);

    useEffect(() => {
        document.getElementById('root').style.backgroundImage = 'none';
          
    
        return () => {
          document.getElementById('root').style.backgroundImage =
            "url('" + img2 + "'), url('" + img3 + "'), url('" + img4 + "')";
          document.getElementById('root').style.backgroundRepeat = 'no-repeat';
          document.getElementById('root').style.backgroundPosition =
            'top right, 0 1550px, 0 1045px';
          document.getElementById('root').style.backgroundSize = 'auto auto';
        };
      }, []);

    return <div>
        <Header />
        <div classname='subStr'>
        <button type='button' className='btnBack' onClick={goBack}><i className="fas fa-caret-left iconBack"></i>
        Назад</button>
        {products.length ? <h1 className='subcatName'>{products[0].subCatName}</h1> : null}
        <div className='productListSub'>
        {            
            products.map(product =>
                <ProductCard product={product} />
                )
        }
    </div></div></div>
}

