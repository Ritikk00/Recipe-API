# Recipe Management API

A complete CRUD API for managing recipes built with Node.js, Express, and MongoDB.

## Features

- Create, read, update, and delete recipes
- MongoDB database integration
- Input validation
- RESTful API design

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with your MongoDB connection string
4. Start the server: `npm run dev`

## API Endpoints

- `POST /api/recipes` - Create a new recipe
- `GET /api/recipes` - Get all recipes
- `GET /api/recipes/:id` - Get a single recipe
- `PUT /api/recipes/:id` - Update a recipe
- `DELETE /api/recipes/:id` - Delete a recipe

## Sample Request Body

```json
{
  "title": "Pasta Carbonara",
  "ingredients": [
    {
      "name": "Spaghetti",
      "amount": "400",
      "unit": "g"
    }
  ],
  "instructions": "1. Cook pasta...",
  "prepTime": 10,
  "cookTime": 15,
  "servings": 4,
  "difficulty": "Medium"
}
