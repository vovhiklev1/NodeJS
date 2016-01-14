/**
 * Created by Vova on 08.01.2016.
 */
function User(name){
    this.name = name;
}
User.prototype.hello = function(who){
    console.log('hello' + who.name)
}

console.log('user ok');
//exports.User = User;
module.exports = User;