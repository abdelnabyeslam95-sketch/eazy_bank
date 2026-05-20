// رسم بياني لحركة المعاملات
const ctx = document.getElementById("transactionsChart").getContext("2d");

const transactionsChart = new Chart(ctx, {
  type: "line", // ممكن تغيرها لـ bar أو pie حسب ذوقك
  data: {
    labels: ["سبتمبر 1", "سبتمبر 5", "سبتمبر 10", "سبتمبر 15", "سبتمبر 20"],
    datasets: [
      {
        label: "إيداع",
        data: [2000, 5000, 1000, 3000, 4000],
        borderColor: "green",
        backgroundColor: "rgba(0, 128, 0, 0.2)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "سحب",
        data: [1000, 2000, 500, 1500, 1000],
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "المبلغ (ج.م)",
        },
      },
      x: {
        title: {
          display: true,
          text: "التاريخ",
        },
      },
    },
  },
});