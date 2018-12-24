const Blockchain = require('../../../models/blockchain-model');

const blockchain = new Blockchain();

/**
 * @api {get} /blocks
 *
 * @apiName GET Fetch All Blocks
 *
 * @access Public
 *
 * @apiHeader (RequestFileHeader) {String="application/json"} Content-Type
 *
 * @apiSuccess (200) {String} Fetching a Blocks
 *
 * @apiError (400) {String} message Validation Error
 *
 * @apiError (500) {String} Internal Server error
 */

exports.list = (req, res) => {
    res.json(blockchain.chain);
 };