import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageHome from './pages/PageHome';
import {CatalogPage}  from "./pages/catalog/CatalogPage";
import ContactPage from './pages/ContactPage';
import Blog from './pages/Blog';
import PageError from './pages/PageError';
import Category from './pages/category/Category';
import {ProductItem} from './pages/product/ProductItem';
import {Layout} from './layout/Layout';
import {SubCategory} from './pages/category/SubCategory';
import {SearchResultPage} from './layout/SearchResultPage';
// import './index.css';


function Shop() {
  return (
    <BrowserRouter>
      
      
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<PageHome />} />
          <Route path="category/:categoryName" element={<Category />} />
          <Route path="product/:id" element={<ProductItem />} />
          <Route path="/category/:categoryName/:subCategoryName" element={<SubCategory />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="/search/:searchString" element={<SearchResultPage />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contacts" element={<ContactPage />} />
          <Route path="*" element={<PageError />} />
        </Route>
      </Routes>
      
      
    </BrowserRouter>
  );
}

export default Shop;
