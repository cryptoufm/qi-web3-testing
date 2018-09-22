var Web3 = require('web3');

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // Set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
}

//web3.eth.defaultAccount = web3.eth.accounts[0];

var collection = require('./contracts/qiRegistry.json');
const contract = new web3.eth.Contract(collection.abi);

let bytecode = collection.bytecode;
console.log(bytecode)

var deployment = contract.deploy({
    data: bytecode,
    // params passed to the constructor
    // arguments: [123, 'My String']
});

deployment.estimateGas(function(err, gas){

  deployment.send({
    from: '0xa6A7fC761D06e325a64D7D105f51f115405C9349',
    gas: gas
  }).then(function(newContractInstance){
    console.log(newContractInstance.options.address) // instance with the new contract address
  });

});
