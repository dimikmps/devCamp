const express = require('express');
const router = express.Router();  

// GET
router.get('/', (req, res) => {
  res.status(200).json({
    data: {
      operation: 'GET all bootcamps',
    },
    author: 'dkampas',
    success: 'true',
  });
});

//GET by ID
router.get('/:id', (req, res) => {
  res.status(200).json({
    data: {
      operation: `GET bootcamp ${req.params.id}`,
    },
    author: 'dkampas',
    success: 'true',
  });
});

// POST
router.post('/', (req, res) => {
  res.status(200).json({
    data: {
      operation: 'ADD new bootcamp',
    },
    author: 'dkampas',
    success: 'true',
  });
});

// PUT
router.put('/:id', (req, res) => {
  res.status(200).json({
    data: {
      operation: `UPDATE bootcamp ${req.params.id}`,
    },
    author: 'dkampas',
    success: 'true',
  });
});

// DELETE
router.delete('/:id', (req, res) => {
  res.status(200).json({
    data: {
      operation: `DELETE bootcamp ${req.params.id}`,
    },
    author: 'dkampas',
    success: 'true',
  });
});

module.exports = router;
