const http = require('http');
const assert = require('assert');


const obj1 = {
  a: {
    b: 1,
  },
};
const obj2 = {
  a: {
    b: 2,
  },
};
const obj3 = {
  a: {
    b: 1,
  },
};
const obj4 = Object.create(obj1);
assert.deepEqual(obj1, obj1);
const hostname = '127.0.0.1';
const port = 7001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
  console.log(assert.deepEqual(obj1, obj1));
});
