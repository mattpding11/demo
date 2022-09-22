"use strict";

const router = require("express").Router();

router.post("/status", (req, res) => {
  res.sendStatus(501);
});

module.exports = router;
