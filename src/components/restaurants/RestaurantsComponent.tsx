import { RestaurantAddress, RestaurantCategory, RestaurantImage, RestaurantItem, RestaurantName, RestaurantWrap } from "../../styles/Restaurant/Restaurant";
import { restaurantsPageQuery, restaurantsPageQuery_restaurants_restaurants } from '../../__generated__/restaurantsPageQuery';
import React from "react";

interface IRestaurantProps {
  data: restaurantsPageQuery | undefined;
}

export const RestaurantCompoent = ({data}:IRestaurantProps) => {

  return (
    <RestaurantWrap>
      {data?.restaurants.restaurants?.map((restaurant, index) => (
        <RestaurantItem key={index}>
          <RestaurantImage src={restaurant.coverImg} />
          <RestaurantName>{restaurant.name}</RestaurantName>
          <RestaurantAddress>{restaurant.address}</RestaurantAddress>
          <RestaurantCategory>{restaurant.category?.name}</RestaurantCategory>
        </RestaurantItem>
      ))}
    </RestaurantWrap>
  );
};