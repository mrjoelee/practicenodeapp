const express = require("express");
const router = express.Router();

// create
// prefixing with api
router.post("/create", (req, res) => {
  res.send("Create");
});

// read all data
router.get("/cars", (req, res) => {
  res.send("Get all cars!");
});

// read single piece of data
//:id is a variable which will be the value of the id (e.g: /api/cars/1)
//req.params allows us to put placeholder in the route to access them.
router.get("/cars/:id", (req, res) => {
  res.send(`Get call car by ID ${req.params.id}`);
});

// update data
router.put("/cars/update/:id", (req, res) => {
  res.send("Update car by ID");
});

// delete data
router.delete("/cars/delete/:id", (req, res) => {
  res.send("Delete car by ID");
});

module.exports = router;
