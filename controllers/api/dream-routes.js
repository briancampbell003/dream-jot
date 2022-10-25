const router = require('express').Router();
const { Dream } = require('../../models');

// CREATE new dream
router.post('/', async (req, res) => {
  try {
    const dbDreamData = await Dream.create({
        title: "Test title",
        content: req.body.content,
        date: req.body.date,
        // tag: req.body.tag,
        // lucid: req.body.lucid,
        user_id: req.session.loggedUser
        
      });
      // console.log(dbDreamData)
      req.session.save(() => {
        res.status(200).json(dbDreamData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

module.exports = router;
