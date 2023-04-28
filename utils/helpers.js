// Import the required libraries and modules
const Card = require('../models/Card');
const dayjs = require('dayjs');
const { supermemo } = require('supermemo');
const getCardData = require('../controllers/api/deck-routes')

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
  practice: (flashcard, grade) => {
    const { interval, repetition, efactor } = supermemo(flashcard, grade);
    const dueDate = dayjs(Date.now()).add(interval, 'day').toISOString();

    return { ...flashcard, interval, repetition, efactor, dueDate };
  },

  // Helper function to implement the mathpix library.
  renderCardWithMathpix: async (cards) => {
    const cardContent = await getCardData (cards);
    const renderedHTML = renderMarkdown(cardContent);
    // Replace the content of the card element with the rendered html
    const cardElement = document.getElementById('cardbody'); // Placeholder id
    cardElement.innerHTML = renderedHTML;
  },

};
