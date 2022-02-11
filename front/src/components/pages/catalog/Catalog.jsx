import React from 'react';
import { useEffect, useState } from 'react';
import { getCategories } from '../../../api';
import { Preloader } from '../../Preloader';
import { CatalogItem } from './CatalogItem';

function Catalog() {
  const [categories, setCategories] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(res);
        setIsLoad(true);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!isLoad) return <Preloader />;

  let key = 0;

  return (
    <div className='catalogItem' id='catalogId'>
      <h3>Каталоги нашей продукции</h3>
      <ul className='catalogList'>
        {categories.map((category) => (
          <li>
            <CatalogItem
              key={'category_' + key++}
              item={category}
            ></CatalogItem>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalog;
