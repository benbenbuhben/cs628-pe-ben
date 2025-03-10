const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;
const uri = process.env.ATLAS_URI;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB client setup
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let recipesCollection;

// Connect to MongoDB
async function connectDB() {
  try {
    await client.connect();
    const db = client.db('recipeDB');
    recipesCollection = db.collection('recipes');
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}
connectDB();

// Routes

// Get all recipes
app.get('/api/recipes', async (req, res) => {
  try {
    const recipes = await recipesCollection.find({}).toArray();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
});

// Get a single recipe by id
app.get('/api/recipes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await recipesCollection.findOne({ _id: new ObjectId(id) });
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recipe' });
  }
});

// Add a new recipe
app.post('/api/recipes', async (req, res) => {
  try {
    const newRecipe = req.body; // { name, ingredients, instructions, ... }
    const result = await recipesCollection.insertOne(newRecipe);
    res.status(201).json({ _id: result.insertedId, ...newRecipe });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add recipe' });
  }
});

// Update a recipe by id
app.put('/api/recipes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const result = await recipesCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedData }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json({ message: 'Recipe updated' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update recipe' });
  }
});

// Delete a recipe by id
app.delete('/api/recipes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await recipesCollection.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json({ message: 'Recipe deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete recipe' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
