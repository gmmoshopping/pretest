const express = require("express");
const { v4: uuid_v4 } = require("uuid");
const moment = require("moment");
const IP = require("ip");
const geoip = require("geoip-lite");
const { promisify } = require("util");
const getIP = promisify(require("external-ip")());
const dashboardModel = require("../model/dashboardModel");
const logger = require("../middleware/logger");

exports.getData = (req, res) => {
  dashboardModel
    .findAll()
    .then((result) => {
      if (result.length > 0) {
        res.json({
          result: result.map((items) => {
            return {
              _id: items._id,
              Seed_RepDate: items.Seed_RepDate,
              StartYear: items.f_startyear,
              Seed_Year: items.Seed_Year,
              Seeds_YearWeek: items.Seeds_YearWeek,
              Seed_Varity: items.Seed_Varity,
              Seed_RDCSD: items.Seed_RDCSD,
              Seed_Stock2Sale: items.Seed_Stock2Sale,
              Seed_Season: items.Seed_Season,
              Seed_Crop_Year: items.Seed_Crop_Year,
            };
          }),
          messagesboxs: "Success",
        });
      } else {
        res.json({
          messagesboxs: "unSuccess",
          recordcount: result.length,
        });
        logger.accessLogger.warn(
          "Warn Call Year by function getAll  " +
            "Send params by " +
            JSON.stringify(req.params),
          JSON.stringify(req.body)
        );
      }
    })
    .catch((error) => {
      res.status(500).json({
        messagesboxs: "unSuccess",
        messages: error,
      });
      logger.accessLogger.error(
        "Error Call Year by function getAll  " +
          error.toString() +
          "Send params by " +
          rJSON.stringify(req.params),
        JSON.stringify(req.body)
      );
    });
  logger.accessLogger.info(
    "Error Info Year by function getAll  " +
      "Send params by " +
      JSON.stringify(req.params),
    JSON.stringify(req.body)
  );
  getIP()
    .then((ip) => {
      logger.ipAddressLogger.info(
        "Call Year by function getAll  Info Publice IP request Server  " +
          ip +
          " Private IP " +
          IP.address() +
          " Get location " +
          JSON.stringify(geoip.lookup(ip)) +
          "Send params by " +
          JSON.stringify(req.params),
        JSON.stringify(req.body)
      );
    })
    .catch((error) => {
      logger.ipAddressLogger.error(
        "Call Year by function getAll  Info Publice IP request Server  " +
          ip +
          " Private IP " +
          IP.address() +
          " Get location " +
          JSON.stringify(geoip.lookup(ip)) +
          " Send params by " +
          JSON.stringify(req.params),
        JSON.stringify(req.body) + " Message Error : " + error.toString()
      );
    });
};

exports.getByCode = (req, res) => {
  dashboardModel
    .findById(req.params.id)
    .then((result) => {
      if (result.length > 0) {
        res.json({
          result: result.map((items) => {
            return {
              _id: items._id,
              Seed_RepDate: items.Seed_RepDate,
              StartYear: items.f_startyear,
              Seed_Year: items.Seed_Year,
              Seeds_YearWeek: items.Seeds_YearWeek,
              Seed_Varity: items.Seed_Varity,
              Seed_RDCSD: items.Seed_RDCSD,
              Seed_Stock2Sale: items.Seed_Stock2Sale,
              Seed_Season: items.Seed_Season,
              Seed_Crop_Year: items.Seed_Crop_Year,
            };
          }),
          messagesboxs: "Success",
        });
      } else {
        res.json({
          messagesboxs: "unSuccess",
          recordcount: result.length,
        });
        logger.accessLogger.warn(
          "Warn Call Year by function updateData  " +
            "Send params by " +
            JSON.stringify(req.params),
          JSON.stringify(req.body)
        );
      }
    })
    .catch((error) => {
      res.status(500).json({
        messagesboxs: "unSuccess",
        messages: error,
      });
      logger.accessLogger.error(
        "Error Call Year by function getHospitalCode  " +
          error.toString() +
          "Send params by " +
          JSON.stringify(req.params),
        JSON.stringify(req.body)
      );
    });
  logger.accessLogger.info(
    "Info Call Year by function getHospitalCode  " +
      "Send params by " +
      JSON.stringify(req.params),
    JSON.stringify(req.body)
  );
  getIP()
    .then((ip) => {
      logger.ipAddressLogger.info(
        "Call Year by function getHospitalCode  Info Publice IP request Server  " +
          ip +
          " Private IP " +
          IP.address() +
          " Get location " +
          JSON.stringify(geoip.lookup(ip)) +
          "Send params by " +
          JSON.stringify(req.params),
        JSON.stringify(req.body)
      );
    })
    .catch((error) => {
      logger.ipAddressLogger.error(
        "Call Year by function getHospitalCode  Info Publice IP request Server  " +
          ip +
          " Private IP " +
          IP.address() +
          " Get location " +
          JSON.stringify(geoip.lookup(ip)) +
          " Send params by " +
          JSON.stringify(req.params),
        JSON.stringify(req.body) + " Message Error : " + error.toString()
      );
    });
};

exports.getByName = (req, res) => {
  dashboardModel
    .findByName(req.params.name)
    .then((result) => {
      if (result.length > 0) {
        res.json({
          result: result.map((items) => {
            return {
              _id: items._id,
              Seed_RepDate: items.Seed_RepDate,
              StartYear: items.f_startyear,
              Seed_Year: items.Seed_Year,
              Seeds_YearWeek: items.Seeds_YearWeek,
              Seed_Varity: items.Seed_Varity,
              Seed_RDCSD: items.Seed_RDCSD,
              Seed_Stock2Sale: items.Seed_Stock2Sale,
              Seed_Season: items.Seed_Season,
              Seed_Crop_Year: items.Seed_Crop_Year,
            };
          }),
          messagesboxs: "Success",
        });
      } else {
        res.json({
          messagesboxs: "unSuccess",
          recordcount: result.length,
        });
        logger.accessLogger.warn(
          "Warn Call Year by function updateData  " +
            "Send params by " +
            JSON.stringify(req.params),
          JSON.stringify(req.body)
        );
      }
    })
    .catch((error) => {
      res.status(500).json({
        messagesboxs: "unSuccess",
        messages: error,
      });
      logger.accessLogger.error(
        "Error Call Year by function getHospitalCode  " +
          error.toString() +
          "Send params by " +
          JSON.stringify(req.params),
        JSON.stringify(req.body)
      );
    });
  logger.accessLogger.info(
    "Info Call Year by function getHospitalCode  " +
      "Send params by " +
      JSON.stringify(req.params),
    JSON.stringify(req.body)
  );
  getIP()
    .then((ip) => {
      logger.ipAddressLogger.info(
        "Call Year by function getHospitalCode  Info Publice IP request Server  " +
          ip +
          " Private IP " +
          IP.address() +
          " Get location " +
          JSON.stringify(geoip.lookup(ip)) +
          "Send params by " +
          JSON.stringify(req.params),
        JSON.stringify(req.body)
      );
    })
    .catch((error) => {
      logger.ipAddressLogger.error(
        "Call Year by function getHospitalCode  Info Publice IP request Server  " +
          ip +
          " Private IP " +
          IP.address() +
          " Get location " +
          JSON.stringify(geoip.lookup(ip)) +
          " Send params by " +
          JSON.stringify(req.params),
        JSON.stringify(req.body) + " Message Error : " + error.toString()
      );
    });
};

exports.getGroupByProcince = (req, res) => {
  dashboardModel.getGroupByProvince()
  .then((result) => {
    if (result.length > 0) {
      res.json({
        result: result.map((items) => {
          return {
            Seed_RDCSD: items.Seed_RDCSD,
            Seed_Year: items.Seed_Year,
            Total: items.Total,
          };
        }),
        messagesboxs: "Success",
      });
    } else {
      res.json({
        messagesboxs: "unSuccess",
        recordcount: result.length,
      });
      logger.accessLogger.warn(
        "Warn Call Year by function updateData  " +
          "Send params by " +
          JSON.stringify(req.params),
        JSON.stringify(req.body)
      );
    }
  })
  .catch((error) => {
    res.status(500).json({
      messagesboxs: "unSuccess",
      messages: error,
    });
    logger.accessLogger.error(
      "Error Call Year by function getHospitalCode  " +
        error.toString() +
        "Send params by " +
        JSON.stringify(req.params),
      JSON.stringify(req.body)
    );
  });
logger.accessLogger.info(
  "Info Call Year by function getHospitalCode  " +
    "Send params by " +
    JSON.stringify(req.params),
  JSON.stringify(req.body)
);
getIP()
  .then((ip) => {
    logger.ipAddressLogger.info(
      "Call Year by function getHospitalCode  Info Publice IP request Server  " +
        ip +
        " Private IP " +
        IP.address() +
        " Get location " +
        JSON.stringify(geoip.lookup(ip)) +
        "Send params by " +
        JSON.stringify(req.params),
      JSON.stringify(req.body)
    );
  })
  .catch((error) => {
    logger.ipAddressLogger.error(
      "Call Year by function getHospitalCode  Info Publice IP request Server  " +
        ip +
        " Private IP " +
        IP.address() +
        " Get location " +
        JSON.stringify(geoip.lookup(ip)) +
        " Send params by " +
        JSON.stringify(req.params),
      JSON.stringify(req.body) + " Message Error : " + error.toString()
    );
  });  
};

exports.dashboardController = (req, res, next) => {};
