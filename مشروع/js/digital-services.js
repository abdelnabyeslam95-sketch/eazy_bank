document.addEventListener("DOMContentLoaded", function () {
    // ================== الرسم البياني الدائري ==================
    const ctxPie = document.getElementById("financeChart").getContext("2d");
    const defaultData = [50, 30, 20]; // القيم الافتراضية
  
    let financeChart = new Chart(ctxPie, {
      type: "pie",
      data: {
        labels: ["المصروفات", "الادخار", "المدفوعات الرقمية"],
        datasets: [{
          data: [...defaultData],
          backgroundColor: ["#ff4d4d", "#4caf50", "#2196f3"],
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
  
    // ================== الرسم البياني العمودي ==================
    const ctxBar = document.getElementById("incomeExpenseChart").getContext("2d");
  
    new Chart(ctxBar, {
      type: "bar",
      data: {
        labels: ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو"],
        datasets: [
          {
            label: "الدخل",
            data: [5000, 5200, 5300, 5500, 5800, 6000],
            backgroundColor: "#4caf50"
          },
          {
            label: "المصروفات",
            data: [3000, 3200, 3100, 3400, 3600, 3700],
            backgroundColor: "#ff4d4d"
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
            labels: {
              font: { family: "Cairo", size: 13 }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "المبلغ بالجنيه"
            }
          }
        }
      }
    });
  
    // ================== التفاعل مع الفورم ==================
    document.getElementById("financeForm").addEventListener("submit", function (e) {
      e.preventDefault();
  
      const expenses = parseInt(document.getElementById("expenses").value) || 0;
      const savings = parseInt(document.getElementById("savings").value) || 0;
      const payments = parseInt(document.getElementById("payments").value) || 0;
  
      const total = expenses + savings + payments;
  
      if (total !== 100) {
        alert("⚠ يجب أن يكون مجموع النسب = 100%");
        return;
      }
  
      financeChart.data.datasets[0].data = [expenses, savings, payments];
      financeChart.update();
    });
  
    // إعادة التعيين
    document.getElementById("resetBtn").addEventListener("click", function () {
      financeChart.data.datasets[0].data = [...defaultData];
      financeChart.update();
  
      document.getElementById("expenses").value = "";
      document.getElementById("savings").value = "";
      document.getElementById("payments").value = "";
    });
  });