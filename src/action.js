import { fetchCategories, fetchRegions, fetchRestaurants } from './services/api';

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function setCategory(id, name) {
  return {
    type: 'setCategory',
    payload: {
      id,
      name,
    },
  };
}

export function setRegion(id, name) {
  return {
    type: 'setRegion',
    payload: {
      id,
      name,
    },
  };
}

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));
  };
}

export function loadRestaurants(categoryId, region) {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants(categoryId, region);
    dispatch(setRestaurants(restaurants));
  };
}

export default {};
