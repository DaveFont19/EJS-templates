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
// Route to choose to add classifications or vehicles
router.get("/", utilities.handleErrors(invController.displayInventory))
// Display classification form
router.get("/add-classification", utilities.handleErrors(invController.classificationForm))
// Display inventory form
router.get("/add-inventory", utilities.handleErrors(invController.buildAddInventory))
module.exports = router;