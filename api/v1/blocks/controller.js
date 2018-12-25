const Blockchain = require('../../../models/blockchain');
const PubSub = require('../../../utils/pubsub');

const blockchain = new Blockchain();
const pubsub = new PubSub({ blockchain })

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

 /**
 * @api {post} /blocks/mine
 *
 * @apiName POST Block mining
 *
 * @access Public
 *
 * @apiHeader (RequestFileHeader) {String="application/json"} Content-Type
 *
 * @apiSuccess (200) {String} Creates a Block
 *
 * @apiError (400) {String} message Validation Error
 *
 * @apiError (500) {String} Internal Server error
 */

exports.create = (req, res) => {
    const { data } = req.body;

    blockchain.addBlock({ data });

    pubsub.broadcast();

    res.redirect('/api/v1/blocks');
 };