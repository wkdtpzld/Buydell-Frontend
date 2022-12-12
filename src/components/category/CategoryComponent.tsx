import { CategoriesContainer, CategoryItem, Category, CategoryName } from '../../styles/Categories/AllCategories';
import { restaurantsPageQuery } from '../../__generated__/restaurantsPageQuery';

interface IProps {
  data: restaurantsPageQuery | undefined;
}

export const CategoriesComponent = ({data}:IProps) => {
  return (
    <CategoriesContainer>
      {data?.allCategories.categories?.map((category, index) => (
        <CategoryItem key={index}>
          <Category></Category>
          <CategoryName>{category.name}</CategoryName>
        </CategoryItem>
      ))}
    </CategoriesContainer>
  );
}