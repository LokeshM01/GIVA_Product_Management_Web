const express = require('express');
const router = express.Router();
const pool = require('../db');

// Define your routes here
// Example: GET all products
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// POST: Add a new product
router.post('/', async (req, res) => {
    try {
      const { name, description, price, quantity } = req.body;
  
      // Check for missing fields
      if (!name || !price || !quantity) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
  
      // Insert product into the database
      const result = await pool.query(
        'INSERT INTO products (name, description, price, quantity) VALUES ($1, $2, $3, $4) RETURNING *',
        [name, description, price, quantity]
      );
      res.json(result.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });

  // PUT: Update an existing product
router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params; // Get the product ID from the URL
      const { name, description, price, quantity } = req.body; // Get updated fields from request body
  
      // Run the UPDATE query
      const result = await pool.query(
        'UPDATE products SET name = $1, description = $2, price = $3, quantity = $4 WHERE id = $5 RETURNING *',
        [name, description, price, quantity, id]
      );
  
      // If no rows were updated, return a 404
      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      // Return the updated product
      res.json(result.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });
  
  // DELETE: Delete a product by ID
  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params; // Get the product ID from the URL
  
      // Run the DELETE query
      const result = await pool.query('DELETE FROM products WHERE id = $1', [id]);
  
      // If no rows were deleted, return a 404
      if (result.rowCount === 0) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      // Return a success message
      res.json({ message: 'Product deleted successfully' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });
  


module.exports = router;  // Ensure this line is present


