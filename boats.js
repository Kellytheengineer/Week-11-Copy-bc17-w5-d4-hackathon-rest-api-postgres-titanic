
// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

export async function getBoats() {
  // Query the database and return all resource ones 
  
    const queryText = "SELECT * FROM passengers";

    // Use the pool object to send the query to the database
    const result = await pool.query(queryText);
  
    // The rows property of the result object contains the retrieved records
    return result.rows;
}

export async function getBoatById(id) {
  // Query the database and return the resource with a matching id or null
}

export async function createBoat(resource) {
  // Query the database to create an resource and return the newly created resource
}

export async function updateBoatById(id, updates) {
  // Query the database to update the resource and return the newly updated resource or null
}

export async function deleteBoatById(id) {
  // Query the database to delete the resource and return the deleted resource or null
}