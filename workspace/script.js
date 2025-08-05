document.addEventListener('DOMContentLoaded', () => {
  const balanceDisplay = document.querySelector('.balance');
  const depositBtn = document.querySelector('.deposit');
  const withdrawBtn = document.querySelector('.withdraw');
  const updateBtn = document.querySelector('.update');
  const amountInput = document.getElementById('amountInput');

  let balance = 0;
  let currentAction = 'deposit';

  // Toggle active button
  depositBtn.addEventListener('click', () => {
    currentAction = 'deposit';
    depositBtn.classList.add('active');
    withdrawBtn.classList.remove('active');
  });

  withdrawBtn.addEventListener('click', () => {
    currentAction = 'withdraw';
    withdrawBtn.classList.add('active');
    depositBtn.classList.remove('active');
  });

  updateBtn.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid positive amount.");
      return;
    }

    if (currentAction === 'deposit') {
      balance += amount;
    } else if (currentAction === 'withdraw') {
      if (amount > balance) {
        alert("Insufficient funds.");
        return;
      }
      balance -= amount;
    }

    amountInput.value = '';
    updateDisplay();
  });

  function updateDisplay() {
    balanceDisplay.textContent = `$${balance.toFixed(2)}`;
  }
});
