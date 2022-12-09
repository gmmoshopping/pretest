const http = require('http');
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const base64 = require('base64url');
const sessions = require('express-session');
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");
const { config } = require('dotenv');
const router = require("./router/index");
const dbcon = require('./model/index')
const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./swagger.json");
const SetupsConfig = require('./config/index')
const oneDay = 1000 * 60 * 60 * 24;

app.use(sessions({
    secret: SetupsConfig.SecretKey,
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false
}));

const allowlist = SetupsConfig.allowList;
app.use(
  cors({
    credentials: false,
    origin: allowlist,
  })
);

var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; 
  } else {
    corsOptions = { origin: false }; 
  }
  callback(null, corsOptions); 
};

app.use("/public", express.static("public"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", allowlist);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Authorization"
  );
  res.header("Access-Control-Max-Age", 3600);
  
  next();
});

module.exports = app;