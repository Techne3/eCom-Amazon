import express from "express";
import data from "./data";

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.listen(8080, () => {
  console.log("server running on http://localhost:8080");
});
