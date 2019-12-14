const express = require("express");

const router = express.Router();
const members = require("/home/raj/winter-dev/express_p/Members.js");

router.get("/", (req, res) => {
  res.json(members);
});
//get single member

router.get("/:id", (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter(member => member.id == parseInt(req.params.id)));
    //responds plus converts to json before sending
  } else {
    res.status(400).json({ msg: `no member with the id of ${req.params.id}` });
  }
});

//create a members
router.post("/", (req, res) => {
  res.send(req.body);
});

module.exports = router;
