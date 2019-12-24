const express = require("express");
const uuid = require("uuid");
const router = express.Router(); //include router method
const members = require("/home/raj/winter-dev/express_p/Members.js");

router.get("/", (req, res) => {
  res.json(members); //res.json converts array of objects into json format and sends back
});
//get single member

router.get("/:id", (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter(member => member.id == parseInt(req.params.id))); //paraseint for return integer
    //responds plus converts to json before sending
  } else {
    res.status(400).json({ msg: `no member with the id of ${req.params.id}` });
  }
});

//create a members
router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active"
  };
  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "please include a name" });
  }
  members.push(newMember);
  //console.log(members);
  res.redirect('/');
});

module.exports = router;
