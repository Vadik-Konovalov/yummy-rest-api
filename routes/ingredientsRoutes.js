const express = require('express');
const router = express.Router();

const { asyncWrapper } = require('../helpers/asyncWrapper');
const { ingredientValidation } = require('../services/schemas/ingredientValidation');
// const { authMiddleware } =  require('../middlewares/authMiddleware')
// const { upload } = require('../middlewares/uploadMiddleware')
const { postIngredientShoppingList, getShoppingList, deleteItemShoppingList } = require('../controllers/shoppingListController');

const {
  get,
  getAllRecipesByIngredientController,
} = require('../controllers/ingredientsController');



router.get('/', asyncWrapper(get));
// get all recipes by ingredient
router.get('/global', ingredientValidation, asyncWrapper(getAllRecipesByIngredientController))

router.get('/list', asyncWrapper(get));


// add ingredient to shopping-list
router.post('/shopping-list', postIngredientShoppingList);

// delete ingredient from shopping list
router.delete('/shopping-list/:id', deleteItemShoppingList)

// get user`s shopping list
router.get('/shopping-list/:userId', getShoppingList);

module.exports = { ingredientsRouter: router };

