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
module.exports = router;
