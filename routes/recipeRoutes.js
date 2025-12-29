const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const recipeController = require('../controllers/recipeController');

// Validation middleware
const validateRecipe = [
  check('title', 'Title is required').not().isEmpty(),
  check('ingredients', 'Ingredients are required').isArray({ min: 1 }),
  check('instructions', 'Instructions are required').not().isEmpty(),
  check('prepTime', 'Prep time is required').isNumeric(),
  check('cookTime', 'Cook time is required').isNumeric(),
  check('servings', 'Servings are required').isNumeric(),
  check('difficulty', 'Difficulty is required').isIn(['Easy', 'Medium', 'Hard'])
];

// Routes
router.post('/', validateRecipe, recipeController.createRecipe);
router.get('/', recipeController.getAllRecipes);
router.get('/:id', recipeController.getRecipeById);
router.put('/:id', validateRecipe, recipeController.updateRecipe);
router.delete('/:id', recipeController.deleteRecipe);

module.exports = router;