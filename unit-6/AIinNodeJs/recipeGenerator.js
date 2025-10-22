import { GoogleGenerativeAI } from "@google/generative-ai";

export const generateRecipe = async (ingredients) => {
  // initialize Gemini client
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: process.env.MODEL });
  const prompt = `
You are a professional chef and recipe creator.
I will give you a list of ingredients.
Generate a recipe strictly in **valid JSON** with the following structure:

{
  "recipeTitle": string,
  "ingredients": [{ "item": string, "quantity": string }],
  "steps": [string],
  "nutrition": { "calories": number, "protein": string, "fat": string, "carbs": string }
}

Use these ingredients: ${ingredients.join(", ")}.
Do not include any extra text, explanation, or markdown.
Only output valid JSON.
`;

  try {
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    // Try to parse the JSON safely
    const jsonStart = responseText.indexOf("{");
    const jsonEnd = responseText.lastIndexOf("}");
    const jsonString = responseText.slice(jsonStart, jsonEnd + 1);
    return JSON.parse(jsonString);
  } catch (err) {
    console.error(err);
    
  }
};
