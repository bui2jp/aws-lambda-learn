"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// dist/hello-world/app.js
var app_exports = {};
__export(app_exports, {
  lambdaHandler: () => lambdaHandler
});
module.exports = __toCommonJS(app_exports);

// dist/common/mylib.js
var MyLib = class {
  static formatMessage(name) {
    return `Hello, ${name}!`;
  }
  static getCurrentTimestamp() {
    return new Date().toISOString();
  }
};

// dist/hello-world/app.js
var lambdaHandler = async (event) => {
  try {
    const message = MyLib.formatMessage("Alice");
    const timestamp = MyLib.getCurrentTimestamp();
    const message2 = "Hello, test test!2";
    console.log(message + timestamp);
    console.log(message2);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "hello world"
      })
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "some error happened"
      })
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  lambdaHandler
});
