// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Poppins', 'sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("generalTripProfitBreakdown");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [90.12, 1.42, 7.76, 0.05, 0.57],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }, {
      data: [0, 0, 0, 0, 0, 2.15, 6.33, 0.26, 53.71, 3.5, 7.99, 0.73, 0.35, 24.49, 0.5],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
    labels: ["Fair", "Promotion", "Tip", "Share Adjustment", "Tolls", "Cancellation Fees", "Base", "Additional Pickups", "Distance", "Fare Supplement", "Surge", "Long Pickup Distance", "Long Pickup Time", "Trip Time", "Wait Time"],
  }, 
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false,
      // position: 'bottom'
    },
    cutoutPercentage: 60,
  },
});
