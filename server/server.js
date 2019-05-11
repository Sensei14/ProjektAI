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
const login = express();
const register = express();

mongoose.connect(config.db, { useNewUrlParser: true }); // połączenie z bazą danych

// ustawienie dostepu
server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

server.use(bodyParser.json()); //parsowanie na json

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

//Sprawdzenie danych logowania, odpowiedź (0 bład logowania, 1 logowanie prawidłowe)
login.post("/", (req, res) => {
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

register.post("/", (req, res) => {
  const user = new Users({
    login: {
      username: req.body.username,
      password: req.body.password
    },
    adress: {
      city: req.body.city,
      street: req.body.street
    },
    userData: {
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email
    }
  });

  user.save().then(() => {
    res.send({
      status: 1,
      text: "Użytkownik zarejestrowany"
    });
  });
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

server.get("/", (req, res) => {
  res.send("OKEJ");
});

server.use("/users", users);
server.use("/products", products);
server.use("/login", login);
server.use("/register", register);

server.listen(port, () => console.log(`Listening on port ${port}`));
