import express from "express";
import { configDotenv } from "dotenv";
import { generateRecipe } from "./recipeGenerator.js";
import { generatePDF } from "./pdfGenerator.js";
import path from "path"

configDotenv();
const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

app.post("/generate-recipe", async (req, res) => {
  const { ingredients } = req.body;
  const recipe = await generateRecipe(ingredients);
  res.json({ recipe });
});

app.post("/download-recipe-pdf", async (req, res) => {
  const { ingredients } = req.body;
  const recipe = await generateRecipe(ingredients);
  generatePDF(recipe, res);
});

app.post("/recipe-html", async (req, res) => {
  try {
    const { ingredients } = req.body;
    const recipe = await generateRecipe(ingredients);

    res.render("recipe", { recipe });
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to generate recipe HTML");
  }
});

app.listen(3000, () => console.log("listening..."));
