const { STARTING_BALANCE } = require('../../data');
const { ec }  = require('../../utils/elliptic');
const cryptoHash = require('../../utils/crypto-hash');
 
class Wallet {
    constructor() {
        this.balance = STARTING_BALANCE;

        this.keyPair = ec.genKeyPair();

        this.publicKey = this.keyPair.getPublic().encode('hex');
    }

    sign(data) {
        return this.keyPair.sign(cryptoHash(data));
    }
}

module.exports = Wallet;