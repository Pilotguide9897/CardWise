module.exports = {
  withAuth: (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  },
  checkAuth: (req, res, next) => {
    req.isAuthenticated = (req.session.logged_in);
    next();
  }
};