const express = require('express');
const router = express.Router();
const { get, searchByTitle, searchByIngredients } = require('../controllers/recipesController');

const { asyncWrapper } = require('../helpers/asyncWrapper')
// const { authMiddleware } =  require('../middlewares/authMiddleware')
// const { upload } = require('../middlewares/uploadMiddleware')

// recipes/category-list
// recipes/main-page
// recipes/:category
// recipes/:id
// recipes/search?title
// recipes/ingredients?ttl
// recipes/ownRecipes
// recipes/favorite
// recipes/popular-recipe

router.get('/', asyncWrapper(get));

router.get('/search', asyncWrapper(searchByTitle));

router.get('/ingredients', asyncWrapper(searchByIngredients));

module.exports = { recipesRouter: router };