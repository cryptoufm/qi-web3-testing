var Web3 = require('web3');

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // Set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
}


var myCollectionAddr = "0xC9F96EE7AD07A50f715410814f402D616163a7A0"
var wallet = "0xBd032F08e6CCcF634bB96b4f61D6e8E466387FA8"



function retCollectionInfo(collectionAddr, wallet){
  var Collection = require('./contracts/Collection.json');
  var contract = new web3.eth.Contract(Collection.abi, collectionAddr);
  contract.methods.getCollectionInfo().call({from: wallet}, function(error, result){
      console.log(result)
  });
}

retCollectionInfo(myCollectionAddr, wallet);
