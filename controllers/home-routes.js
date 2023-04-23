const router = require('express').Router();
const { Deck, User } = require('../models');

// GET Home page
router.get('/', async (req, res) => {
  res.render('homepage');
});

// GET New deck page

// Get Update deck page

// GET login/signup page

module.exports = router;
