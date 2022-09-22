"use strict";

const router = require("express").Router();

router.post("/action", (req, res) => {
  res.sendStatus(501);
});

module.exports = router;
