const path = require('path');
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db/db.json");
const middlewares = jsonServer.defaults();

// Şəkil qovluğunun yerini göstərin
server.use('/img', jsonServer.defaults({ static: path.join(__dirname, 'db/img') }));

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
    console.log("JSON Server is running on http://localhost:3000");
});

module.exports = server;
