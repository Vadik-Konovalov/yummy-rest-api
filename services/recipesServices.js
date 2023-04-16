const { Recipes } = require('./schemas/recipes');

// test func, remove
const getAllRecipes = async (condition, pagination) => {
  return Recipes.find(condition, '', pagination);
};

const getRecipes = async (condition, pagination) => {
  const recipes = Recipes.find(condition, '', pagination);
  if (!recipes) {
    // throw new WrongParametersError(`Not found contact id: ${contactId}`);
  }

  return recipes;
};

module.exports = {
  getAllRecipes,
  getRecipes,
};
