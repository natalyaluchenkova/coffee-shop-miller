import React from 'react';
import SimpleSlider from '../layout/SimpleSlider';
import Catalog from '../pages/catalog/Catalog';
import SaleBlock from '../layout/SaleBlock';
import '../../css/home.css';
import HeaderHome from '../layout/HeaderHome';
import TelegramBot from '../layout/TelegramBot';
import SaleSlick from "../layout/SaleSlick";

function PageHome() {
  return (
    <div>
      <HeaderHome />
      <SimpleSlider />
      <Catalog />
      <SaleBlock />
      <SaleSlick />
      <TelegramBot />      
    </div>
  );
}

export default PageHome;
