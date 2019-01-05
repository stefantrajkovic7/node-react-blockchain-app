const Wallet = require('../../../models/wallet');
const TransactionPool = require('../../../models/wallet/transaction-pool');
const PubSub = require('../../../utils/pubsub');

const wallet = new Wallet();
const transactionPool = new TransactionPool();
const pubsub = new PubSub({ transactionPool, wallet })

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