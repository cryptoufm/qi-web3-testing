var Web3 = require('web3');

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // Set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
}



var wallet = "0xBd032F08e6CCcF634bB96b4f61D6e8E466387FA8"
var issuedQi = "0xB95d301239c4B16B025DFf6D1e82AE95D243e94e"



function registerQi(issuedQi, wallet){
  var registry = require('./constats/addr.json');
  var qiRegistry = require('./contracts/qiRegistry.json');
  var contract = new web3.eth.Contract(qiRegistry.abi, registry.qiRegistry);

  contract.methods.registerIssuers(issuedQi).send({from: wallet}, function(error, result){
      if(!error){
        console.log(result)
      }
      else {
        console.log("Error ", error)
      }
  });
}

registerNewCollection(issuedQi, wallet);
