"use strict";

const { post } = require("./http");

const createAction = async (actionBody) => {
  const { data } = await post("/action", actionBody);
  return data;
};

// call sendit endpoint

// call continue endpoint

module.exports = { createAction };
