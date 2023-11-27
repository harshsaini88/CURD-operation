const express = require('express');
const router = express.Router();
const Item = require('../models/item.model.js');

// Create a new item
router.post('/', async (req, res) => {
  try {
    // Create a new item using the request body
    const newItem = new Item(req.body);
    
    // Save the new item to the database
    await newItem.save();
    
    // Respond with the created item and HTTP status code 201 (Created)
    res.status(201).json(newItem);
  } catch (error) {
    // Handle errors and respond with an error message and HTTP status code 500 (Internal Server Error)
    res.status(500).json({ error: error.message });
  }
});

// Read all items
router.get('/', async (req, res) => {
  try {
    // Retrieve all items from the database
    const items = await Item.find();
    
    // Respond with the retrieved items and HTTP status code 200 (OK)
    res.status(200).json(items);
  } catch (error) {
    // Handle errors and respond with an error message and HTTP status code 500 (Internal Server Error)
    res.status(500).json({ error: error.message });
  }
});

// Read a specific item by ID
router.get('/:id', async (req, res) => {
  try {
    // Extract the ID parameter from the request
    const itemId = req.params.id;
    
    // Find the item by ID in the database
    const item = await Item.findById(itemId);
    
    // Respond with the retrieved item and HTTP status code 200 (OK)
    res.status(200).json(item);
  } catch (error) {
    // Handle errors and respond with an error message and HTTP status code 500 (Internal Server Error)
    res.status(500).json({ error: error.message });
  }
});

// Update an existing item by ID
router.put('/:id', async (req, res) => {
  try {
    // Extract the ID parameter from the request
    const itemId = req.params.id;
    
    // Find and update the item by ID in the database
    const updatedItem = await Item.findByIdAndUpdate(itemId, req.body, { new: true });
    
    // Respond with the updated item and HTTP status code 200 (OK)
    res.status(200).json(updatedItem);
  } catch (error) {
    // Handle errors and respond with an error message and HTTP status code 500 (Internal Server Error)
    res.status(500).json({ error: error.message });
  }
});

// Delete an item by ID
router.delete('/:id', async (req, res) => {
  try {
    // Extract the ID parameter from the request
    const itemId = req.params.id;
    
    // Find and delete the item by ID in the database
    await Item.findByIdAndDelete(itemId);
    
    // Respond with a success message and HTTP status code 200 (OK)
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    // Handle errors and respond with an error message and HTTP status code 500 (Internal Server Error)
    res.status(500).json({ error: error.message });
  }
});

// Export the router for use in other parts of the application
module.exports = router;
