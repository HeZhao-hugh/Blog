const express = require("express");
const router = express.Router();

// @route GET api/auth
// @desc Test route
// @sccess Public
router.get("/", (req, res) => res.send("User route"));

module.exports = router;
