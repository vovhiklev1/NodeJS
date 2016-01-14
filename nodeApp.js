var app = require('./serverApp');
var port = 3000;
var ip = '127.0.0.1';
app.listen(port, ip, function () {
    console.log('Server listen ');
});
