const express = require("express");
const { todoRouter } = require("./routes/todoRoutes");

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended : true}))

const PORT = 3000;

app.use('/todos', todoRouter)

app.listen(PORT, () => {
  console.log("listening...");
});
