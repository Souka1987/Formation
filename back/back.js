/*
 * Server.js
 ***************/

const express = require("express"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  app = express(),
  cors = require("cors"),
  port = process.env.PORT || 5000;
(morgan = require("morgan")),
  // env
  require("dotenv").config();
// console.log(process.env);



app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.header('origin'))
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// Connection avec MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connecté à MongoDB"))
  .catch((err) => console.log(err));

/* Cross-origin resource sharing (CORS) 
  pour lier 2 applications (2 serveurs) distincts*/
app.use(cors());

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
app.use("/api", ROUTER);

// Ecoute sur le port 5000 à la date d'aujourhui + ajout de l'horraire
app.listen(port, function () {
  console.log(
    `Ecoute le port ${port}, lancé le : ${new Date().toLocaleString()}`
  );
});
