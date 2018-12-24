const express = require('express');
const request = require('request');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const Blockchain = require('./models/blockchain-model');
const PubSub = require('./core/pubsub');

const app = express();

const DEFAULT_PORT = 5000;
const ROOT_NODE_ADDRESS = `http://localhost:${DEFAULT_PORT}`;
const UI_API_URL = 'http://localhost:3000';


// Express Configuration
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS
const options = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization", "X-Access-Token", "application/x-www-form-urlencoded", "charset=UTF-8", "application/json", "text/plain", "Access-Control-Allow-Headers"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: UI_API_URL,
    preflightContinue: false
};

app.use(cors(options));

// Middlewares and CORE
const blockchain = new Blockchain();
const pubsub = new PubSub({ blockchain })

// API Routes
require('./routes')(app);

// Server
const syncChains = () => {
    request({ url: `${ROOT_NODE_ADDRESS}/api/v1/blocks`}, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const rootChain = JSON.stringify(body);

            console.log('replace chain on a sync with', rootChain)

            blockchain.replaceChain(rootChain);
        }
    });
}

let PEER_PORT;

if (process.env.GENERATE_PEER_PORT === 'true') {
    PEER_PORT = DEFAULT_PORT + Math.ceil(Math.random() * 1000)
}

const PORT = PEER_PORT || DEFAULT_PORT;

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);

    if (PORT !== DEFAULT_PORT) {
        syncChains();
    }

});

