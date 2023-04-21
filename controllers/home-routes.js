const router = require('express').Router();
const { Card, User } = require('../models');

// GET Home page
router.get('/', async (req, res) => {
  res.render('homepage');
});

// GET All decks for user

// GET New card form

// GET login/signup page

module.exports = router;
