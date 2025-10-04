const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  testMatch: [
    "**/test_jest/**/*.test.ts"
  ],
  transform: {
    ...tsJestTransformCfg,
  },
};