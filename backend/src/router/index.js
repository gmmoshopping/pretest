const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const dashboardController = require('../controller/dashboardController');

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Website : api.pretest.co.th",
  });
});

router.get(
  "/dashboard",
  dashboardController.getData,
  function (req, res) {}
);

router.get(
  "/dashboard/code/:id",
  dashboardController.getByCode,
  function (req, res) {}
);

router.get(
  "/dashboard/name/:name",
  dashboardController.getByName,
  function (req, res) {}
);

router.post(
  "/addDashboard",
  dashboardController.SaveDB,
  function (req, res) {}
);

router.put(
  "/updateDashboard/:id",
  dashboardController.updateDB,
  function (req, res) {}
);

router.delete(
  "/deleteDashboard/:id",
  dashboardController.deleteDB,
  function (req, res) {}
);

module.exports = router;
