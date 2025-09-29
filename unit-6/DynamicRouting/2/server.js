const express = require("express");

const app = express();
const port = 3000;

app.get("/test", (req, res) => {
  res.send("testing....");
});

app.get("/users/get", (req, res) => {
  res.json({
    name: "Tanishq",
    age: 20,
  });
});

app.get("/users/list", (req, res) => {
  const list = [
    { name: "Tanishq", age: 20 },
    { name: "Kanishq", age: 21 },
    { name: "Anzirish", age: 0 },
  ];
  res.json(list);
});

app.use((req, res) => {
  res.status(404).send("404 not found");
});

app.listen(port, () => {
  console.log("listening/...");
});
