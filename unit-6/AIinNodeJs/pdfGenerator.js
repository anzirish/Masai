import PDFDocument from "pdfkit";

export const generatePDF = (recipe, res) => {
  const doc = new PDFDocument({ margin: 50 });
  
  // Stream PDF directly to response
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", `attachment; filename="${recipe.recipeTitle}.pdf"`);

  doc.pipe(res);

  // Title
  doc.fontSize(20).text(recipe.recipeTitle, { align: "center", underline: true });
  doc.moveDown(1);

  // Ingredients
  doc.fontSize(14).text("Ingredients:", { underline: true });
  recipe.ingredients.forEach((ing) => {
    doc.fontSize(12).text(`• ${ing.item} — ${ing.quantity}`);
  });
  doc.moveDown(1);

  // Steps
  doc.fontSize(14).text("Steps:", { underline: true });
  recipe.steps.forEach((step, i) => {
    doc.fontSize(12).text(`${i + 1}. ${step}`);
  });
  doc.moveDown(1);

  // Nutrition
  if (recipe.nutrition) {
    const n = recipe.nutrition;
    doc.fontSize(14).text("Nutrition (per serving):", { underline: true });
    doc.fontSize(12).text(`Calories: ${n.calories} kcal | Protein: ${n.protein} | Fat: ${n.fat} | Carbs: ${n.carbs}`);
  }

  doc.end();
};