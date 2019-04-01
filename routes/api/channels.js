const express = require("express");
const router = express.Router();
const Channel = require('../../models/Channel');

router.get("/:id", (req,res) => {
    Channel.findById(req.params.id)
        .then(channel => res.json(channel))
        .catch(error => res.status(404).json({ nochannel: "No Channel with that ID"}))
})

router.post(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateEventInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newMessage = new Message({
      text: req.body.text,
      user: req.user.id
    });

    newMessage.save().then(message => res.json(message));
  }
);