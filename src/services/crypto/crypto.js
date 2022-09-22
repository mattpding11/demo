"use strict";

const { createHash, randomBytes } = require("crypto");
const elliptic = require("elliptic");
const eddsa25519 = new elliptic.eddsa("ed25519");

function createHashFromClaims(claims) {
  const claimsStr = JSON.stringify(claims);
  const sha256Hex = createHash("sha256")
    .update(Buffer.from(claimsStr, "utf8"))
    .digest("hex");

  const result = createHash("sha256")
    .update(Buffer.from(sha256Hex, "hex"))
    .digest("hex");

  return result;
}

function createRandomString(length = 10) {
  return randomBytes(length).toString("hex");
}

function generateKeeperKeys() {
  const randomSecretKey = createRandomString(32);
  const eddsaKeyPair = eddsa25519.keyFromSecret(randomSecretKey);

  const publicKey = eddsaKeyPair.getPublic("hex");
  const secretKey = eddsaKeyPair.getSecret("hex");

  return { publicKey, secretKey };
}

function signIOU(claimsHash, privateKey) {
  return eddsa25519.sign(claimsHash, privateKey).toHex();
}

module.exports = {
  createHashFromClaims,
  createRandomString,
  generateKeeperKeys,
  signIOU,
};
