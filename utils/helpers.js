module.exports = {
  placeholder: () => {
    // replace with real helpers if needed.
    console.log("this is just a placeholder.");
  },

  withAuth: (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  }
};

