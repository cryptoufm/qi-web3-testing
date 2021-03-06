var Web3 = require('web3');

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // Set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
}
//web3.eth.defaultAccount = "0xa6A7fC761D06e325a64D7D105f51f115405C9349"
//web3.eth.accounts.wallet.add("0x" + "f6e1d02c2ff55668076f4b360c9e73f0999987ea69ba9caffaea51b7a5113339");


var wallet = '0xa6A7fC761D06e325a64D7D105f51f115405C9349'
var title = "Hackathon 2018";
var info = "Primer hackathon de blockchain en centroamerica";


function createQi(walletAddr, title, info){
  var qi = require('./contracts/Qi.json');
  var contract = new web3.eth.Contract(qi.abi);
  var deployment = contract.deploy({
      data: qi.bytecode,
      // params passed to the constructor
      arguments: [title, info]
  });
  deployment.estimateGas(function(err, gas){
    deployment.send({
      from: walletAddr,
      gas: gas
    }).on('error', function(error){ console.log(error) })
    .then(function(newContractInstance){
      console.log(newContractInstance.options.address) // instance with the new contract address
    });
  });
}

createQi(wallet, title, info);
