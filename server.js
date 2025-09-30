/* ******************************************
 * Require Statements
 *******************************************/
const baseController = require("./controllers/baseController")
const inventoryRoute = require("./routes/inventoryRoute")
const utilities = require('./utilities/')
const express = require("express")
const path = require("path")
require("dotenv").config()

const app = express()
const staticRoutes = require("./routes/static")

/* ************  View engine (EJS)  ************ */
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

/* ************  Static assets  ************ */
app.use(express.static(path.join(__dirname, "public")))

/* ************  App routes  ************ */
app.get("/", utilities.handleErrors(baseController.buildHome))
// Inventory routes
app.use("/inv", inventoryRoute)
// File Not Found Route - must be last route in list
app.use(async (req, res, next) => {
  next({status: 404, message: 'Sorry, we appear to have lost that page.'})
})

/* ***********************
* Express Error Handler
* Place after all other middleware
*************************/
app.use(async (err, req, res, next) => {
  let nav = await utilities.getNav()
  console.error(`Error at: "${req.originalUrl}": ${err.message}`)
  if(err.status == 404){ message = err.message} else {message = 'Oh no! There was a crash. Maybe try a different route?'}
  res.render("errors/error", {
    title: err.status || 'Server Error',
    message,
    nav
  })
})

/* ************  Server info  ************ */
const port = process.env.PORT || 10000
const host = process.env.HOST || "localhost"

/* ************  Start server  ************ */
app.listen(port, () => {
  console.log(`App listening on http://${host}:${port}`)
})

