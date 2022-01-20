let connection;


const handleUserInput = function (key) {
  // your code here
  // \u0003 maps to ctrl+c input
  
  if (key === '\u0003') {
    process.exit();
  };
  if (key === 'w') {
    connection.write("Move: up");
  };
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key ==='s') {
    connection.write("Move: down");
  };
  if (key === 'd') {
    connection.write("Move: right");
  }
};

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

module.exports = {setupInput};


/*
let connection;

const setupInput = (conn) => {
  connection = conn;
};
*/