const express = require("express");
const server = express();
const port = 3010;
const Users = require("./schemas/user");
const Products = require("./schemas/product");

server.get("/", (req, res) => {
  res.send("OKEJ");
});

server.listen(port, () => console.log(`Listening on port ${port}`));
