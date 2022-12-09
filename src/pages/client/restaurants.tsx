import { gql, useQuery } from "@apollo/client"
import { restaurantsPageQuery, restaurantsPageQueryVariables } from '../../__generated__/restaurantsPageQuery';

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
`
export const Restaurants = () => {

  const { data, loading, error } = useQuery<
    restaurantsPageQuery,
    restaurantsPageQueryVariables
  >(RESTAURANT_QUERY, {
    variables: {
      input: {
        page: 1
      }
    },
  });

  console.log(data);
  return (
    <div>
      restaurants
    </div>
  )
}