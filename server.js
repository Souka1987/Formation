/*
 * Server.js
 ***************/

const express = require("express"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  app = express(),
  port = process.env.PORT || 5000;
(morgan = require("morgan")),
  // env
  require("dotenv").config();
// console.log(process.env);

// Connection avec MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connecté à MongoDB"))
  .catch((err) => console.log(err));

// parse application/json
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// Morgan => Middleware de journalisation des requêtes HTTP pour node.js
app.use(morgan("dev"));

//   Import du router
const ROUTER = require("./router");
app.use("/", ROUTER);

// Ecoute sur le port 5000 à la date d'aujourhui + ajout de l'horraire
app.listen(port, function () {
  console.log(
    `Ecoute le port ${port}, lancé le : ${new Date().toLocaleString()}`
  );
});
