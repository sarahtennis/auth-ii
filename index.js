const server = require('./api/server.js');

// [GET] /
// test endpoint
server.get('/', (req, res) => {
    res.send('Server running');
});

const port = 7777;
server.listen(port, () => console.log(`\nServer listening on port ${port}\n`));