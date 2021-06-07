const http = require('http');

const port = process.env.PORT || 5000;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-type', 'text/plain');
    response.end('Hello World\n\nCool!');
});

server.listen(port, (err) => {
    if (err) {
        return console.log('Something went wrong', err);
    }
    console.log('Server listening on: ${port}');
});