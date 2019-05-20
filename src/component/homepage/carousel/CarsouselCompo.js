import React from 'react'
import { Carousel } from 'react-bootstrap'
import CakeImg from '../../../images/cake.jpg'
import GifM from '../../../images/more.gif'
import CarouselStyle from './Carousel.module.scss'
const CarsouselCompo = () => {
  return (
    <div>
      <Carousel className={CarouselStyle.headerCarousel}>
        <Carousel.Item>
          <img src={CakeImg} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={CakeImg} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={GifM} alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarsouselCompo
