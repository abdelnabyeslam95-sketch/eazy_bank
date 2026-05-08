document.addEventListener("DOMContentLoaded", function () {
    // === الرسم البياني الأساسي ===
    const ctx = document.getElementById("savingsChart").getContext("2d");
  
    let savingsChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["السنة 1", "السنة 2", "السنة 3", "السنة 4", "السنة 5"],
        datasets: [{
          label: "رصيد المدخرات (بالجنيه)",
          data: [0, 0, 0, 0, 0],
          borderColor: "#00796b",
          backgroundColor: "rgba(0, 121, 107, 0.2)",
          tension: 0.3,
          fill: true,
          pointBackgroundColor: "#004d40"
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
            labels: { font: { family: "Cairo", size: 14 } }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: "المبلغ بالجنيه" }
          }
        }
      }
    });
  
    // === الحاسبة التفاعلية ===
    const form = document.getElementById("savingForm");
    const resultDiv = document.getElementById("result");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const income = parseFloat(document.getElementById("income").value);
      const rate = parseFloat(document.getElementById("rate").value) / 100;
      const years = parseInt(document.getElementById("years").value);
  
      if (isNaN(income) || isNaN(rate) || isNaN(years)) {
        resultDiv.textContent = "⚠ من فضلك أدخل قيم صحيحة";
        return;
      }
  
      const monthlySaving = income * rate;
      const total = monthlySaving * 12 * years;
  
      resultDiv.textContent = "المبلغ المتوقع ادخاره خلال الفتره="+total.toLocaleString();
  
      // تحديث الرسم البياني بناءً على المدخلات
      const yearlyData = [];
      for (let i = 1; i <= years; i++) {
        yearlyData.push(monthlySaving * 12 * i);
      }
  
      savingsChart.data.labels =" yearlyData.map((_, i) => السنة ${i + 1})";
      savingsChart.data.datasets[0].data = yearlyData;
      savingsChart.update();
    });
  });