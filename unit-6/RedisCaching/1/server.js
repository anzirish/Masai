const fs = require("fs");
const express = require("express");
const redisClient = require("./redisConfig.js");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  let DB = "";
  try {
    let items = await redisClient.get("items");
    if (items) {
      items = JSON.parse(items);
      DB = "Redis";
    } else {
      items = JSON.parse(fs.readFileSync("db.json", "utf-8"));
      await redisClient.set("items", JSON.stringify(items));
      DB = "FS local";
    }
    res.json({ items, source: DB });
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.post("/", async (req, res) => {
  try {
    const { name, type } = req.body;
    const items = JSON.parse(fs.readFileSync("db.json", "utf-8"));
    items.push({ id: Date.now(), name, type });
    fs.writeFileSync("db.json", JSON.stringify(items), "utf-8");
    await redisClient.del("items");
    res.json({ msg: "item added" });
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.put("/:id", async(req, res) => {
  try {
    const { name, type } = req.body;
    const items = JSON.parse(fs.readFileSync("db.json", "utf-8"));
    const id = req.params.id; // conversion in number type is required for strict check
    const item = items.find((i) => i.id == id);
    if (!item) return res.json({ error: "Item doesn'r exists with this id" });
    Object.assign(item, { name, type });
    fs.writeFileSync("db.json", JSON.stringify(items), "utf-8");
    await redisClient.del("items");
    res.json({ msg: "item updated" });
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.delete("/:id", async(req, res) => {
  try {
    let items = JSON.parse(fs.readFileSync("db.json", "utf-8"));
    const id = req.params.id;
    const item = items.find((i) => i.id == id);
    if (!item) return res.json({ error: "Item doesn'r exists with this id" });
    items = items.filter((i) => i.id != id);
    fs.writeFileSync("db.json", JSON.stringify(items), "utf-8");
    await redisClient.del("items");
    res.json({ msg: "item deleted" });
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.use((req, res) => res.json({ error: "Invalid route" }));

app.listen(3000, () => console.log("listening..."));
