import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { CategoriesWrap } from "../../styles/common/Slider";
import { SliderComponent } from "../../components/common/Slider";
import { CategoriesComponent } from "../../components/category/CategoryComponent";
import { RestaurantCompoent } from "../../components/restaurants/RestaurantsComponent";
import { useCallback, useEffect, useState } from "react";
import {
  restaurantsPageQuery,
  restaurantsPageQueryVariables,
  restaurantsPageQuery_restaurants_restaurants,
} from "../../__generated__/restaurantsPageQuery";
import { InView } from "react-intersection-observer";

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
      hasNextPage
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
  const [page, setPage] = useState(1);
  const [restaurants, setRestaurants] = useState<
    restaurantsPageQuery_restaurants_restaurants[]
  >([]);
  const [isFetching, setFetching] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);

  const { data, loading, fetchMore } = useQuery<
    restaurantsPageQuery,
    restaurantsPageQueryVariables
  >(RESTAURANT_QUERY, {
    variables: {
      input: {
        offset: 0,
        limit: 1,
      },
    },
  });

  console.log(data);
  

  // useEffect(() => {
  //   if (data?.restaurants) {
  //     setRestaurants(restaurants.concat(data?.restaurants.restaurants!));
  //   }
  // }, [page]);

  // console.log(restaurants);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const { scrollTop, offsetHeight } = document.documentElement;
  //     if (window.innerHeight + scrollTop >= offsetHeight) {
  //       setFetching(true);
  //     }
  //   }
  //   setFetching(true);
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // useEffect(() => {
  //   if (isFetching && hasNextPage) fetchRestaurants();
  //   else if (!hasNextPage) setFetching(false)
  // }, [fetchRestaurants, hasNextPage, isFetching]);

  return (
    <CategoriesWrap>
      <SliderComponent />
      {data && (
        <>
          <CategoriesComponent data={data} />
          <RestaurantCompoent data={data} />
        </>
      )}
      {data &&
        data.restaurants.hasNextPage &&
        (setPage(page + 1),
        (
          <InView
            onChange={async (inview) => {
              if (inview) {
                const len = data.restaurants.restaurants?.length || 0;
                console.log(len);
                await fetchMore({
                  variables: {
                    input: {
                      offset: len,
                      limit: len + 1,
                    },
                  },
                });
              }
            }}
          />
        ))}
    </CategoriesWrap>
  );
};
