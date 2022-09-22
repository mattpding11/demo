"use strict";

const { createHashFromClaims } = require("../crypto");

class HashDto {
  constructor(hash) {
    this.types = "sha256:sha256";
    this.steps = "stringify:data";
    this.value = hash;
  }

  static generateHash(claims) {
    const claimsHash = createHashFromClaims(claims);
    return new HashDto(claimsHash);
  }
}

module.exports = { HashDto };
