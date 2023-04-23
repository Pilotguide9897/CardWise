const router = require('express').Router();
const { Deck, User } = require('../models');
const { withAuth, checkAuth } = require('../utils/helpers');

// GET Home page
router.get('/', checkAuth, async (req, res) => {
  if (req.isAuthenticated ) {
    try {
      const decks = await Deck.findAll({
        where: {
          user_id: req.session.user_id
        }
      });

      res.render("homepage", { userDeckData: 'decks' })
    } catch (error) {
      console.error('Error fetching deck data:', error);
      res.status(500).send('Error fetching deck data');
    }
  } else {
    res.render('homepage');
  }
});

// GET New deck page
router.get('/decks/new', withAuth, async (req, res) => {
  res.render('');
});

// Get Update deck page
router.get('/update/:id', withAuth, async (req, res) => {
  res.render('');
});

// GET login/signup page
router.get('/login', async (req, res) => {
  res.render('');
});

router.get('/decks/:id', withAuth, async (req, res) => {
  res.render('');
});

module.exports = router;
