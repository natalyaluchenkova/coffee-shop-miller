
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {getSaleProducts} from '../../api';
import {ProductCardSale} from '../pages/product/ProductCardSale';
import "../../css/saleSlider.css";

export default class SaleSlick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
    }
    componentDidMount() {
        getSaleProducts().then(res => {
            this.setState({products: res});
            //console.log(res)
        })
            .catch(err =>
                console.log(err))
    }
    render() {
        const settings = {
            dots: true,
            arrows: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true,
                        arrows: true,
                    }
                },
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,

                    }
                },
                {
                    breakpoint: 880,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }

                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }

                }
            ]
        };

        return (
            <div className='smallSliderSale'>            
                <Slider {...settings}>
                    { this.state.products.map(product =>
                        <ProductCardSale key={product._id} product={product}/>
                        )
                    }
                </Slider>
            </div>
        );
    }
}