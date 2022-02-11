import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import cup from '../img/cup_beans.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../css/simpleSlider.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className='simpleSlider'>
        <Slider {...settings}>
          <div className='slide'>
            <div className='innerSlide'>
              <div className='slideName'>
                <h2>Свежеобжаренный кофе</h2>
                <p>
                  Кофе собственной обжарки из разных стран <br /> произрастания
                  с доставкой на дом.
                </p>
                <p className='bakeCoffee'>
                  Мы обжариваем кофе{' '}
                  <span className='everyWeekend'>каждые выходные.</span>
                </p>
                <Link to='/catalog' className='linkScrollBtn' >Посмотреть каталог</Link>
              </div>
              <div className='coffeeImg'>               
                <img className='cup' src={cup} alt='cup' />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='innerSlide'>
              <div>
                <h2>Свежеобжаренный кофе</h2>
                <p>
                  Кофе собственной обжарки из разных стран <br /> произрастания
                  с доставкой на дом.
                </p>
                <p className='bakeCoffee'>
                  Мы обжариваем кофе{' '}
                  <span className='everyWeekend'>каждые выходные.</span>
                </p>
                <Link to='/catalog' className='linkScrollBtn' >Посмотреть каталог</Link>
              </div>
              <div className='coffeeImg'>               
                <img className='cup' src={cup} alt='cup' />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='innerSlide'>
              <div>
                <h2>Свежеобжаренный кофе</h2>
                <p>
                  Кофе собственной обжарки из разных стран <br /> произрастания
                  с доставкой на дом.
                </p>
                <p className='bakeCoffee'>
                  Мы обжариваем кофе{' '}
                  <span className='everyWeekend'>каждые выходные.</span>
                </p>
                <Link to='/catalog' className='linkScrollBtn' >Посмотреть каталог</Link>
              </div>
              <div className='coffeeImg'>                
                <img className='cup' src={cup} alt='cup' />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
