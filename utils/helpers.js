// Import the required libraries and modules
const Card = require('../models/Card');
const dayjs = require('dayjs');
const { supermemo } = require('supermemo');
const getCardData = require('../controllers/api/deck-routes');

module.exports = {
  withAuth: (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  },

  checkAuth: (req, res, next) => {
    req.isAuthenticated = req.session.logged_in;
    next();
  },

  // Helper function to implement the supermemo library.
  updateSupermemoInfo: (flashcard, grade) => {
    const { interval, repetition, efactor } = supermemo(flashcard, grade);

    return { ...flashcard, interval, repetition, efactor };
  },

  // // Helper function to implement the mathpix library.
  // renderCardWithMathpix: async (cards) => {
  //   const renderedHTML = renderMarkdown(cards); // May need to modify to only present the card body.
  //   // Replace the content of the card element with the rendered html
  //   const cardElement = document.getElementById('cardbody'); // Placeholder id
  //   cardElement.innerHTML = renderedHTML;
  // },
};
