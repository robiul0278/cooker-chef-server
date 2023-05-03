const express = require('express')
const app = express()
var cors = require('cors')
const port = 5000

const details = require("./data/chef.json");
const card = require("./data/data.json");

app.use(cors())

app.get('/', (req, res) => {
  res.send('WOW! Cooker ten is running!')
})

// chef data ==================

app.get("/details", (req, res) => {
    res.send(details)
})
// single data show =================
app.get("/details/:id", (req, res) => {
  const id = req.params.id;
  console.log(id)
  const detailsId = details.filter(n => n.id == id)
    res.send(detailsId)
})

// chef recipe 3 card data ============

app.get("/card", (req, res) => {
    res.send(card)
})

// single data show ===============

app.get("/card/:id", (req, res) => {
  const id = req.params.id;
  console.log(id)
  const detail = card.filter(n => n.id == id)
    res.send(detail)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})