// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const balanceDisplay = document.querySelector('.balance');
  const depositBtn = document.querySelector('.deposit');
  const withdrawBtn = document.querySelector('.withdraw');

  let balance = 0;

  // Prompt user to enter amount and update balance
  depositBtn.addEventListener('click', () => {
    const amount = parseFloat(prompt("Enter deposit amount:"));
    if (!isNaN(amount) && amount > 0) {
      balance += amount;
      updateDisplay();
    } else {
      alert("Please enter a valid amount.");
    }
  });

  withdrawBtn.addEventListener('click', () => {
    const amount = parseFloat(prompt("Enter withdrawal amount:"));
    if (!isNaN(amount) && amount > 0) {
      if (amount <= balance) {
        balance -= amount;
        updateDisplay();
      } else {
        alert("Insufficient funds.");
      }
    } else {
      alert("Please enter a valid amount.");
    }
  });

  function updateDisplay() {
    balanceDisplay.textContent = `$${balance.toFixed(2)}`;
  }
});
