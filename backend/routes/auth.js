const express = require("express")
const User = require("../models/User")
const router = express.Router()
const { body, validationResult } = require("express-validator")
const bcrypt = require("bcryptjs")
var jwt = require("jsonwebtoken")
var fetchuser = require("../middleware/fetchuser")

const JWT_SECRET = "JWT_SCRET_KEY"

//ROUTE 1: Create a user using: POST "/api/auth/createuser".No Login Required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //If there is an error  return bad request and error
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    //Check weather the user with this email already present
    try {
      let user = await User.findOne({ email: req.body.email })
      if (user) {
        return res
          .status(400)
          .json({ error: "User with this email already present." })
      }
      const salt = await bcrypt.genSalt(10)
      const secPass = await bcrypt.hash(req.body.password, salt)
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      })
      const data = {
        user: {
          id: user.id,
        },
      }
      const authtoken = jwt.sign(data, JWT_SECRET)
      res.json({ authtoken })
    } catch (error) {
      console.error(error.message)
      res.status(500).send("Internal Server Error.")
    }
  }
)

//ROUTE 2: Authenticate a user using: POST "/api/auth/login". No Login Required
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password can't be blank").exists(),
  ],
  async (req, res) => {
    //If there is an error  return bad request and error
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { email, password } = req.body
    try {
      let user = await User.findOne({ email })
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please Try to Login with Correct Credentials" })
      }
      const passwordCompare = await bcrypt.compare(password, user.password)
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Please Try to Login with Correct Credentials" })
      }
      const data = {
        user: {
          id: user.id,
        },
      }
      const authtoken = jwt.sign(data, JWT_SECRET)
      res.json({ authtoken })
    } catch (error) {
      console.error(error.message)
      res.status(500).send("Internal Server Error.")
    }
  }
)

//ROUTE 3: Get Logged In User Details Create a user using: POST "/api/auth/getuser". Login Required
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    userId = req.user.id
    const user = await User.findById(userId).select("-password")
    res.send(user)
  } catch (error) {
    console.error(error.message)
    res.status(500).send("Internal Server Error.")
  }
})
module.exports = router
