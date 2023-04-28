const router = require('express').Router();
const { Deck, User, Card } = require('../models');
const { withAuth, checkAuth } = require('../utils/helpers');

// GET Home page
router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (error) {
    console.error('Error accessing homepage:', error);
    res
      .status(500)
      .json({
        message: 'There was an error reaching the homepage.',
        error: err,
      });
  }
});

// GET Dashboard
router.get('/dashboard', withAuth, async (req, res) => {
  if (req.session.logged_in) {
    try {
      const deckData = await Deck.findAll({
        include: { model: Card },
      });

      if (!deckData) {
        res.status(400).json({ message: 'Unable to locate decks.' });
        return;
      }

      const decks = deckData.map((deck) => {
        return deck.get({ plain: true });
      });

      res.render('dashboard', {
        deckData: decks,
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
router.get('/decks/new', withAuth, async (req, res) => {
  if (req.session.logged_in) {
    try { //createdeck
      res.render('createdeck', {
        logged_in: req.session.logged_in,
      });
    } catch (error) {
      console.error('Error rendering your page:', error);
      res.status(500).json({ message: 'Error fetching /decks/new' });
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
        include: [Card],
      });
      if (!deckToUpdate) {
        res.status(404).json({ message: 'Deck not found' });
        return;
      } //updatedeck
      res.render('updatedeck', {
        deckData: deckToUpdate,
        deck: deckToUpdate.Cards,
        logged_in: req.session.logged_in,
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
        logged_in: req.session.logged_in,
      });
    } catch (error) {
      console.error('Error rendering your page:', error);
      res.status(500).json({ message: 'Error rendering /decks/:id' });
    }
  } else {
    res.render('homepage');
  }
});

// Catch all route for redirecting request to incorrect endpoints.
router.get('*', (req, res) => {
  res.redirect('/');
});



module.exports = router;






// I just had this written back when I thought we would make the homepage present all of our decks if we were logged in, rather than having the dashboard. I am leaving it in the code for now, but we can take it out when we know for certain that we will not need it!
// router.get('/', checkAuth, async (req, res) => {
//   if (req.session.logged_in) {
//     try {
//       const decks = await Deck.findAll({
//         where: {
//           user_id: req.session.user_id,
//         },
//       });
//       res.render('homepage', {
//         userDeckData: decks,
//         logged_in: req.session.logged_in,
//       });
//     } catch (error) {
//       console.error('Error fetching deck data:', error);
//       res.status(500).send('Error fetching deck data');
//     }
//   } else {
//     res.render('homepage');
//   }
// });

