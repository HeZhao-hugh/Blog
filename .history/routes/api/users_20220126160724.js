const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    //see if user exists

    //Get users gravatar

    //Encrypt password

    //Return jsonwebtoken

    res.send("User route");
  }
);

module.exports = router;
