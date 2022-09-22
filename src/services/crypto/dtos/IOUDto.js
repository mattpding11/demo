"use strict";

class IOUDto {
  constructor(hashDto, claimsDto, metaDto) {
    this.hash = hashDto;
    this.data = claimsDto;
    this.meta = metaDto;
  }
}

module.exports = { IOUDto };
