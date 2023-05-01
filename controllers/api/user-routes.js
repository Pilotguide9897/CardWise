const router = require('express').Router();
const { User } = require('../../models');

// POST User login
router.post('/login', async (req, res) => {
  try {
    console.log(req.body.email);
    console.log(req.body.password);
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect login information, please try again' });
      return;
    }
    const validPassword = userData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password, please try again' });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// POST Create New User
router.post('/new', async (req, res) => {
  try {

    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;
      res.status(200).json(newUser);
    });
  } catch (err) {
    console.log('Error:', err);
    res.status(400).json(err);
  }
});

// POST Log out
router.post('/logout', async (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
