import express from "express";
import { getFileInfo } from "./fileinfo.js";
import { parseUrl } from "./urlparser.js";

const app = express();
const port = 3000;

app.get("/test", (req, res) => {
  res.send("testing....");
});

app.get("/fileinfo", (req, res) => {
  const { filepath } = req.query;
  if (!filepath) {
    res.json({ error: "No file path provided" });
    return;
  }

  const info = getFileInfo(filepath);
  res.json(info);
});

app.get('/parseurl', (req, res) =>{
    const {url} = req.query
    if(url){
        res.json(parseUrl(url))
    }
})

app.listen(port, () =>  {
  console.log("Listening at port ", port);
});
