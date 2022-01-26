const express = require("express");
const router = express.Router();

// @route GET api/users
// @desc register user
// @sccess Public
router.get("/", (req, res) => {
  console.log(req.body);
  res.send("User route");
});

module.exports = router;
