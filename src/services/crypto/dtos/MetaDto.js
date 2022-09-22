"use strict";

const { signIOU } = require("../crypto");

class MetaDto {
  constructor(keeperDto, claimsDto, signatureHash) {
    this.signatures = [
      {
        scheme: keeperDto.scheme,
        signer: claimsDto.source,
        public: keeperDto.public,
        string: signatureHash,
        linker: "sha256:ripemd160",
      },
    ];
  }

  static generateSignature(keeperDto, claimsDto) {
    const signature = signIOU(claimsDto.value, keeperDto.secret);

    return new MetaDto(keeperDto, claimsDto, signature);
  }
}

module.exports = {
  MetaDto,
};
