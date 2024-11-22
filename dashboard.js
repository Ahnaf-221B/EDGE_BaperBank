document.getElementById("deposit-btn").addEventListener("click", () => {
  const depositField = document.getElementById("deposit-field");

  const depositAmount = parseFloat(depositField.value);
  const depositTotal = document.getElementById("deposit-total");
  const depositTotalAmount = parseFloat(depositTotal.innerText);
  const newDepositTotal = depositTotalAmount + depositAmount;
  depositTotal.innerText = newDepositTotal;

  const balaneAmount = document.getElementById("balance-total");
  const balaneAmountValue = parseFloat(balaneAmount.innerText);
  const newBalance = balaneAmountValue + depositAmount;
  balaneAmount.innerText = newBalance;

  depositField.value = " ";
});

document.getElementById("withdraw-btn").addEventListener("click", () => {
  const withdrawField = document.getElementById("withdraw-field");
  const withdrawAmount = parseFloat(withdrawField.value);

  withdrawField.value = "";
  if (isNaN(withdrawAmount)) {
    alert("Please enter a valid number");
    return;
  }

  const withdrawTotal = document.getElementById("withdraw-total");
  const withdrawTotalAmount = parseFloat(withdrawTotal.innerText);

  const balaneAmount = document.getElementById("balance-total");
  const balaneAmountValue = parseFloat(balaneAmount.innerText);

  if (withdrawAmount > balaneAmountValue) {
    alert("Insufficient balance");
    return;
  }

  const currentWithdraw = withdrawTotalAmount + withdrawAmount;
  withdrawTotal.innerText = currentWithdraw;

  const newBalanceTotal = balaneAmountValue - withdrawAmount;
  balaneAmount.innerText = newBalanceTotal;
});
