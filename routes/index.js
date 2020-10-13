const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({
    message: "Welcome to demo of Node Express app deployment in EC2",
  });
});

module.exports = router;
