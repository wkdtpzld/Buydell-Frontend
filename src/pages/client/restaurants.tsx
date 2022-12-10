import { gql, useQuery } from "@apollo/client";
import {
  restaurantsPageQuery,
  restaurantsPageQueryVariables,
} from "../../__generated__/restaurantsPageQuery";
import { CategoriesWrap } from "../../styles/common/Slider";
import { SliderComponent } from "../../components/common/Slider";
import { CategoriesContainer, Category, CategoryItem, CategoryName } from "../../styles/Categories/AllCategories";

const RESTAURANT_QUERY = gql`
  query restaurantsPageQuery($input: RestaurantsInput!) {
    allCategories {
      ok
      error
      categories {
        id
        name
        coverImg
        slug
        restaurantCount
      }
    }
    restaurants(input: $input) {
      ok
      error
      totalPage
      totalItems
      restaurants {
        id
        name
        coverImg
        address
        category {
          name
        }
        isPromoted
      }
    }
  }
`;
export const Restaurants = () => {
  const { data, loading, error } = useQuery<
    restaurantsPageQuery,
    restaurantsPageQueryVariables
  >(RESTAURANT_QUERY, {
    variables: {
      input: {
        page: 1,
      },
    },
  });

  return (
    <CategoriesWrap>
      <SliderComponent />
      {!loading && (
        <CategoriesContainer>
          {data?.allCategories.categories?.map((category, index) => (
            <CategoryItem>
              <Category key={index}></Category>
              <CategoryName>종류이름</CategoryName>
            </CategoryItem>
          ))}
        </CategoriesContainer>
      )}
    </CategoriesWrap>
  );
};