const router = require('express').Router();
const { Deck, User, Card } = require('../models');
const { withAuth } = require('../utils/helpers');

// GET Home page
router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      loggedIn: req.session.logged_in,
    });
  } catch (error) {
    console.error('Error accessing homepage:', error);
    res.status(500).json({
      message: 'There was an error reaching the homepage.',
      error: err,
    });
  }
});

// GET Dashboard
router.get('/dashboard', withAuth, async (req, res) => {
  if (req.session.logged_in) {
    try {
      const userData = await User.findByPk(req.session.user_id, {
        include: [{ model: Deck, include: [{ model: Card }] }],
      });
      if (!userData) {
        res.status(400).json({ message: 'Unable to locate decks.' });
        return;
      }
      const user = userData.get({ plain: true });

      let totalQueued = 0;
      user.decks.forEach((deck) => {
        let queueCount = 0;
        deck.cards.forEach((card) => {
          if (card.is_queued) {
            queueCount++;
          }
        });
        deck.queueCount = queueCount;
        totalQueued += queueCount;
      });
      user.totalQueued = totalQueued;

      res.render('dashboard', {
        userData: user,
        loggedIn: req.session.logged_in,
      });
    } catch (err) {
      console.error({
        message: 'There was an error getting all decks.',
        error: err,
      });
      res
        .status(500)
        .json({ message: 'There was an error getting all decks.', error: err });
    }
  } else {
    res.render('homepage');
  }
});

// GET New deck page
router.get('/create', withAuth, async (req, res) => {
  if (req.session.logged_in) {
    try {
      res.render('createdeck', {
        loggedIn: req.session.logged_in,
      });
    } catch (error) {
      console.error('Error rendering your page:', error);
      res.status(500).json({ message: 'Error fetching /create' });
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
        include: [{ model: Card, attributes: ['id','front', 'back'] }],
      });
      if (!deckToUpdate) {
        res.status(404).json({ message: 'Deck not found' });
        return;
      }
      const deckData = deckToUpdate.get({ plain: true });
      if (deckData.user_id !== req.session.user_id) {
        res.render('error', {
          error: 'Restricted. This deck belongs to another user.',
        });
        return;
      }
      res.render('updatedeck', {
        deckData: deckData,
        deck: deckToUpdate.Cards,
        loggedIn: req.session.logged_in,
      });
    } catch (error) {
      console.error('Error rendering your page:', error);
      res.status(500).json({ message: 'Error rendering /updateDecks/:id' });
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
    res.status(500).json({ message: 'Error rendering login page' });
  }
});

// GET individual decks
router.get('/decks/:id', withAuth, async (req, res) => {
  if (req.session.logged_in) {
    try {
      const deckToReview = await Deck.findByPk(req.params.id, {
        include: [Card],
      });
      if (!deckToUpdate) {
        res.status(404).json({ message: 'Deck not found' });
        return;
      } //review
      res.render('review', {
        deckData: deckToReview,
        deck: deckToReview.Cards,
        loggedIn: req.session.logged_in,
      });
    } catch (error) {
      console.error('Error rendering your page:', error);
      res.status(500).json({ message: 'Error rendering /decks/:id' });
    }
  } else {
    res.render('homepage');
  }
});

// Get review page
router.get('/review/:id', withAuth, async (req, res) => {
  if (req.session.logged_in) {
    try {
      if (req.params.id.toLowerCase() !== 'all') {
        const deckData = await Deck.findByPk(req.params.id, {
          where: {
            id: req.params.id,
          },
        });

        const deck = deckData.get({ plain: true });

        if (deck.user_id !== req.session.user_id) {
          res.render('error', {
            error: 'Restricted. This deck belongs to another user.',
          });
          return;
        }
      }

      res.render('review', {
        loggedIn: req.session.logged_in,
      });
    } catch (error) {
      console.error('Error rendering your page:', error);
      res.status(500).json({ message: 'Error rendering /review/:id' });
    }
  } else {
    res.render('homepage');
  }
});

// Get the finish page
router.get('/finish', withAuth, async (req, res) => {
  if (req.session.logged_in) {
    try {
      res.render('finish', {
        loggedIn: req.session.logged_in,
      });
    } catch (error) {
      console.error('Error rendering your page:', error);
      res.status(500).json({ message: 'Error rendering /finish' });
    }
  }
});

// Catch all route for redirecting request to incorrect endpoints.
router.get('*', (req, res) => {
  res.redirect('/');
});

module.exports = router;
