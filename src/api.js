import { API_URL } from './config';

const getMealById = async (mealId) => {
  const response = await fetch(`${API_URL}lookup.php?i=${mealId}`);
  const awaitRes = await response.json();
  return awaitRes;
};

const getAllCategories = async () => {
  const response = await fetch(`${API_URL}categories.php`);
  const awaitRes = await response.json();
  return awaitRes;
};

const getFilteredCategory = async (catName) => {
  const response = await fetch(`${API_URL}filter.php?c=${catName}`);
  const awaitRes = await response.json();
  return awaitRes;
};

export { getMealById, getAllCategories, getFilteredCategory };
