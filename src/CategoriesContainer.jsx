import { useDispatch, useSelector } from 'react-redux';

import { setCategory } from './action';

import Categories from './Categories';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, selectedCategoryId } = useSelector((state) => ({
    categories: state.categories,
    selectedCategoryId: state.category.id,
  }));

  const updateSelectedCategory = (category) => {
    dispatch(setCategory(category));
  };

  return (
    <Categories
      categories={categories}
      selectedCategoryId={selectedCategoryId}
      updateSelectedCategory={updateSelectedCategory}
    />
  );
}
