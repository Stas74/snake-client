const net = require("net");

const host = 'localhost';
const port = 50541;

// establishes a connection with the game server
const connect =  () => {
  const conn = net.createConnection({
    host, // 'localhost', // 172.28/.57/.103 , // IP address here,
    port // 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });

  return conn;
};

module.exports = connect