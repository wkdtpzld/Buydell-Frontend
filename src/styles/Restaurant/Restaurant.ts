import styled from "styled-components";

export const RestaurantWrap = styled.div`
display: grid;
grid-template-columns: repeat(3, minmax(0, 1fr));
gap: 2rem;
margin-bottom: 3rem;

@media screen and (min-width: 320px) {
  grid-template-columns: repeat(1, minmax(0, 1fr));
  padding-left: 0.7rem;
  padding-right: 0.7rem;
}

@media screen and (min-width: 768px) {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

@media screen and (min-width: 1080px) {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  padding-left: 3rem;
  padding-right: 3rem;
}

@media screen and (min-width: 1680px) {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  padding-left: 6rem;
  padding-right: 6rem;
}
`;

export const RestaurantItem = styled.div`
width: 100%;
border-radius: 0.325rem;
display: flex;
flex-direction: column;
`;

export const RestaurantImage = styled.img`
width: 100%;
object-fit: cover;
min-height: 300px;
max-height: 300px;
border-top-left-radius: 0.325rem;
border-top-right-radius: 0.325rem;
margin-bottom: 0.8rem;
`;

export const RestaurantName = styled.h1`
font-size: 1.2rem;
font-weight: 600;
`;

export const RestaurantAddress = styled.h2`
font-size: 0.9rem;
`;

export const RestaurantCategory = styled.span`
font-size: 0.95rem;
width: 100%;
border-top-width: 2px;
margin-top: 0.7rem;
padding-top: 0.7rem;
`;
