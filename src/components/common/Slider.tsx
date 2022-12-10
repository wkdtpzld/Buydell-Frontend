import { DecreaseBox, IncreaseBox, Slide, SlideDescription, SlideImage, Slider, SliderWrap, SlideSubject } from "../../styles/common/Slider";
import slideOne from "../../images/sliderone.jpg";
import slideTwo from "../../images/slidertwo.jpg";
import slideThree from "../../images/sliderThree.jpg";
import { useRef, useState, useEffect } from 'react';

export const SliderComponent = () => {

  const TOTAL_SLIDES = 2;
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderRef = useRef<HTMLInputElement>(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    if (sliderRef.current != null) {
      sliderRef.current.style.transition = "all 0.5s ease-in-out";
      sliderRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    }
  }, [currentSlide]);


  return (
    <SliderWrap>
      <Slider ref={sliderRef}>
        <Slide>
          <SlideImage src={slideOne} />
          <SlideSubject>힘들었던 하루</SlideSubject>
          <SlideDescription>맛있는 음식을 주문해보세요.</SlideDescription>
        </Slide>
        <Slide>
          <SlideImage src={slideTwo} />
          <SlideSubject>오늘은 고기</SlideSubject>
          <SlideDescription>육즙 가득한 맛을 느껴보세요.</SlideDescription>
        </Slide>
        <Slide>
          <SlideImage src={slideThree} />
          <SlideSubject>달콤한 간식</SlideSubject>
          <SlideDescription>폭신한 카스테라는 어떠세요?</SlideDescription>
        </Slide>
      </Slider>
      <IncreaseBox onClick={nextSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </IncreaseBox>
      <DecreaseBox onClick={prevSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </DecreaseBox>
    </SliderWrap>
  );
};
