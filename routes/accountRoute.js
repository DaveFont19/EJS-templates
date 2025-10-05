const express = require("express")
const router = new express.Router()
const utilities = require("../utilities/")
const accountController = require("../controllers/accountController")

//Route to build login account view
router.get("/login", utilities.handleErrors(accountController.buildLogin))

//Route to build create an account view
router.get("/register", utilities.handleErrors(accountController.buildRegister))
//Route to send the data
router.post('/register', utilities.handleErrors(accountController.registerAccount))


module.exports = router