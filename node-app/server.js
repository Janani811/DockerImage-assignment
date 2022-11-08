const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
  <h1>Hello all!</h1>
  <h1>From Inside the very basic Node app!</h1> 
  `);
});

app.listen(3000);
