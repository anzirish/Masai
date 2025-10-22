import express from "express";
import fs from "fs";

const app = express();
const port = 3000;

app.use(express.json()); // parse json type input body and put it into req.body
app.use(express.urlencoded({ extended: true })); // parse x-www-form.., type input body and put it into req.body

const db = JSON.parse(fs.readFileSync("db.json", "utf-8"));
let dishes = db.dishes;

app.post("/dishes", (req, res) => {
  const { name, price, category } = req.body;
  dishes.push({ id: Date.now(), name, price, category });
  db.dishes = dishes;
  fs.writeFileSync("db.json", JSON.stringify(db, null, 2), "utf-8");
  res.status(202).send("Added a new Dish");
});

app.get("/dishes/get", (req, res) => {
  const name = req.query.name;
  const filteredDishes = dishes.filter((d) =>
    d.name.toLowerCase().includes(name.toLowerCase())
  );
  if (filteredDishes.length == 0) {
    res.status(404).send("No dishes found");
  } else {
    res.json(filteredDishes);
  }
});

app.get("/dishes", (req, res) => {
  res.json(dishes);
});

app.get("/dishes/:id", (req, res) => {
  const id = req.params.id;
  const idx = dishes.findIndex((s) => s.id == id);
  if (idx == -1) {
    res.status(404).send(`Dish not found with this id ${id}`);
  } else {
    res.json(dishes[idx]);
  }
});

app.put("/dishes/:id", (req, res) => {
  const id = req.params.id;
  const idx = dishes.findIndex((s) => s.id == id);
  if (idx == -1) {
    res.status(404).send(`Dish not found with this id ${id}`);
  } else {
    const { name, price, category } = req.body;
    dishes[idx] = { id, name, price, category };
    fs.writeFileSync("db.json", JSON.stringify(db, null, 2), "utf-8");
    res.status(202).send("Updated Dish");
  }
});

app.delete("/dishes/:id", (req, res) => {
  const id = req.params.id;
  dishes = dishes.filter((d) => d.id != id);
  db.dishes = dishes;
  fs.writeFileSync("db.json", JSON.stringify(db, null, 2), "utf-8");
  res.status(202).send("Delted dish");
});

app.use((req, res) => {
  res.send("<p>Unmatched route location</p>");
});

app.listen(port, () => {
  console.log("listening...");
});
