const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}

/* ***************************
 *  Build inventory by classification view
 * ************************** */
invCont.buildByClassificationId = async function (req, res, next) {
    const classification_id = req.params.classificationId
    const data = await invModel.getInventoryByClassificationId(classification_id)
    const grid = await utilities.buildClassificationGrid(data)
    let nav = await utilities.getNav()
    const className = data[0].classification_name
    res.render("./inventory/classification", {
        title: className + " vehicles",
        nav,
        grid
    })
}
invCont.buildByInventoryId = async function (req, res, next) {
    const vehicleDetails = req.params.inv_id
    const data = await invModel.getVehicleDetails(vehicleDetails)
    const hero = await utilities.buildVehicleDetails(data)
    let nav = await utilities.getNav()
    res.render("./inventory/vehicleDetails", {
        title: `${data[0].inv_year} ${data[0].inv_make} ${data[0].inv_model}`, nav, hero
    })
}
invCont.displayInventory = async function (req, res, next) {
    let nav = await utilities.getNav()
    let list = utilities.managmentList()
    res.render("./inventory/managment", {
        title: "Vehicle Managment",
        nav
    })
}
invCont.classificationForm = async function (req, res, next) {
    let nav = await utilities.getNav()
    res.render("./inventory/add-classification", {
        title: "Add New Classification",
        nav,
        errors: null
    })
}
module.exports = invCont;