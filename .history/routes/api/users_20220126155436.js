const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
// @route GET api/users
// @desc register user
// @sccess Public
router.post(
  "/",
  [
    check("name", "Name is requred").not().isEmpty(),
    check("email", "Please inlcude a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    console.log(req.body);
    res.send("User route");
  }
);

module.exports = router;
