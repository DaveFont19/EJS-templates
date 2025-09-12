/* ******************************************
 * Primary server file
 *******************************************/
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
app.get("/", function(req, res) {
  res.render("index", { title: "Home" })
})

app.use(staticRoutes)

/* ************  Server info  ************ */
const port = process.env.PORT || 5500
const host = process.env.HOST || "localhost"

/* ************  Start server  ************ */
app.listen(port, () => {
  console.log(`App listening on http://${host}:${port}`)
})
