// Import the required libraries and modules
const { supermemo } = require('supermemo');

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
  updateSupermemoInfo: (card, grade) => {
    const { interval, repetition, efactor } = supermemo(card, grade);

    return { ...card, interval, repetition, efactor, dueDate };
  },

  // // Helper function to implement the mathpix library.
  // renderCardWithMathpix: async (cards) => {
  //   const renderedHTML = renderMarkdown(cards); // May need to modify to only present the card body.
  //   // Replace the content of the card element with the rendered html
  //   const cardElement = document.getElementById('cardbody'); // Placeholder id
  //   cardElement.innerHTML = renderedHTML;
  // },
};
