import express from "express";
import { dataHandler } from "./read.js";
import os from "os";
import dns from "dns";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("");
});

app.get("/test", (req, res) => {
  res.send("Test route is working...");
});

app.get("/readfile", (req, res) => {
  const getData = async () => {
    const data = await dataHandler();
    res.send(data);
  };
  getData();
});

app.get("/systemdetails", (req, res) => {
  const plateform = os.platform();
  const totalMemory = Math.ceil(os.totalmem() / (1024 * 1024 * 1024)) + " GB";
  const freeMemory = Math.ceil(os.freemem() / (1024 * 1024 * 1024)) + " GB";
  const [{ model }] = os.cpus();

  res.send({ plateform, totalMemory, freeMemory, cpuModel: model });
});

app.get("/getip", (req, res) => {
  dns.lookup("masaischool.com", (error, address) => {
    if (error) {
      console.group(error);
      return;
    }

    res.json({
      domain: "https://masaischool.com/",
      ip: address,
    });
  });
});

app.listen(port, () => {
  console.log("Listening at port ", port);
});
