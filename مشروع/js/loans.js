document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loanForm");
    const resultBox = document.getElementById("result");
    const ctx = document.getElementById("loanChart").getContext("2d");
    let loanChart;
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const loanType = document.getElementById("loanType").value;
      const amount = parseFloat(document.getElementById("amount").value);
      const years = parseInt(document.getElementById("years").value);
  
      if (!loanType || amount <= 0 || years <= 0) {
        alert("من فضلك أدخل بيانات صحيحة");
        return;
      }
  
      // نسب فائدة تقريبية
      let interestRate;
      switch (loanType) {
        case "personal":
          interestRate = 0.12; // 12%
          break;
        case "car":
          interestRate = 0.10; // 10%
          break;
        case "home":
          interestRate = 0.08; // 8%
          break;
        case "business":
          interestRate = 0.15; // 15%
          break;
        default:
          interestRate = 0.1;
      }
  
      const totalInterest = amount * interestRate * years;
      const totalPayable = amount + totalInterest;
      const monthlyPayment = (totalPayable / (years * 12)).toFixed(2);
  
      resultBox.style.display = "block";
      resultBox.innerHTML = `
        <h3>نتيجة الحساب</h3>
        <p>نوع القرض: <strong>${loanType}</strong></p>
        <p>المبلغ المطلوب: <strong>${amount} جنيه</strong></p>
        <p>مدة القرض: <strong>${years} سنوات</strong></p>
        <p>إجمالي المبلغ المستحق: <strong>${totalPayable.toFixed(2)} جنيه</strong></p>
        <p>القسط الشهري: <strong>${monthlyPayment} جنيه</strong></p>
      `;
  
      // رسم بياني
      if (loanChart) {
        loanChart.destroy();
      }
  
      loanChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["المبلغ الأصلي", "الفوائد"],
          datasets: [{
            data: [amount, totalInterest],
            backgroundColor: ["#004aad", "#ff9900"],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                font: { family: "Cairo", size: 14 }
              }
            }
          }
        }
      });
    });
  });