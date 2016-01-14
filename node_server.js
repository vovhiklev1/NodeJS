var jsonData = require('./data.json');
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var obj;

var writeData = function (newObj) {
    fs.writeFile('data.json', newObj, function (err) {
        if (err) {
            console.log('error writing');
            return
        }
        ;

    })
};

var readData = function () {
    fs.readFile('data.json', function (err, info) {
        if (err) {
            console.log('error ' + err)
            res.statusCode = 500;
            res.end();
            return
        }
        obj = JSON.parse(info);
        //  console.log(obj[0].name)
    });
};

http.createServer(function (req, res) {
    console.log('Started');
    if (req.method == "GET") {
        console.log('GET');
        readData();
        res.end(JSON.stringify(obj))
    }
    if (req.method == 'POST') {
        console.log('post')
        var page = querystring.parse(url.parse(req.url).query);
        var param = page['id'];
        console.log('post ' + param)
        if (param) {
            readData();
            for (i in obj) {
                if (param == obj[i]._id) {
                    console.log(obj[i].name + '   ----')
                    obj[i].name = obj[i].name + '__';
                    var newObj = JSON.stringify(obj);
                    writeData(newObj);

                }
            }
        }
    }

    //    res.end('Hello');
}).listen(3000);
