const express = require("express");
const config = require("./config");
const server = express();
const port = 3010;
const Users = require("./schemas/users");
const Products = require("./schemas/product");
const Cart = require("./schemas/cart");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const users = express();
const products = express();
const login = express();
const register = express();
const shoppingCartAdd = express();
const shoppingCartBuy = express();
const shoppingCart = express();

// mongoose.connect(config.db, { useNewUrlParser: true }); // połączenie z bazą danych

mongoose.connect("mongodb://localhost:27017/MusclePower", {
  useNewUrlParser: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("connected");
});

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
let shoppingCartItems = [];

users.get("/", (req, res) => {
  Users.find({}, (err, users) => {
    if (err) return console.error(err);
    usersList = users;

    res.send(usersList);
  });
});

products.get("/", (req, res) => {
  Products.find((err, products) => {
    if (err) return console.error(err);

    productsList = products;

    res.send(productsList);
  });
});

products.all("*", (req, res) => {
  let idProduct = req.path;
  idProduct = idProduct.substr(1, idProduct.length);
  Products.find(
    {
      _id: idProduct
    },
    (err, product) => {
      if (err) return console.error(err);

      // console.log(product);
      res.send(product);
    }
  );
});

//Sprawdzenie danych logowania, odpowiedź (0 bład logowania, 1 logowanie prawidłowe)
login.post("/", (req, res) => {
  let answer = {
    status: 0,
    user: {}
  };

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
      } else {
        answer.status = 0;
        res.send(answer);
      }
    }
  );
});

//rejestracja użytkownika
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

shoppingCartAdd.post("/", (req, res) => {
  const item = Cart({
    items: req.body.item,
    amount: req.body.amount
  });

  let answer = {
    text: "",
    itemAdded: false
  };

  Cart.find(
    {
      items: item.items
    },
    (err, foundItems) => {
      if (err) return console.error(err);

      if (foundItems.length === 0) {
        item.save();
        answer.text = "Dodano do koszyka";
        answer.itemAdded = true;
        res.send(answer);
      } else {
        answer.text = "Produkt jest już w koszyku";
        answer.itemAdded = false;
        res.send(answer);
      }
    }
  );
});

shoppingCart.get("/", (req, res) => {
  Cart.find((err, items) => {
    if (err) return console.error(err);

    shoppingCartItems = items;
  });

  res.send(shoppingCartItems);
});

shoppingCart.all("*", (req, res) => {
  let idItem = req.path;
  idItem = idItem.substr(1, idItem.length);

  Cart.deleteOne(
    {
      _id: idItem
    },
    (err, item) => {
      if (err) return console.error(err);
    }
  );
});

shoppingCartBuy.get("/", (req, res) => {
  Cart.deleteMany({}, err => {
    if (err) console.error(err);
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
  res.send("OK");
});

server.use("/users", users);
server.use("/products", products);
server.use("/login", login);
server.use("/register", register);
server.use("/shoppingCartAdd", shoppingCartAdd);
server.use("/shoppingCart", shoppingCart);
server.use("/shoppingCartBuy", shoppingCartBuy);

server.listen(port, () => console.log(`Listening on port ${port}`));
