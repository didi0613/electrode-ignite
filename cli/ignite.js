"use strict";

const igniteCore = require("ignite-core");

function ignite() {
  igniteCore("oss", process.argv[2]);
};

module.exports = ignite;
