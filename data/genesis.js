const MINE_RATE = 1000;

const INITIAL_DIFFICULTY = 3;

const GENESIS_DATA = {
    timestamp: 1,
    lastHash: '_ _ _ _ _',
    hash: 'hash-one',
    difficulty: INITIAL_DIFFICULTY,
    data: []
}

module.exports = { GENESIS_DATA, MINE_RATE };