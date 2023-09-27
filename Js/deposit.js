document.getElementById('dpst-btn').addEventListener('click', function(){
    const depositeAmount = document.getElementById('deposit-amount');
    const newDepositFieldString = depositeAmount.value;
    const newDepositField = parseFloat(newDepositFieldString);
    const depositTotalAmount = document.getElementById('total-deposit');
    const previousDepositAmountString = depositTotalAmount.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);
    const currentTotalDeposit = previousDepositAmount + newDepositField;
    depositTotalAmount.innerText = currentTotalDeposit;
    depositeAmount.value = '';

    const totalBalanceAmount = document.getElementById('total-balance');
    const previousBalanceAmountString = totalBalanceAmount.innerText;
    const currentTotalBalance = parseFloat( previousBalanceAmountString);
    const showingCurrentBalance = currentTotalBalance + currentTotalDeposit;
    totalBalanceAmount.innerText = showingCurrentBalance;
    


})

