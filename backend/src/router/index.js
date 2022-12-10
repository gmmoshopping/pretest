const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const dashboardController = require('../controller/dashboardController');
const crudController = require('../controller/crudController');

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Website : api.pretest.co.th",
  });
});

router.get(
  "/dashboardgroupbyprovince",
  dashboardController.getGroupByProcince,
  function (req, res) {}
);

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
  crudController.SaveDB,
  function (req, res) {}
);

router.put(
  "/updateDashboard/:id",
  crudController.updateDB,
  function (req, res) {}
);

router.delete(
  "/deleteDashboard/:id",
  crudController.deleteDB,
  function (req, res) {}
);

module.exports = router;
