// This will serve as your main file through which you will launch the game client.

const net = require("net");

const {connect} = require('./client');
const {setupInput} = require("./input");

console.log("Connecting ...");



setupInput(connect());
// localhost