const router = require('express').Router();
const { Dream } = require('../../models');

// CREATE new dream
router.post('/', async (req, res) => {
  try {
    const dbDreamData = await Dream.create({
        title: req.body.title,
        content: req.body.content,
        tag: req.body.tag,
        lucid: req.body.lucid,
        /* check it later*/ 
        user_id: req.body.user_id,
        
      });
      // console.log(dbDreamData)
      req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbDreamData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
