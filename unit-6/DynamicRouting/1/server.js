import express from "express";

const app = express();
const port = 3000;

app.get("/home", (req, res) => {
  res.send("<p>Welcome to home page</p>");
});

app.get("/aboutus", (req, res) => {
  res.json({ message: "Welcome to About Us" });
});

app.get("/contactus", (req, res) => {
  res.send({ Name: "Tanishq", Address: "India" });
});

app.use((req, res) => {
  res.status(404).send("404 not found");
});

app.listen(port, () => {
  console.log("server is listening at port ", port);
});
