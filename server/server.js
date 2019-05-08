const express = require("express");
const config = require("./config");
const server = express();
const port = 3010;
const Users = require("./schemas/user");
const Products = require("./schemas/product");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const users = express();
const products = express();

mongoose.connect(config.db, { useNewUrlParser: true });

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

server.use(bodyParser.json());

let productsList = [];
let usersList = [];

users.get("/", (req, res) => {
  Users.find((err, users) => {
    if (err) return console.error(err);
    usersList = users;

    res.send(usersList);
  });
});

products.get("/", (req, res) => {
  res.send("PRODUCTS");
});

server.get("/", (req, res) => {
  res.send("OKEJ");
});

server.use("/users", users);
server.use("/products", products);

// const adminUser = new Users({
//   login: {
//     username: "admin",
//     password: "admin123",
//     email: "Admin@adm.pl"
//   },
//   adress: {
//     city: "Rzeszów",
//     street: "Rejtana"
//   },
//   userData: {
//     name: "Admin",
//     lastname: "Administrator"
//   }
// });

// console.log(adminUser);

// adminUser.save().then(() => console.log("adminUser"));

server.listen(port, () => console.log(`Listening on port ${port}`));
