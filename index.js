const Web3 = require('web3');

const web3 = new Web3('https://cloudflare-eth.com');

const get_latest_block_num = async () => {
	const latest_num = await web3.eth.getBlockNumber();
	console.log(latest_num);
}

get_latest_block_num();