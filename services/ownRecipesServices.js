const { OwnRecipes } = require("./schemas/ownRecipes");

const OwnerRecipes = OwnRecipes 
const getAllOwnRecipes = async (owner) => {
  console.log(OwnRecipes);
  return OwnRecipes.find(owner);
  
};

const getOwnRecipesById = (id) => {
  return OwnRecipes.findOne({ _id: id });
};

const addRecipe = (body) => {
  return OwnRecipes.create(body);
};

const deleteRecipe = (id) => {
  return OwnRecipes.findByIdAndRemove({ _id: id });
};

const updateRecipeStatus = (id, body) => {
  return OwnRecipes.findByIdAndUpdate({ _id: id }, body, {
    new: true,
  });
};

module.exports = {
  getAllOwnRecipes,
  getOwnRecipesById,
  deleteRecipe,
  addRecipe,
  updateRecipeStatus,
  OwnerRecipes
};
