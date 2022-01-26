const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
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
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ errors: [{ msg: "User already exists" }] });
      }
      //see if user exists

      //Get users gravatar

      //Encrypt password

      //Return jsonwebtoken
      res.send("User route");
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }

    x;
  }
);

module.exports = router;
