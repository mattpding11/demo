"use strict";

const { generateKeeperKeys } = require("../crypto");

class KeeperDto {
  constructor(publicKey, secretKey) {
    this.scheme = "eddsa-ed25519";
    this.public = publicKey;
    this.secret = secretKey;
  }

  static generateKeys() {
    const { publicKey, secretKey } = generateKeeperKeys();
    return new KeeperDto(publicKey, secretKey);
  }
}

module.exports = {
  KeeperDto,
};
