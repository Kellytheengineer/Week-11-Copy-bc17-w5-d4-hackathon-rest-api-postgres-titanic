import { pool } from "../index.js";


async function resetDatabase() {
  try {
    // Drop existing tables if they exist
    await pool.query(`
        DROP TABLE IF EXISTS boats CASCADE;
        DROP TABLE IF EXISTS passengers CASCADE;
    `);

    // Create the boats table
    await pool.query(`
        CREATE TABLE boats (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            capacity INT NOT NULL
        );
    `);

    // Create the passengers table with a foreign key to the boats table
    await pool.query(`
        CREATE TABLE passengers (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            age INT,
            boat_id INT REFERENCES boats(id)
        );
    `);

    // Seed the boats table
    await pool.query(`
        INSERT INTO boats (name, capacity)
        VALUES 
            ('Serenity', 10),
            ('Wave Rider', 6);
    `);

    // Seed the passengers table
    await pool.query(`
        INSERT INTO passengers (name, age, boat_id)
        VALUES 
            ('John Doe', 35, 1),
            ('Jane Smith', 28, 1),
            ('Mike Johnson', 42, 2),
            ('Emily Brown', 31, 2),
            ('David Wilson', 39, 1);
    `);

    console.log("Database reset successful");
  } catch (error) {
    console.error("Database reset failed: ", error);
  } finally {
    // End the pool
    await pool.end();
  }
}

await resetDatabase();
