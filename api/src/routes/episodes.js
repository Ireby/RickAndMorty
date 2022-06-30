const express = require("express");
const router = express.Router();
const { Episode } = require("../db");
const { apiEpi } = require("../utils/Epicontroller");

router.get("/", async (req, res) => {
  try {
    const result = await Episode.findAll();
    res.send(result).status(200);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
