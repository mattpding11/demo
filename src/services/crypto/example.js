"use strict";

const { ClaimsDto, KeeperDto, offlineSigning } = require(".");

function example() {
  const claimsDto = getClaims();
  const keeperDto = getKeeper();
  const iouDto = offlineSigning(claimsDto, keeperDto);
  console.log("<==== IOU ====>");
  console.log(JSON.stringify(iouDto, null, 2));

  const keeper = KeeperDto.generateKeys();
  console.log("\n<==== KEYS ====>");
  console.log(JSON.stringify(keeper, null, 2));
}

function getClaims() {
  // source and target signers can be found in the information is sent
  // to the endpoint (/debit, /credit, /transfer)
  const sourceSigner = "wf6BYRmgVygFYk9b51YuEYbsxVJufNHZXb";
  const targetSigner = "wXPa3ePUCkyS18BgUF4qvLEMvYm9ZLoGyZ";

  // this value is constant for each environment (tst, stg, prd)
  const symbolSigner = "wcMFE2uesgAqzoMvuViXWT3iyUreHygAe6";

  const claimsDto = new ClaimsDto();
  claimsDto.amount = "10000.00";
  claimsDto.source = sourceSigner;
  claimsDto.symbol = symbolSigner;
  claimsDto.target = targetSigner;

  return claimsDto;
}

function getKeeper() {
  // publicKey and secretKey belongs to a signer
  // and this should be stored in a secure place
  const publicKey =
    "cbf89c42cd10357ed81db6b02308efbdf5ef42c04e14d50bbee9d19ac9c2c09c";
  const secretKey =
    "5978e375ef6386588701076e7b460a9db3213cf268b78d286882b26da68b9b02";

  const keeperDto = new KeeperDto(publicKey, secretKey);

  return keeperDto;
}

if (require.main === module) {
  example();
}
