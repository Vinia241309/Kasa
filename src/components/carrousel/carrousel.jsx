import React, { useState } from 'react';
import CarouselArrowRight from '../../assets/CarouselArrowRight.png';
import CarouselArrowLeft from '../../assets/CarouselArrowLeft.png';
import './carrousel.css'

const Carousel = ({ carouselImg }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= carouselImg.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? carouselImg.length - 1 : nextIndex;
    });
  };

  const isLastImage = currentIndex === carouselImg.length - 1;
  const isFirstImage = currentIndex === 0;

  return (
    <section className="carousel">
      {carouselImg.length > 0 && (
        <>
          {!isFirstImage && (
            <img
              className="carousel_arrow_left"
              src={CarouselArrowLeft}
              alt="show previous slider"
              onClick={prevSlide}
            />
          )}
          <div className="carousel_image">
            {carouselImg.length > 0 && (
              <img
                src={carouselImg[currentIndex]}
                alt="image"
              />
            )}
          </div>
          {!isLastImage && (
            <img
              className="carousel_arrow_right"
              src={CarouselArrowRight}
              alt="show next slider"
              onClick={nextSlide}
            />
          )}
          <p className='imgCounter'>
            {currentIndex + 1}/{carouselImg.length}
          </p>
        </>
      )}
    </section>
  );
};


export default Carousel;
