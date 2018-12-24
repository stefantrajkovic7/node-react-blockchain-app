const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const Blockchain = require('./models/blockchain-model');
const PubSub = require('./core/pubsub');

const app = express();

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

setTimeout(() => pubsub.broadcast(), 1000);

// API Routes
require('./routes')(app);

module.exports = app;