import styled from 'styled-components';

export const CategoriesWrap = styled.div`
  height: 85vh;
  width: 100%;
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const SliderWrap = styled.div`
  position: relative;
  background: black;
`

export const Slider = styled.div`
  width: 100%;
  min-height: 400px;
  max-height: 400px;
  display: flex;
`;

export const Slide = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  flex: 0 0 100%;
`;

export const SlideSubject = styled.div`
  color: white;
  text-shadow: 0px 4px 4px #1d1d1d;
  font-weight: 700;
  font-size: 3rem;
  position: absolute;
  top: 13%;
  left: 10%;
  z-index: 10;
`;

export const SlideDescription = styled.div`
  color: white;
  font-weight: 600;
  font-size: 1.5rem;
  position: absolute;
  top: 43%;
  left: 10%;
  z-index: 10;
`;

export const SlideImage = styled.img`
  width: 100%;
  min-height: 400px;
  max-height: 400px;
  object-fit: cover;
  background: black;
  opacity: 0.6;
`;

export const IncreaseBox = styled.div`
  position: absolute;
  right: 5px;
  top: 50%;
  z-index: 100;
  cursor: pointer;
`;

export const DecreaseBox = styled.div`
  position: absolute;
  left: 5px;
  top: 50%;
  z-index: 100;
  cursor: pointer;
`;
