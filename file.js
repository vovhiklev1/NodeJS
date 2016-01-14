/**
 * Created by Vova on 08.01.2016.
 */

var http = require('http');
var fs = require('fs');
var ip = '127.0.0.1';
var port = '8080';

var server = http.createServer(function (request, response) {
    console.log('reqest: ' + request.url);
    fs.readFile('./tree/' + request.url, function (error, data) {
        if (error) {
            response.writeHead(404, {'Content-type': 'text/plain'});
            response.end('404');
        } else {
            response.writeHead(200, {'Content-type': 'text/html'})
            response.end(data);
        }
        ;
    });
});

server.listen(port,ip, function(){
    console.log('listen ' + ip  + port)
})
