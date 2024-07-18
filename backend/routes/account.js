const express = require("express");

const app = express();

const router = express.Router();

router.get("/", (req, res) => {
  res.send("THis is my api/v2/accounts");
});

module.exports = router;
