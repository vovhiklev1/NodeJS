/**
 * Created by Vova on 08.01.2016.
 */

var User = require('./user');

function run() {
    var v = new User('1');
    var p = new User('2');

    v.hello(p)
}

if (module.parent) {
    exports.run = run();
} else {
    run();
}