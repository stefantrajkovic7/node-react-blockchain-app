const Wallet = require('../../../models/wallet');
const Blockchain = require('../../../models/blockchain');
const TransactionPool = require('../../../models/wallet/transaction-pool');
const PubSub = require('../../../utils/pubsub');
const TransactionMiner = require('../../../utils/transaction-miner');

const blockchain = new Blockchain();
const wallet = new Wallet();
const transactionPool = new TransactionPool();
const pubsub = new PubSub({ transactionPool, wallet })
const transactionMiner = new TransactionMiner({ blockchain, transactionPool, wallet, pubsub });


/**
 * @api {get} mines/list
 *
 * @apiName GET Fetch Mine Transactions List
 *
 * @access Public
 *
 * @apiHeader (RequestFileHeader) {String="application/json"} Content-Type
 *
 * @apiSuccess (200) {String} Fetching Mine Transactions
 *
 * @apiError (400) {String} message Validation Error
 *
 * @apiError (500) {String} Internal Server error
 */

exports.list = (req, res) => {
    transactionMiner.mineTransactions();

    res.redirect('/api/v1/blocks');
};

 /**
 * @api {post} /mines/mine
 *
 * @apiName POST Mine transaction
 *
 * @access Public
 *
 * @apiHeader (RequestFileHeader) {String="application/json"} Content-Type
 *
 * @apiSuccess (200) {String} Mines a Transaction
 *
 * @apiError (400) {String} message Validation Error
 *
 * @apiError (500) {String} Internal Server error
 */

exports.mine = (req, res) => {
    
};