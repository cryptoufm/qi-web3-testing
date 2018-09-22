var Web3 = require('web3');

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // Set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
}



var collection = "0xBd032F08e6CCcF634bB96b4f61D6e8E466387FA8"
var wallet = "0xBd032F08e6CCcF634bB96b4f61D6e8E466387FA8"


function getIssuedQis(collection, wallet){
  var registry = require('./constats/addr.json');
  var qiRegistry = require('./contracts/qiRegistry.json');
  var contract = new web3.eth.Contract(qiRegistry.abi, registry.qiRegistry);
  contract.methods.getEmitterQis(collection).call({from: wallet}, function(error, result){
      console.log(result)
  });
}

function getMyQis(collection, wallet){
  var registry = require('./constats/addr.json');
  var qiRegistry = require('./contracts/qiRegistry.json');
  var contract = new web3.eth.Contract(qiRegistry.abi, registry.qiRegistry);
  contract.methods.getReceiverQis(collection).call({from: wallet}, function(error, result){
      console.log(result)
  });
}

getIssuedQis(collection, wallet);

getMyQis(collection, wallet);
