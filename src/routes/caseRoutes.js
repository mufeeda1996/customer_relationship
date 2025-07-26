const express = require('express');
const router = express.Router();
const Case = require('../model/caseModel');

// GET all cases
router.get('/', async (req, res) => {
  const cases = await Case.find().populate('customer_id assigned_to');
  res.json(cases);
});

// POST create case
router.post('/', async (req, res) => {
  const newCase = new Case(req.body);
  await newCase.save();
  res.status(201).json(newCase);
});

// PATCH case
router.patch('/:id', async (req, res) => {
  const updated = await Case.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE customer
router.delete('/:id', async (req, res) => {
  try {
    const deletedCustomer = await Case.findByIdAndDelete(req.params.id);
    if (!deletedCustomer) return res.status(404).json({ message: 'Case not found' });
    res.json({ message: 'Customer deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
  
