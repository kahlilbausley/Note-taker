var express = require('express');
var jsonServer = require('json-server');
var server = express();
server.use(express.static("public"))
const PORT = process.env.PORT || 3000
// ...
// You may want to mount JSON Server on a specific end-point, for example /api
// Optiona,l except if you want to have JSON Server defaults
// server.use('/api', jsonServer.defaults());
const router = jsonServer.router('db.json');
router.db._.id = "title";
server.use("/api", router); 
server.listen(PORT);