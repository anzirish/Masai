function bankAccount() {
    balance = 0
  
    return {
      deposit: function (amount) {
        if (amount <= 0) {
          return `Invalid amount`;
        }
        balance += amount;
        return balance;
      },
      withdraw: function (amount) {
        if (amount <= 0) {
          return `Invalid amount`;
        }
        if(amount > balance){
            return 'Insufficient balance'
        }
        balance -= amount;
        return balance;
      },
      getBalance: function () {
        return balance;
      },
      reset : function(){
        balance = 0
        return "Balance got reset"
      }
    };
  }
  
  const account = bankAccount();
  
  console.log(account.deposit(50)); 
  console.log(account.withdraw(300));
  console.log(account.withdraw(30)); 
  console.log(account.reset());
  console.log(account.getBalance());
  