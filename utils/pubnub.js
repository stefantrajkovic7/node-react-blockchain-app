const PubNub = require('pubnub');
const credentials = require('../config');

const CHANNELS = {
    TEST: 'TEST'
};

class PubSub {
    constructor() {
        this.pubnub = new PubNub(credentials);

        this.pubnub.subscribe({ channels: Object.values(CHANNELS.TEST) })

        this.pubnub.addListener(this.listener())
    }

    listener() {
        return {
            message: messageObject => {
                const { channel, message } = messageObject;

                console.log(`Message received. Channel: ${channel}. Message: ${message}`);
            }
        }
    }

    publish({ channel, message }) {
        this.pubnub.publish({ channel, message });
    }
    
}

module.exports = PubSub;