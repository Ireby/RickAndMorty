const { Router } = require("express");
const router = Router();

//--------------------------------------

const char = require("./characters");
const epi = require("./episodes");
const charCreate = require("./charPost");

router.use('/characters',charCreate)
router.use("/character", char);
router.use("/episodes", epi);
module.exports = router;
