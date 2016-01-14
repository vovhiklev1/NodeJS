
exports.mail = function (req, res) {
    console.log('req '+ req.params + ' ' + req.params.fname)
    res.send(req.params)
}

exports.push = function (req, res) {
    console.log('push ' + req.params + ' ' + req.params.fname)
    res.send({hey: 'there push'})
}
exports.del = function (req, res) {
    console.log('del '+ req.query.fname + ' ' + req.params.fname)
    res.send(req.params.list)
    // res.send({hey: 'there'})
}