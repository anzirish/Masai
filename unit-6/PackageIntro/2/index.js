import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Server is running on http://localhost:3000");
});

app.get("/home", (req, res) => {
  res.send("This is home page");
});

app.get('/contactus', (req, res) =>{
  res.send('Contact us at contact@com')
})

app.listen(port, () => {
  console.log("App is listening on port :", port);
});
