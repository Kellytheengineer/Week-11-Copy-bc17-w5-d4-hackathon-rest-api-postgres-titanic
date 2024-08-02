// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from './db/index.js';

export async function getPassengers() {
  // Query the database and return all Passengers

  // Define the SQL query to fetch all passengers from the 'passengers' table
  const queryText = 'SELECT * FROM passengers';

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText);

  // The rows property of the result object contains the retrieved records
  return result.rows;
}

export async function getPassengerById(id) {
  // Query the database and return the resource with a matching id or null

  const queryText = 'SELECT * FROM passengers WHERE id = $1';
  // Use the pool object to send the query to the database

  const result = await pool.query(queryText, [id]);
  // passing the id as a parameter to prevent SQL injection
  return result.rows[0] || null;
  // The rows property of the result object contains the retrieved records
}

export async function createPassenger(resource) {
  // Query the database to create an resource and return the newly created resource
}

export async function updatePassengerById(id, updates) {
  // Query the database to update the resource and return the newly updated resource or null
}

export async function deletePassengerById(id) {
  // Query the database to delete the resource and return the deleted resource or null
}
