"use strict";

const express = require("express");
const debitRoute = require("./api-routes/debit");
const actionRoute = require("./api-routes/action");
const creditRoute = require("./api-routes/credit");
const statusRoute = require("./api-routes/status");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(debitRoute);
app.use(actionRoute);
app.use(creditRoute);
app.use(statusRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
