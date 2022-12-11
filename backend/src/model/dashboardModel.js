const express = require("express");
const Sequelize = require("sequelize");
const db = require("../model/index");
const { QueryTypes } = require("sequelize");
const Op = db.Sequelize.Op;
const DashbordDB = db.DashbordDB;
class dashboardModel {
  static findAll() {
    return DashbordDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }
  static findById(id) {
    return DashbordDB.findAll({
      where: {
        _id: {
          [Op.eq]: id,
        },
      },
    })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  static findByName(name) {
    return DashbordDB.findAll({
      where: {
        Seed_RDCSD: {
          [Op.eq]: name,
        },
      },
    })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  } 
  static updateDB(id, body) {
    return DashbordDB.update(body, { where: { _id: id } })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  static deleteDB(id) {
    return DashbordDB.destroy({
      where: { _id: id },
    })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  static insertDB(payload) {
    return DashbordDB.create(payload)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  static getGroupByProvince(){
    return db.sequelize
      .query(
        "SELECT Seed_Year, Seed_RDCSD, COUNT(*) as Total FROM tbl_pretest GROUP BY Seed_RDCSD, Seed_Year;",
        {
          type: db.sequelize.QueryTypes.SELECT,
        }
      )
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });  
  }
}
module.exports = dashboardModel;
