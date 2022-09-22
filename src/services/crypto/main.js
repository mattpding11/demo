"use strict";

const { HashDto, IOUDto, MetaDto } = require("./dtos");

function offlineSigning(claimsDto, keeperDto) {
  const hashDto = HashDto.generateHash(claimsDto);
  const metaDto = MetaDto.generateSignature(keeperDto, claimsDto);
  const iouDto = new IOUDto(hashDto, claimsDto, metaDto);
  return iouDto;
}

module.exports = { offlineSigning };
