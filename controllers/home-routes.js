const router = require('express').Router();
const { User, Dream } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/newdream', withAuth, async (req, res) => {
  try {
    res.render('newdream', {
      loggedIn: req.session.loggedIn,
      loggedUser: req.session.loggedUser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET my dreams
router.get('/mydreams', withAuth, async (req, res) => {
  try {
    const dbDreamData = await Dream.findAll({
      where: {
        user_id: req.session.loggedUser
      }
    });

    const dreams = dbDreamData.map((dream) =>
      dream.get({ plain: true })
    );

    res.render('mydreams', {
      dreams,
      loggedIn: req.session.loggedIn,
      loggedUser: req.session.loggedUser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET user dreams
router.get('/user/:id', withAuth, async (req, res) => {
  try {
    const dbDreamData = await Dream.findAll({
      where: {
        user_id: req.params.id,
        private: false,
      },
      include: [
        { model: User }
      ]
    });

    const dreams = dbDreamData.map((dream) =>
      dream.get({ plain: true })
    );
    console.log(dreams);
    let username = dreams[0].user.username;
    res.render('userdreams', {
      dreams,
      username,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET single dream
router.get('/dream/:id', withAuth, async (req, res) => {
  try {
    const dbDreamData = await Dream.findByPk(req.params.id, {
      include: [
        { model: User }
      ]
    });
    const dream = dbDreamData.get({ plain: true });
    console.log(dream);
    res.render('singledream', { dream, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all users and all dreams
router.get('/community', withAuth, async (req, res) => {
  try {
    const dbDreamData = await Dream.findAll({
      where: {
        private: false,
      }
    });
    const dbUserData = await User.findAll({});

    const dreams = dbDreamData.map((dream) =>
      dream.get({ plain: true })
    );

    const users = dbUserData.map((user) =>
      user.get({ plain: true })
    );

    res.render('community', {
      dreams,
      users,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
