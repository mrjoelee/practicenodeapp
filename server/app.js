/*
 * when running npx nodemon (auto refreshes when doing work),
 * make sure under the package.json the "main" is the correct js file
 */

//import express from the node_modules
const express = require("express");
const res = require("express/lib/response");
const app = express();
//set up a port
const PORT = 3001;

const CarRouter = require("./routes/car-routes");
//db
const db = [];

//set up 1st route (end point to receive data)
//takes 2 parameter callback function
app.get("/", (req, res) => {
  res.send("Hello Word!");
});

//this will utilize the router http request from car-routes.js
app.use("/api", CarRouter);

// went to the car-route
// create
// prefixing with api
// app.post("/api/create", (req, res) => {
//   res.send("Create");
// });

// // read all data
// app.get("/api/cars", (req, res) => {
//   res.send("Get all cars!");
// });

// // read single piece of data
// //:id is a variable which will be the value of the id (e.g: /api/cars/1)
// //req.params allows us to put placeholder in the route to access them.
// app.get("/api/cars/:id", (req, res) => {
//   res.send(`Get call car by ID ${req.params.id}`);
// });

// // update data
// app.put("/api/cars/update/:id", (req, res) => {
//   res.send("Update car by ID");
// });

// // delete data
// app.delete("/api/cars/delete/:id", (req, res) => {
//   res.send("Delete car by ID");
// });
//make sure the server is listening
app.listen(PORT, () => {
  console.log(`App is running on Port ${PORT}`);
});
