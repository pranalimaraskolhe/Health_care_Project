const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// Add a new service
router.post('/', async (req, res) => {
  try {
    const { name, description, price } = req.body;

    // Basic Validation
    if (!name || price === undefined) {
      return res.status(400).json({ message: 'Service name and price are required.' });
    }

    const service = new Service({ name, description, price });
    const savedService = await service.save();
    res.status(201).json(savedService);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a service
router.put('/:id', async (req, res) => {
  try {
    const { name, description, price } = req.body;

    // Basic Validation
    if (!name && price === undefined && !description) {
      return res.status(400).json({ message: 'At least one field (name, description, price) is required to update.' });
    }

    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found.' });
    }

    if (name) service.name = name;
    if (description) service.description = description;
    if (price !== undefined) service.price = price;

    const updatedService = await service.save();
    res.json(updatedService);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a service
router.delete('/:id', async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found.' });
    }

    await service.remove();
    res.json({ message: 'Service deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
