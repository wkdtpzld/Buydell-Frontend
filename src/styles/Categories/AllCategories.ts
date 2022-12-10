import styled from "styled-components"

export const CategoriesContainer = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  justify-content: space-around;
  max-width: 1024px;
  padding-left: 3rem;
  padding-right: 3rem;

  @media screen and (min-width: 320px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  @media screen and (min-width: 1080px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  @media screen and (min-width: 1680px) {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
`

export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`

export const Category = styled.div`
  background: red;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 999px;
  padding: 3rem 3rem 0 0;
`

export const CategoryName = styled.span`
  text-align: center;
  font-size: 0.7rem;
  font-weight: 700;
  margin-top: 0.5rem;
`