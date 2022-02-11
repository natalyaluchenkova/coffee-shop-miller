import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategoryName } from '../../../api';
import { getCategoryByName } from '../../../api';
import Header from '../../layout/Header';
import { ProductsList } from './ProductList';
import { CategoryList } from './CategoryList';
import '../../../css/category.css';
import img1 from '../../img/back_category.png';
import img2 from '../../img/background_up.png';
import img3 from '../../img/beans2.png';
import img4 from '../../img/back_orange.png';
import img5 from '../../img/cup_beans.png';

export default function Category() {
  const [category, setCategory] = useState({});
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    getCategoryByName(categoryName)
      .then((res) => {
        setCategory(res);
        console.log(res);
        //setIsLoad(true);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  useEffect(() => {
    getProductsByCategoryName(categoryName)
      .then((res) => {
        setProducts(res);
        //setIsLoad(true);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  // useEffect(() => {
  //   document.getElementById('root').style.backgroundImage =
  //     "none";

  //   // document.getElementById('root').style.backgroundImage =
  //   //   "url('" + img1 + "')";
  //   // document.getElementById('root').style.backgroundRepeat = 'no-repeat';
  //   // document.getElementById('root').style.backgroundPosition =
  //   //   '0 160px';
  //   // document.getElementById('root').style.backgroundSize =
  //   //   '100% auto';

  //   return () => {
  //     document.getElementById('root').style.backgroundImage =
  //       "url('" + img2 + "'), url('" + img3 + "'), url('" + img4 + "')";
  //     document.getElementById('root').style.backgroundRepeat = 'no-repeat';
  //     document.getElementById('root').style.backgroundPosition =
  //       'top right, 0 1550px, 0 1045px';
  //     document.getElementById('root').style.backgroundSize = 'auto auto';
  //   };
  // }, []);

  return (
    <div >
      <Header />
      <CategoryList category={category} />
      <ProductsList products={products} />
    </div>
  );
}
