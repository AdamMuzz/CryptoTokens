const Web3 = require('web3');
const support = require('./support');

const web3 = new Web3('https://cloudflare-eth.com');

support.get_latest_block_num(web3);