const Web3 = require('web3');
const {get_latest_block_num} = require('./support');



const web3 = new Web3('https://cloudflare-eth.com');

get_latest_block_num(web3);