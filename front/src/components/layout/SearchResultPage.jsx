import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {ProductCard} from "../pages/product/ProductCard";

import Header from "./Header";
import {Preloader} from "../Preloader";
import {getAutoComplete} from "../../api";

export function SearchResultPage () {
    const [products, setProducts] = useState([]);
    const {searchString} = useParams();

    useEffect(() => {
        if (searchString.length < 2) return;
        getAutoComplete(searchString).then(res => {setProducts(res);})
            .catch(err =>
                console.log(err))
    }, [searchString]);

    return <div>
        <Header />
        <div className='searchList'>
            {
                !products.length ? (<Preloader/>) :
                    products.map(product =>
                        <ProductCard product={product} />                            
                    )
            }
        </div></div>
}