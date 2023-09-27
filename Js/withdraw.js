document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const  newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    const currentElemnt = document.getElementById('withdraw-total');
    const currentElementString = currentElemnt.innerText;
    const newCurrentElement = parseFloat(currentElementString);
    

    const totalBalance = document.getElementById('total-balance');
    const totalBalanceString = totalBalance.innerText;
    const newTotalBalance = parseFloat(totalBalanceString);
    withdrawField.value = '';
    if(newWithdrawAmount > newTotalBalance ){
        alert('Invalid Balance')
        return;
    }
    const showingWithdraw = newCurrentElement + newWithdrawAmount;
    currentElemnt.innerText = showingWithdraw;
    const addNewBalance = newTotalBalance - showingWithdraw;
    totalBalance.innerText = addNewBalance;
     
   
    
    
    
    

})