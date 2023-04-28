const router = require('express').Router();
const { Deck, User, Card } = require('../models');
const { withAuth, checkAuth } = require('../utils/helpers');


//DELETE ME - Victoria
router.get('/', async (req, res) => {
  res.render('homepage');
});
router.get('/login', async (req, res) => {
  res.render('login');
});
router.get('/finish', async (req, res) => {
  res.render('finish');
});
router.get('/dashboard', async (req, res) => {
  res.render('dashboard');
});
router.get('/createdeck', async(req, res) => {
  res.render('createdeck');
});
router.get('/reviewdeck', async(req, res) => {
  res.render('review');
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

