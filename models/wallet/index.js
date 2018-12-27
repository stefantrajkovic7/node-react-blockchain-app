const { STARTING_BALANCE } = require('../../data');
const { ec }  = require('../../utils/elliptic');
 
class Wallet {
    constructor() {
        this.balance = STARTING_BALANCE;

        const keyPair = ec.genKeyPair();

        this.publicKey = keyPair.getPublic();
    }
}

module.exports = Wallet;