var server = require('./serverApp');

var resources = require('./resources/index.js');

//server.get('/lists', resources.lists.mail);
server.get('/lists', resources.lists.mail);
server.post('/lists/:list', resources.lists.push);
server.get('/lists/:list', resources.lists.del);