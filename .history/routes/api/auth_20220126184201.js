const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");
// @route GET api/auth
// @desc Test route
// @sccess Public
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user);
  } catch (err) {}
});

module.exports = router;
