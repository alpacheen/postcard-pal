const express = require('express');
const Postcard = require('../models/Postcard');
const auth = require('../middleware/auth');
const router = express.Router();

// Apply auth middleware to all routes
router.use(auth);

// Create a new postcard
router.post('/', async (req, res) => {
  try {
    const postcard = new Postcard({
      ...req.body,
      sender: req.userId
    });
    await postcard.save();
    res.status(201).json(postcard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all postcards for the authenticated user
router.get('/', async (req, res) => {
  try {
    const postcards = await Postcard.find({ sender: req.userId });
    res.json(postcards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific postcard
router.get('/:id', getPostcard, (req, res) => {
  res.json(res.postcard);
});

// Update a postcard
router.patch('/:id', getPostcard, async (req, res) => {
  if (req.body.recipient != null) {
    res.postcard.recipient = req.body.recipient;
  }
  if (req.body.message != null) {
    res.postcard.message = req.body.message;
  }
  if (req.body.imageUrl != null) {
    res.postcard.imageUrl = req.body.imageUrl;
  }
  try {
    const updatedPostcard = await res.postcard.save();
    res.json(updatedPostcard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a postcard
router.delete('/:id', getPostcard, async (req, res) => {
  try {
    await res.postcard.remove();
    res.json({ message: 'Deleted Postcard' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Middleware function to get postcard by ID
async function getPostcard(req, res, next) {
  let postcard;
  try {
    postcard = await Postcard.findOne({ _id: req.params.id, sender: req.userId });
    if (postcard == null) {
      return res.status(404).json({ message: 'Cannot find postcard' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.postcard = postcard;
  next();
}

module.exports = router;
