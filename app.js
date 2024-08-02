// Import the required modules
import express from "express";



// Import your helper functions for your first resource here
import {
  getBoats,
  getBoatById,
  createBoat,
  updateBoatById,
  deleteBoatById,
} from "./boats.js";


// Import your helper functions for your second resource here
import {
  getPassengers,
  getPassengerById,
  createPassenger,
  updatePassengerById,
  deletePassengerById,
} from "./passengers.js";



// Initialize the express app
const app = express();
// Retrieve the port number from environment variables
const PORT = process.env.PORT;

app.use(express.json()); // express.json() middleware is used to parse incoming JSON requests




// Resource One Route Handlers

// Endpoint to retrieve all <resource_one>
app.get("/boats/", async function (req, res) {
  const boats = await getBoats();
  res.status(200).json({ status: "success", data: boats });  
});

// Endpoint to retrieve a <resource_one> by id
app.get("/boats/:id", async function (req, res) { 
  const id = req.params.id;
  const boat = await getBoatById(id);
  if (!boat) {
    return res
    .status(400)
    .json({ status: "fail", data: {msg: "Boat not found"} }); 
  }  
    res.status(200).json({ status: "success", data: boat })
  });

// Endpoint to create a new <resource_one>
app.post("/boats/", async function (req, res) {
});

// Endpoint to update a specific <resource_one> by id
app.patch("/boats/:id", async function (req, res) {
});

// Endpoint to delete a specific <resource_one> by id
app.delete("/boats/:id", async function (req, res) {
});




// Resource Two Route Handlers

// Endpoint to retrieve all <resource_twos>
app.get("/passengers/", async function (req, res) {
    const passengers = await getPassengers();
    res.status(200).json({ status: "success", data: passengers });  
  });
  
  // Endpoint to retrieve a <resource_twos> by id
  app.get("/passengers/:id", async function (req, res) {
    const id = req.params.id;
    const passenger = await getPassengerById(id);
    if (!passenger) {
      return res
      .status(400)
      .json({ status: "fail", data: {msg: "Passenger not found"} }); 
    }  
      res.status(200).json({ status: "success", data: passenger })

  });
  
  // Endpoint to create a new <resource_twos>
  app.post("/passengers/", async function (req, res) {
  });
  
  // Endpoint to update a specific <resource_twos> by id
  app.patch("/passengers/:id", async function (req, res) {
  });
  
  // Endpoint to delete a specific <resource_twos> by id
  app.delete("/passengers/:id", async function (req, res) {
  });





// Start the server and listen on the specified port
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});