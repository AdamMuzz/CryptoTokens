const Web3 = require('web3');
const Big = require('bignumber.js');

//////////////////////////////////////////////////////
// Support modules used as helper functions for dev //
//////////////////////////////////////////////////////



//simply gets latest block # off eth chain
const get_latest_block_num = async (web) => {
	const latest_num = await web.eth.getBlockNumber();
	console.log(latest_num);
}



//export list
module.exports = {
	get_latest_block_num,
};