const { Recipes } = require("./models");

const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.originalUrl}`);
  next();
});
// add this line
app.use(express.json()); // this allows us to send JSON formatted bodies in our requests
// ... route handlers

app.get("/recipes", async (req, res) => {
  try {
    const allRecipes = await Recipes.findAll();
    res.status(200).json(allRecipes);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

app.get("/recipes/:recipeID", async (req, res) => {
  const recipeId = req.params.recipeID;
  try {
    const recipe = await Recipes.findOne({ where: { id: recipeId } });
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).send({ message: "Recipe cannot be found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
    console.log(error.message);
  }
});

app.post("/recipes", async (req, res) => {
  try {
    newRecipe = await Recipes.create(req.body);
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.patch("/recipes/:recipeID", async (req, res) => {
  const recipeId = req.params.recipeID;
  try {
    const [numAffectedRows, affectedRows] = await Recipes.update(req.body, {
      where: { id: recipeId },
      returning: true,
    });
    if (numAffectedRows > 0) {
      res.status(200).json(affectedRows[0]);
    } else {
      res.status(404).send({ message: "Recipe cannot be found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
    console.log(error.message);
  }
});

app.delete("/recipes/:recipeID", async (req, res) => {
  const recipeId = req.params.recipeID;
  try {
    const deleteRecipe = await Recipes.destroy({ where: { id: recipeId } });
    if (deleteRecipe > 0) {
      res.status(200).send({ message: "Recipe was deleted Successfully!" });
    } else {
      res.status(404).send({ message: "Recipe cannot be found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
    console.log(error.message);
  }
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
