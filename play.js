// This will serve as your main file through which you will launch the game client.

const net = require("net");

const connect = require('./client');

console.log("Connecting ...");
connect();

const handleUserInput = function () {
  // your code here
  // \u0003 maps to ctrl+c input
  if ('\u0003') {
    process.exit();
  }
};

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

setupInput();
// localhost