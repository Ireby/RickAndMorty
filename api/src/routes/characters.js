const express = require("express");
const router = express.Router();
const { union } = require("../utils/Epicontroller");


router.get("/", async (req, res) => {
  try {
    const result = await union();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
