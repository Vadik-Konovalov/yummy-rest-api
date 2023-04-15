const express = require('express');
const router = express.Router();
const { get, search } = require('../controllers/recipesController');

const { asyncWrapper } = require('../helpers/asyncWrapper')
// const { authMiddleware } =  require('../middlewares/authMiddleware')
// const { upload } = require('../middlewares/uploadMiddleware')

// recipes/category-list
// recipes/main-page
// recipes/:category
// recipes/:id
// recipes/search
// recipes/ownRecipes
// recipes/favorite
// recipes/popular-recipe

router.get('/', asyncWrapper(get));

router.get('/search', asyncWrapper(search));

module.exports = { recipesRouter: router };