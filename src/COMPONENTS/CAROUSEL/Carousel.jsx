import React from 'react'
import './carousel.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { ImageData } from './ImageData';
const Carousel = () => {
    return (
        <>
            <div className="arrowdown-wrapper">

                <div className="carousel-banner">
                    The Smartest Way to display Property
                </div>

                <OwlCarousel className='owl-theme' loop margin={10} items={1} autoplay={true} >



                    {ImageData.map((images, index) => (
                        <div className='item' style={{ backgroundColor: 'red', height: '100vh' }} key={index}>

                            <div className="pics" key={index} style={{ backgroundColor: 'yellow', height: '100vh', width: '100%' }}>{(<img src={images.image} alt='pic' style={{ backgroundColor: 'yellow', height: '100vh', width: '100%' }} />)}</div>
                        </div>
                    ))}


                </OwlCarousel>

            </div>
        </>
    )
}

export default Carousel
