const express = require("express");
const config = require("./config");
const server = express();
const port = 3010;
const Users = require("./schemas/users");
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
  Users.find(
    {
      login: {
        username: "admin",
        password: "admin123"
      }
    },
    (err, users) => {
      if (err) return console.error(err);
      usersList = users;

      res.send(usersList);
    }
  );
});

products.get("/", (req, res) => {
  res.send("PRODUCTS");
});

server.get("/", (req, res) => {
  res.send("OKEJ");
});

server.use("/users", users);
server.use("/products", products);

server.post("/", (req, res) => {
  let answer = {
    status: 0,
    user: {}
  };

  console.log(req.body);
  Users.find(
    {
      login: {
        username: req.body.username,
        password: req.body.password
      }
    },
    (err, users) => {
      if (err) return console.error(err);

      if (users.length !== 0) {
        answer.status = 1;
        answer.user = users[0];
        res.send(answer);
        console.log("OK");
      } else {
        console.log("NOT OK");
        answer.status = 0;
        res.send(answer);
      }
    }
  );
});

// const adminUser = new Users({
//   login: {
//     username: "admin",
//     password: "admin123"
//   },
//   adress: {
//     city: "Rzeszów",
//     street: "Rejtana"
//   },
//   userData: {
//     name: "Admin",
//     lastname: "Administrator",
//     email: "Admin@adm.pl"
//   }
// });

// console.log(adminUser);

// adminUser.save().then(() => console.log("adminUser"));

server.listen(port, () => console.log(`Listening on port ${port}`));
