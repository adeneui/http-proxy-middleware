module.exports = {
    proxyError : proxyError
}

function proxyError (err, req, res) {
    var host = (req.headers && req.headers.host);
    res.writeHead(500);
    res.end('Error occured while trying to proxy to: '+ host + req.url);
};
