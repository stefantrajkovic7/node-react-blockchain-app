const Block = require('./block-model');
const cryptoHash = require('../core/crypto-hash');

class Blockchain {
    constructor() {
        this.chain = [Block.genesis()];
    }

    addBlock({ data }) {
        const newBlock = Block.mineBlock({
            lastBlock: this.chain[this.chain.length - 1],
            data
        });

        this.chain.push(newBlock);
    }

    replaceChain(chain) {
        if (chain.length <= this.chain.length) {
            return;
        }

        if (!Blockchain.isValidChain(chain)) {
            return;
        }

        this.chain = chain;
    }

    static isValidChain(chain) {
        if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) {
            return false;
        }

        for (let i = 1; i < chain.length; i++) {
            const block = chain[i];

            const actualLastHash = chain[i - 1].hash;

            const { timestamp, lastHash, hash, data } = block;
            if (lastHash !== actualLastHash) return false;

            const validatedHash = cryptoHash(timestamp, lastHash, data);
            if (hash !== validatedHash) return false;
        }

        return true;
    }
}

module.exports = Blockchain;