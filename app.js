// Import the required modules
import express from 'express';

// Import your helper functions for your first resource here
import {
  getBoats,
  getBoatById,
  createBoat,
  updateBoatById,
  deleteBoatById,
} from './boats.js';

// Import your helper functions for your second resource here
import {
  getPassengers,
  getPassengerById,
  createPassenger,
  updatePassengerById,
  deletePassengerById,
} from './passengers.js';

// Initialize the express app
const app = express();
// Retrieve the port number from environment variables
const PORT = process.env.PORT;

app.use(express.json()); // express.json() middleware is used to parse incoming JSON requests

// Boats Route Handlers

// Endpoint to retrieve all <boats>
app.get('/boats/', async function (req, res) {
  const boats = await getBoats();
  res.status(200).json({ status: 'success', data: boats });
});

// Endpoint to retrieve a <boat> by id
app.get('/boats/:id', async function (req, res) {
  const id = req.params.id;
  const boat = await getBoatById(id);
  if (!boat) {
    return res
      .status(400)
      .json({ status: 'fail', data: { msg: 'Boat not found' } });
  }
  res.status(200).json({ status: 'success', data: boat });
});

// Endpoint to create a new <boat>
app.post('/boats/', async function (req, res) {});

// Endpoint to update a specific <boat> by id
app.patch('/boats/:id', async function (req, res) {});

// Endpoint to delete a specific <boat> by id
app.delete('/boats/:id', async function (req, res) {});

// Passengers Route Handlers

// Endpoint to retrieve all <passengers>
app.get('/passengers/', async function (req, res) {
  const passengers = await getPassengers();
  res.status(200).json({ status: 'success', data: passengers });
});

// Endpoint to retrieve a <passenger> by id
app.get('/passengers/:id', async function (req, res) {
  const id = req.params.id;
  const passenger = await getPassengerById(id);
  if (!passenger) {
    return res
      .status(400)
      .json({ status: 'fail', data: { msg: 'Passenger not found' } });
  }
  res.status(200).json({ status: 'success', data: passenger });
});

// Endpoint to create a new <passenger>
app.post('/passengers/', async function (req, res) {});

// Endpoint to update a specific <passenger> by id
app.patch('/passengers/:id', async function (req, res) {});

// Endpoint to delete a specific <passenger> by id
app.delete('/passengers/:id', async function (req, res) {});

// Start the server and listen on the specified port
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});
