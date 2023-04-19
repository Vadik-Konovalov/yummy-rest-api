const {
  getAllIngredients,
  getAllRecipesByIngredient,
} = require('../services/ingredientsServices');

// const { contactValidSchema } = require('../service/schemas/contactValidSchema');
// const { ValidationError } = require('../helpers/error');

const get = async (req, res) => {
  const condition = {};

  const results = await getAllIngredients(condition);

  res.json({
    status: 'Success',
    code: 200,
    data: {
      ingretients: results,
    },
  });
};

const getAllRecipesByIngredientController = async (req, res) => {
  console.log(1);
  const results = await getAllRecipesByIngredient(req.body);

    res.json({
      status: 'Success',
      code: 200,
      data: {
        ingretients: results,
      },
    });
  };


module.exports = {
  get,
  getAllRecipesByIngredientController,
};
