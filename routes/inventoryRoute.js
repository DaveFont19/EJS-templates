// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")
const utilities = require("../utilities/")

// Route to build inventory by classification view
router.get("/type/:classificationId", utilities.handleErrors(invController.buildByClassificationId));
//Route to build details
router.get("/type")
// Route to build vehicle details
router.get("/detail/:inv_id", utilities.handleErrors(invController.buildByInventoryId))
router.get("/detail")

module.exports = router;