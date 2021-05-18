const x = require('./config');

const { Balance } = x;
const b = new Balance({});



let getBalanceHold = b.getBalance({
  accountType: Balance.AccountType.Holding,
})
  .then(r => {
    console.log('Holding balance:', r); 
  })
  .catch(e => {
    console.error(e); 

  });


 let getBalanceCash =  b.getBalance({
    accountType: Balance.AccountType.Cash,
  })
    .then(r => {
      console.log('Cash balance:', r); 
   
    })
    .catch(e => {
      console.error(e); 
  
    });

// call all promise
Promise.all([getBalanceHold,getBalanceCash])