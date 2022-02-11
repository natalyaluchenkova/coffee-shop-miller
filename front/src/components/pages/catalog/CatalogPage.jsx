import React from 'react';
import { useState } from 'react';
import Catalog from "./Catalog";
import Header from '../../layout/Header';
import '../../../css/category.css'

const CatalogPage = () => {        
    
    return <div >
        <Header />
        <div className='catalogPage'><Catalog /></div>
        
    </div>
}

export {CatalogPage};