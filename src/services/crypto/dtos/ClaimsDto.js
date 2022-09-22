"use strict";

const { createRandomString } = require("../crypto");

class ClaimsDto {
  constructor() {
    // these properties MUST be in this order
    // otherwise the hash (crypto.createHashFromClaims) will be different
    this.amount = "";
    this.domain = "tin";
    this.expiry = new Date().toISOString();
    this.random = createRandomString();
    this.source = "";
    this.symbol = "";
    this.target = "";
  }
}

module.exports = {
  ClaimsDto,
};
