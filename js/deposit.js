document.addEventListener("DOMContentLoaded", function () {
    let balance = 0;
    const balanceDisplay = document.getElementById("balance");
    const amountInput = document.getElementById("amount");
    const historyList = document.getElementById("historyList");
  
    function updateBalance() {
      balanceDisplay.textContent = balance + " جنيه";
    }
  
    function addHistory(action, amount) {
      const li = document.createElement("li");
      li.textContent = "${action}: ${amount} جنيه | الرصيد الحالي: ${balance} جنيه";
      historyList.prepend(li);
    }
  
    document.getElementById("depositBtn").addEventListener("click", function () {
      const amount = parseFloat(amountInput.value);
      if (amount > 0) {
        balance += amount;
        updateBalance();
        addHistory("إيداع", amount);
        amountInput.value = "";
      } else {
        alert("من فضلك أدخل مبلغ صحيح.");
      }
    });
  
    document.getElementById("withdrawBtn").addEventListener("click", function () {
      const amount = parseFloat(amountInput.value);
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        updateBalance();
        addHistory("سحب", amount);
        amountInput.value = "";
      } else {
        alert("الرصيد غير كافي أو المبلغ غير صالح.");
      }
    });
  
    updateBalance();
  });