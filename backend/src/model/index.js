const util = require("util");
require('dotenv').config()
const SetupsConfig = require('../config/index')
const fs = require("fs");
const path = require("path");
const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(SetupsConfig.DBdatabase, SetupsConfig.DBuser, SetupsConfig.DBpassword, {
  host:SetupsConfig.DBhost,
  port:SetupsConfig.DBport,
  dialect: SetupsConfig.DBdialect,
  logging: false
});
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
if(SetupsConfig.ModelSynchronization == true){
  sequelize.sync({ force: true });
  console.log("All models were synchronized successfully.");
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.DashbordDB = require('../schema/index')(sequelize, Sequelize);

module.exports = db;