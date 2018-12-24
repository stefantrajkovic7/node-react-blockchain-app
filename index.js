const app = require('./app');

const DEFAULT_PORT = 5000;
let PEER_PORT;

if (process.env.GENERATE_PEER_PORT === 'true') {
    PEER_PORT = DEFAULT_PORT + Math.ceil(Math.random() * 1000)
}

const PORT = PEER_PORT || DEFAULT_PORT;

app.listen(PORT, (err) => {
    if (err) {
        return console.log(err)
    }

    return console.log(`server is listening on ${PORT}`)
});