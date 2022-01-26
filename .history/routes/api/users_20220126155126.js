const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
// @route GET api/users
// @desc register user
// @sccess Public
router.post("/", [check("name", "Name is requre").not()], (req, res) => {
  console.log(req.body);
  res.send("User route");
});

module.exports = router;
