// Import the required libraries and modules
const Card = require('../models/Card');
const dayjs = require('dayjs');
const { supermemo, SuperMemoGrade } = require('supermemo');

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
};
