const { HttpError } = require('../helpers/HttpError');
const { WrongParametersError } = require('../helpers/error');
const { Ingredients } = require('./schemas/ingredients');
const { Recipes } = require('./schemas/recipes');
const { User } = require('./schemas/users');

const getAllIngredients = async () => {
  return Ingredients.find();
};

const getAllRecipesByIngredient = async (request) => {
  console.log(request.ingredient);
  const searchedIngredient = await Ingredients.findOne({ ttl: `${ request.ingredient}` })
  
  if (!searchedIngredient) {
        throw HttpError(404,
          `Failure! There is no ingredient found with name: ${request.ingredient}`
        );
      }
  const baseRecipesByIngredients = await Recipes.find({ ingredients: { $elemMatch: {id: searchedIngredient._id} } })

  // const userRecipecByIngredients = await User.find({$and: [{ ingredients: {$elemMatch: { id: ObjectId(`${ingredient._id}`)}}}, {userId: `${userId}`}]});
  const globalRecipes = [
  // ...userRecipecByIngredients,
  ...baseRecipesByIngredients]
  return globalRecipes
};

module.exports = {
  getAllIngredients,
  getAllRecipesByIngredient,
};
