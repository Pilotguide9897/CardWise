const router = require('express').Router();
const { Deck, User, Card } = require('../models');
const { withAuth, checkAuth } = require('../utils/helpers');

// GET Home page
router.get('/', checkAuth, async (req, res) => {
  if (req.session.logged_in ) {
    try {
      const decks = await Deck.findAll({
        where: {
          user_id: req.session.user_id
        }
      });

      res.render("homepage", { userDeckData: 'decks',
      logged_in: req.session.logged_in })
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
  if (req.session.logged_in ) {
  try {
    res.render('newDeck', {
  logged_in: req.session.logged_in});
  } catch (error) {
    console.error('Error rendering your page:', error);
    res.status(500).send('Error fetching /decks/new');
  }
  } else {
    res.render('homepage');
  }
});

// Get Update deck page
router.get('/updateDeck/:id', withAuth, async (req, res) => {
  if (req.session.logged_in) {
    try {
      const deckToUpdate = await Deck.findByPk(req.params.id, {
        include: [Card]
        });
        if (!deckToUpdate) {
      res.status(404).send('Deck not found');
      return;
    }
       res.render('updateDeck', { 
       deckData: deckToUpdate, 
        deck: deckToUpdate.Cards,
       logged_in: req.session.logged_in,
       });
    } catch (error) {
      console.error('Error rendering your page:', error);
    res.status(500).send('Error fetching /decks/:id');
    }
  } else {
    res.render('homepage');
  }
});

// GET login/signup page
router.get('/login', async (req, res) => {
  try {
    res.render('login');
  } catch (error) {
    console.error('Error rendering your page:', error);
    res.status(500).send('Error rendering login page');
  }
});

// GET individual decks
router.get('/decks/:id', withAuth, async (req, res) => {
  res.render('deckView', { logged_in: req.session.logged_in });
});

app.get('*', (req, res) => {
  res.redirect('/');
});

module.exports = router;
