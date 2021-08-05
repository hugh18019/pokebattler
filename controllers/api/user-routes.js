const router = require('express').Router();
const { User } = require('../../models');

// GET all users for login.handlebars page
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll();

    // testing the route
    res.json(userData);

    // For sending userData to login.handlebars
    // res.render('login', {
    //   userData,
    //   loggedIn: req.session.loggedIn,
    // });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one user
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);

    // testing the route
    res.json(userData);

    // For sending userData to login.handlebars
    // res.render('login', { userData, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// CREATE new user
// Signup
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      password: req.body.password,
      gender: req.body.gender,
      avatar: req.body.avatar,
    });

    // For testing
    res.json(dbUserData);

    // For when working with cookies
    // req.session.save(() => {
    //   req.session.loggedIn = true;
    //   res.status(200).json(dbUserData);
    // });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
// Would need to add code in server.js to use cookies
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    // For when working with cookies
    // req.session.save(() => {
    //   req.session.loggedIn = true;

    //   res
    //     .status(200)
    //     .json({ user: dbUserData, message: 'You are now logged in!' });
    // });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
// Would need to add code in server.js to use cookies
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    // For testing
    res.json(userData);

    // For when working with cookies
    // if (req.session.loggedIn) {
    //   req.session.destroy(() => {
    //     res.status(204).end();
    //   });
    // }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
