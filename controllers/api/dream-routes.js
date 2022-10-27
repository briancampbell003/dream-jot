const router = require("express").Router();
const session = require("express-session");
const { Dream } = require("../../models");

// CREATE new dream
router.post("/", async (req, res) => {
  try {
    const dbDreamData = await Dream.create({
      title: req.body.title,
      date: req.body.date,
      content: req.body.content,
      tag: req.body.tag,
      private: req.body.private,
      lucid: req.body.lucid,
      user_id: req.session.loggedUser,
      nightmare: req.body.nightmare,
    });

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